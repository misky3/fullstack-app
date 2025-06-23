import'./listOfExpenses.css';
import { useState, useEffect } from 'react';
import { icons } from '../icons/icons';

function ListOfExpenses({userId}){
    const [sort, setSort] = useState("all");
    const [expenses, setExpenses] = useState([]);
    const [loading, setLoading] = useState(true);
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

    const filteredExpenses = sort === "all"
        ? expenses
        :expenses.filter(exp => exp.category === sort);

    if (loading) return <p>Loading...</p>;
    if (expenses.length === 0) return (
       <div className='expenseList'>
        <div>
            <div className='descript'>
              <p style={{ color: 'yellow' }}>Descriptions</p>
              <ReloadIcon width={20} height={20} onClick={fetchExpenses}/>
            </div>
        </div>
        <div>
            <div>
                <p style={{fontSize: "42.2px"}}>Looks Like You Haven't Added Any</p>
                <span style={{color:"green", fontSize: "42.2px"}}>Expenses Yet.</span>
            </div>
            <div>
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
            <div style={{border:'1px solid yellow', width: '310px'}}>
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
                    {filteredExpenses.map((exp, index) => (
                        <tr className="expense-row" key={index}>
                            <td  colSpan={3}>
                                <div className="expense-info">
                                    <div className="left">
                                    {icons[exp.category]({ width: 20, height: 20 })}
                                    <div className="text-group">
                                        <div className="category">{exp.category.toUpperCase()}</div>
                                        <div className="date">{exp.date_time.slice(0,10)}</div>
                                    </div>
                                    </div>
                                    <div className="right">
                                    ₱{exp.amount}
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListOfExpenses;