import DoughnutChart from '../doughnutChart/DoughnutChart';
import './calculation.css';
import { useState, useEffect } from 'react';

function Calculation({userId, income, totalExpenses, onReset}){
    return(
        <div className='calculation'>
            <div className = 'calcu'>Calculation</div>
            <div style={{border:'1px dashed black', width: '310px'}}></div>
            <div className='income'>
                <div style={{color:"black"}}>Income</div>
                <div style={{color:"black", fontSize:"30px"}}>P{income}</div>
            </div>
            <DoughnutChart income={income} totalExpenses={totalExpenses}/>
            <div className='numbers'>
                <div className='box'>
                    <div style={{color:"white", fontSize: "13px"}}>Available</div>
                    <div style={{color:"green", fontSize: "20px"}}>P{income - totalExpenses}</div>
                </div>
                <div className='box'>
                    <div style={{color:"white", fontSize: "13px"}}>Spent</div>
                    <div style={{color:"yellow", fontSize: "20px"}}>P{totalExpenses}</div>
                </div>
            </div>
            <div style={{border:'1px dashed black', width: '310px'}}></div>
            <button onClick={onReset} className='reset'>Reset Expense</button>
        </div>
    );
}

export default Calculation;