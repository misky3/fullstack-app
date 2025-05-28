import './dashboardLayout.css';
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Modal from "../../components/Modal/Modal";

function DashboardLayout(){
    const [dateTime, setDateTime] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [category, setCategory] = useState("");
    const [amount, setAmount] =useState("");

    const [user, setUser] = useState(null);
    const userId = localStorage.getItem("userId");

    useEffect(() =>{
        if (!userId) return;

        fetch(`http://localhost:5000/api/users/${userId}`)
        .then(res => res.json())
        .then(data => {
            setUser(data);
        })
        .catch(err =>{
            console.error("Error fetching user: ", err);
        });
    }, [userId]);

    useEffect(() => {
        const now = new Date();
        const local = now.toISOString().slice(0,16);
        setDateTime(local);
    },[]);

    const handleCloseModal = () =>{
        const now = new Date();
        const local = now.toISOString().slice(0,16);
        setDateTime(local);

        setShowModal(false);
        setCategory('');
        setDateTime(local);
        setAmount('');
    };

    return(
        <div className='topnav'>
            <div className='top'>
                <div className='title-top'>
                    <div style={{color:'yellow', marginBottom: '0px'}}>
                        Expenses
                    </div>
                    <div className='monthly'>
                        <div>
                            Monthly 
                        </div>
                        <div style={{color:"green"}}>
                            Budget 
                        </div>
                    </div>
                </div>
                <div className='account'>
                    <div>
                        <button onClick={() => setShowModal(true)}>New Expense</button>

                        <Modal show={showModal} onClose={handleCloseModal} className='modal-content'>
                            <div className='add-expense'>
                                <label>Category</label>
                                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                                    <option value="">-- Select Category --</option>
                                    <option value="debt">Debt</option>
                                    <option value="food">Food</option>
                                    <option value="rest">Event</option>
                                    <option value="rent">Rent</option>
                                    <option value="hygiene">Commodity</option>
                                    <option value="subscription">Subscription</option>
                                    <option value="various">Various</option>
                                </select>
                                <label>Date</label>
                                <input type='datetime-local' value={dateTime} onChange={(e) => setDateTime(e.target.value)}/>
                                <label>Amount</label>
                                <input 
                                    placeholder='Enter amount'
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}/>
                                <button>Add to expense</button>
                            </div>
                        </Modal>
                    </div>
                    <div>
                        <label>Welcome, <strong>{user ? user.name : 'Guest'}</strong></label>
                    </div>
                </div>
            </div>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default DashboardLayout;