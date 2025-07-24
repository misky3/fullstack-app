import DoughnutChart from '../doughnutChart/DoughnutChart';
import './calculation.css';
import { useState, useEffect } from 'react';

function Calculation({userId, income, totalExpenses, onReset}){

    // const [user, setUser] = useState(null);

    // useEffect(() => {
    //     fetch(`https://localhost:5000/api/users/${userId}`)
    //     .then(res => res.json())
    //     .then(data =>{
    //         setUser(data);
    //     })
    //     .catch(err =>{
    //         console.error("Error Fetching data for calculation: ", err);
    //     });
    // }, [userId]);


    return(
        <div className='calculation'>
            <div style={{color:"black"}}>Calculation</div>
            <div style={{border:'1px dashed black', width: '310px'}}></div>
            <div>
                <div style={{color:"black"}}>Income</div>
                <div style={{color:"black"}}>{income}</div>
            </div>
            <DoughnutChart income={income} totalExpenses={totalExpenses}/>
            <div>
                <div style={{color:"black"}}>Available</div>
                <div style={{color:"black"}}>${income - totalExpenses}</div>
            </div>
            <div>
                <div style={{color:"black"}}>Spent</div>
                <div style={{color:"black"}}>${totalExpenses}</div>
            </div>
            <div style={{border:'1px dashed black', width: '310px'}}></div>
            <button onClick={onReset}>Reset Expense</button>
        </div>
    );
}

export default Calculation;