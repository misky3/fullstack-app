import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/home/home';
import Dashboard from './screens/dashboard/dashboard';
import DashboardLayout from './screens/dashboardLayout/dashboardLayout';


function App(){

    return(
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            {/* Add more dashboard sub-pages here */}
          </Route>
        </Routes>
      </Router>
    );
}

export default App;