import './dashboard.css';
import { useState, useEffect } from 'react';

function Dashboard(){
    const [user, setUser] = useState(null);
    const userId = localStorage.getItem("userId");

    return(
        <div className='dashboard'>
            <h1>Hello</h1>
            <p style={{fontSize:"40px"}}>sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</p>
        </div>
    );
}

export default Dashboard;