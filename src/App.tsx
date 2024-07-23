import './App.css';
import Employees from './components/Employees';
import Login from './components/Login';
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import NewEmployee from './components/NewEmployee';
import NewDepartment from './components/NewDepartment';
import EditEmployee from './components/EditEmployee';
import EditDepartment from './components/EditDepartment';
function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home page</Link>
      <br />
      <Link to="/employees">Employees</Link>
      <br />
      <Link to="/NewEmployee">new Employee</Link>
      <br />
      <Link to="/Editemployee">edit Employee</Link>
      <br />
      <Link to="/Department">Department</Link>
      <br />
      <Link to="/EditDepartment">EditDepartment</Link>
      <br />
      <Link to="/NewDepartment">NewDepartment</Link>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Employees" element={<Employees />} />
        <Route path="/NewEmployee" element={<NewEmployee />} />
        <Route path="/NewDepartment" element={<NewDepartment />} />
        <Route path="/Editemployee" element={<EditEmployee />} />
        <Route path="/EditDepartment" element={<EditDepartment />} />
      </Routes>
      <Outlet />
    </BrowserRouter>
  );
}

export default App;
