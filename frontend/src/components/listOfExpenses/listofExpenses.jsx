import'./listOfExpenses.css';
import { useState, useEffect } from 'react';

function ListOfExpenses({userId}){
    const [sort, setSort] = useState("");
    const [expenses, setExpenses] = useState([]);
    const [loading, setLoading] = useState(true);

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

    if (loading) return <p>Loading...</p>;
    if (expenses.length === 0) return (
       <div>
            <p>No expenses found.</p>
            <button onClick={fetchExpenses}>Refresh List</button>
        </div>
    );
    return(
        <div>
          <div>
            <div>
              <h3 style={{ color: 'yellow' }}>Descriptions</h3>
              <button onClick={fetchExpenses}>Refresh List</button>
            </div>
            <div>
              <div>Filter Expenses| </div>
              <select value={sort} onChange={(e) => setSort(e.target.value)}>
                  <option value="">All</option>
                  <option value="debt">Date</option>
                  <option value="food">Date</option>
                  <option value="rest">Event</option>
                  <option value="rent">Rent</option>
                  <option value="hygiene">Commodity</option>
                  <option value="subscription">Subscription</option>
                  <option value="various">Various</option>
              </select>
            </div>
          </div>
            <table>
                <tbody>
                    {expenses.map((exp, index) => (
                        <tr key={index}>
                            <td>{exp.category}</td>
                            <td>{exp.date_time}</td>
                            <td>{exp.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListOfExpenses;