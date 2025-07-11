import DoughnutChart from '../doughnutChart/DoughnutChart';
import './calculation.css';
// import { useState, useEffect } from 'react';

function Calculation({userId}){


    return(
        <div className='calculation'>
            <div style={{color:"black"}}>Calculation</div>
            <div style={{border:'1px dashed black', width: '310px'}}></div>
            <div>
                <div style={{color:"black"}}>Income</div>
                <div style={{color:"black"}}>$5257</div>
            </div>
            <DoughnutChart income={2000} totalExpenses={1200}/>
            <div>
                <div style={{color:"black"}}>Available</div>
                <div style={{color:"black"}}>$5257</div>
            </div>
            <div>
                <div style={{color:"black"}}>Spent</div>
                <div style={{color:"black"}}>$5257</div>
            </div>
            <div style={{border:'1px dashed black', width: '310px'}}></div>
            <button>Reset Expense</button>
        </div>
    );
}

export default Calculation;