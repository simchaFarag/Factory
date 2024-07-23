import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewEmployee() {
const navigate=useNavigate();

  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    department: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee(prevEmployee => ({
      ...prevEmployee,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Employee data to be saved:", employee);
    setEmployee({
      name: '',
      email: '',
      department: ''
    });
  };

  const handleCancel = () => {
 
    navigate('/Employees')
  };



  return (

    <div>
    <h2>Create New Employee</h2>
    <form onSubmit={handleSubmit} >
      <label>Name:</label>
      <input 
        type="text" 
        name="name" 
        value={employee.name} 
        onChange={handleChange} 
        required 
      />
      <label>Email:</label>
      <input 
        type="email" 
        name="email" 
        value={employee.email} 
        onChange={handleChange} 
        required 
      />
      <label>Department:</label>
      <input 
        type="text" 
        name="department" 
        value={employee.department} 
        onChange={handleChange} 
        required 
      />
      <button type="submit">Save</button>
      <button type="button" onClick={handleCancel}>Cancel</button>
    </form>
  </div>
    
  )
}

export default NewEmployee
