import './dashboard.css';
import { useState, useEffect } from 'react';

import ListOfExpenses from '../../components/listOfExpenses/listofExpenses';
import Calculation from '../../components/calculation/calculation';
import SubscriptionGoals from '../../components/subscriptionGoal/subscriptionGoal';

function Dashboard(){
    const [resetTime, setResetTime] = useState(null);
    const [user, setUser] = useState(null);
    const [expenses, setExpenses] = useState([]);
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

            fetch(`http://localhost:5000/api/users/${userId}/expenses`)
            .then(res => res.json())
            .then(data => {
                setExpenses(data);
            })
            .catch(err => {
                console.error("Error fetching expense: ", err);
            });
        }, [userId]);

        const filteredExpenses = setResetTime
            ? expenses.filter(exp => new Date(exp.date_time).getTime() > resetTime)
            : expenses;

        const totalExpenses = filteredExpenses.reduce((total, item) => total + item.amount,0);

    return(
        <div className='dashboard'>
            <div className='feature'>
                <ListOfExpenses userId={userId} expenses={expenses} setExpenses={setExpenses}/>
                <Calculation 
                    userId={userId} 
                    income={user ? user.income: 0} 
                    totalExpenses={totalExpenses}
                    onReset={() => setResetTime(Date.now())}/>
                <SubscriptionGoals/>
            </div>
        </div>
    );
}

export default Dashboard;