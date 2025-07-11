import './dashboard.css';
import { useState, useEffect } from 'react';

import ListOfExpenses from '../../components/listOfExpenses/listofExpenses';
import Calculation from '../../components/calculation/calculation';

function Dashboard(){
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
        <div className='dashboard'>
            <div className='feature'>
                <ListOfExpenses userId={userId}/>
                <Calculation userId={userId}/>
            </div>
        </div>
    );
}

export default Dashboard;