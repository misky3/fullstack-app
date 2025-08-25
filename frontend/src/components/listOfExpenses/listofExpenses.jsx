import'./listOfExpenses.css';
import { useState, useEffect } from 'react';
import { validateExpense } from '../../utils/user';
import { icons } from '../icons/icons';
import Modal from '../Modal/Modal';

function ListOfExpenses({userId, expenses, setExpenses}){
    const [sort, setSort] = useState("all");
    const [loading, setLoading] = useState(true);
    const [menuOpenIndex, setMenuOpenIndex] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [dateTime, setDateTime] = useState("");
    const [category, setCategory] = useState("");
    const [selectedExpenseId, setSelectedExpenseId] = useState(null);
    const [amount, setAmount] =useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7;
    const ReloadIcon = icons.reload;

      async function fetchExpenses() {
          try{
              const res = await fetch(`http://localhost:5000/api/users/${userId}/expenses`);
              const data = await res.json();
              setExpenses(data);
          }catch(err){
              console.log("failed to get expense: ", err);
          }finally {
              setLoading(false);
          }
      };

    useEffect(() => {
      console.log("userId is:", userId);
        if (userId) {
            fetchExpenses();
        }
    }, [userId]);

    useEffect(()=> {
      setCurrentPage(1);
    }, [sort]);

    async function handleSubmitEdit(){

      const valid = validateExpense({category, date:dateTime, amount});

        if(!valid){
            alert("Invalid Input");
            return;
        }
        try{
            await fetch(`http://localhost:5000/api/users/update-expense/${selectedExpenseId}`,{
              method: "PUT",
              headers:{
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                category,
                amount, 
                date_time: dateTime
              }),
            });

            setShowModal(false);
            fetchExpenses();
            setShowModal(false);
        }catch (err){
            console.error("Failed to update expense: ", err)
        }
    };

    async function handleDelete(id) {

      if (!window.confirm("Are you sure you want to delete this expense?")) return;

      try {
        const res = await fetch(`http://localhost:5000/api/users/delete-expense/${id}`, {method: "DELETE"});

        if(res.ok){
          setExpenses(prev => prev.filter(exp => exp.id !== id));
          setMenuOpenIndex(null);
        } else{
          console.error("Failed to delete expense");
        }
      } catch (err){
        console.error("Error deleting expense: ", err);
      }
      
    }

    const handleCloseModal = () =>{
        setShowModal(false);
    };

    const filteredExpenses = sort === "all"
        ? expenses
        :expenses.filter(exp => exp.category === sort);

    const sortedExpenses =[...filteredExpenses].sort(
      (a, b) => new Date(b.date_time) - new Date(a.date_time)
    );

    const startIndex = (currentPage - 1)* itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paignatedExpenses = sortedExpenses.slice(startIndex, endIndex);

    if (loading) return <p>Loading...</p>;
    if (expenses.length === 0) return (
       <div className='expenseList'>
        <div>
            <div className='descript'>
              <p style={{ color: 'yellow' }}>Descriptions</p>
              <ReloadIcon width={20} height={20} onClick={fetchExpenses} className='hoverReload'/>
            </div>
        </div>
        <div>
            <div style={{textAlign:"center"}}>
                <p style={{fontSize: "42.2px"}}>Looks Like You Haven't Added Any</p>
                <span style={{color:"green", fontSize: "42.2px"}}>Expenses Yet.</span>
            </div>
            <div style={{textAlign:"center"}}>
                <p>No Worries, Just Hit The
                <span style={{color: "green"}}> 'New Expense'</span> Button To get Started. If you have have click
                <span style={{color: "green"}}>"Refresh"</span></p>
            </div>
        </div>
        </div>
    );
    return(
        <div className='expenseList'>
          <div className='filter'>
            <div className='descript'>
            <p style={{ color: 'yellow' }}>Descriptions</p>
            <ReloadIcon width={20} height={20} onClick={fetchExpenses} className='hoverReload'/>
            </div>
            <div style={{border:'1px solid yellow', width: '460px', padding:'5px'}}>
              Filter Expenses | &nbsp;
              <select 
               style={{
                        backgroundColor: "black",    
                        color: "yellow",             
                        border: "none",             
                        padding: "5px 10px",        
                        borderRadius: "5px",        
                        outline: "none"             
                    }}
              value={sort} onChange={(e) => setSort(e.target.value)}>
                  <option value="all">All</option>
                  <option value="debt">Debt</option>
                  <option value="food">Food</option>
                  <option value="rest">Rest</option>
                  <option value="rent">Rent</option>
                  <option value="hygiene">Commodity</option>
                  <option value="subscription">Subscription</option>
                  <option value="various">Various</option>
              </select>
            </div>
          </div>
            <table>
                <tbody>
          {paignatedExpenses.map((exp, index) => (
            <>
              <tr className="expense-row" key={index} onClick={() => setMenuOpenIndex(index === menuOpenIndex ? null : index)}>
                <td colSpan={3}>
                  <div className="expense-info">
                    <div className="left">
                      {icons[exp.category]({ width: 20, height: 20 })}
                      <div className="text-group">
                        <div className="category">{exp.category.toUpperCase()}</div>
                        <div className="date">Date: {exp.date_time.slice(0, 10)}</div>
                      </div>
                    </div>
                    <div className="right">₱{exp.amount}</div>
                  </div>
                </td>
              </tr>

              {menuOpenIndex === index && (
                <tr>
                  <td colSpan={3}>
                    <div className="row-menu">
                      <button onClick={() =>{ 
                        setShowModal(true);
                        setCategory(exp.category);
                        setDateTime(exp.date_time);
                        setAmount(exp.amount);
                        setSelectedExpenseId(exp.id);
                        }}>Edit</button>

                      <Modal show={showModal} onClose={handleCloseModal} className='modal-content'>
                        <div className='add-expense'>
                                <label>Category</label>
                                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                                    <option value="">-- Select Category --</option>
                                    <option value="debt">Debt</option>
                                    <option value="food">Food</option>
                                    <option value="event">Event</option>
                                    <option value="rent">Rent</option>
                                    <option value="hygiene">Commodity</option>
                                    <option value="subscription">Subscription</option>
                                    <option value="various">Various</option>
                                </select>
                                <label>Date</label>
                                <input type='date' value={dateTime.slice(0,10)} onChange={(e) => setDateTime(e.target.value)}/>
                                <label>Amount</label>
                                <input 
                                    placeholder='Enter amount'
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}/>
                                <button onClick={handleSubmitEdit}>Save changes</button>
                            </div>
                      </Modal>
                      <button onClick={() => handleDelete(exp.id)}>Delete</button>
                    </div>
                  </td>
                </tr>
              )}
            </>
          ))}
        </tbody>
            </table>

            <div className='paignation'>
              <span 
              className={`navbtn ${currentPage === 1 ? 'disabled' : ''}`}
              disabled = {currentPage == 1}
              onClick={() => {if (currentPage > 1) setCurrentPage(prev => prev - 1);}}
              >&lt;</span>

              <span>Page {currentPage} of {Math.ceil(filteredExpenses.length / itemsPerPage)}</span>

              <span
              className={`navbtn ${currentPage === Math.ceil(filteredExpenses.length/ itemsPerPage)}`}
              disabled={currentPage === Math.ceil(filteredExpenses.length / itemsPerPage)}
              onClick={() => {
                    if (currentPage < Math.ceil(filteredExpenses.length / itemsPerPage)) {
                      setCurrentPage(prev => prev + 1);
                    }}}
              >&gt;</span>
            </div>

        </div>
    );
}

export default ListOfExpenses;