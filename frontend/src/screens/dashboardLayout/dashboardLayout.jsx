import './dashboardLayout.css';
import { Outlet } from 'react-router-dom';

function DashboardLayout(){
    return(
        <div className='topnav'>
            <div>
                <div>
                    Hello
                </div>
            </div>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default DashboardLayout;