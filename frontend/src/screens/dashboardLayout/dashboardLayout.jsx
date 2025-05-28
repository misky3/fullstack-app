import './dashboardLayout.css';
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

function DashboardLayout(){
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
                        <button>New Expense</button>
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