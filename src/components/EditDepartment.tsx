import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addDepartmentSuccess } from '../store/action/departmentActions';
import {
  deleteDepartmentSuccess,
  updateDepartmentSuccess,
} from '../store/reducer/departmentReducer';


const EditDepartment = ({ department }) => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employeeReducer.employees); 
  const [departmentData, setDepartmentData] = useState({
    name: department.name,
    manager: department.manager,
    employees: department.employees,
  });

  const handleNameChange = (event) => {
    setDepartmentData({ ...departmentData, name: event.target.value });
  };

  const handleManagerChange = (event) => {
    setDepartmentData({ ...departmentData, manager: event.target.value });
  };

  const handleUpdate = () => {
    dispatch(updateDepartmentSuccess({ id: department.id, ...departmentData }));
  };

  const handleDelete = () => {
    dispatch(deleteDepartmentSuccess(department.id));
  };

  const handleAddEmployee = (employeeId) => {
    dispatch(addDepartmentSuccess({ departmentId: department.id, employeeId }));
  };

  return (
    <div className="edit-department-container">
      <h2>Edit Department</h2>
      <form>
        <div>
          Department Name:
          <input
            type="text"
            value={departmentData.name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          Manager:
          <input
            type="text"
            value={departmentData.manager}
            onChange={handleManagerChange}
          />
        </div>
        <button type="button" onClick={handleUpdate}>
          Update
        </button>
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
      </form>
      <div className="employee-dropdown">
        <select>
          <option>Select Employee</option>
          {employees.map((employee) => (
            <option key={employee.id} value={employee.id}>
              {employee.fullName}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={() => handleAddEmployee(selectedEmployeeId)}
        >
          Add Employee
        </button>
      </div>
    </div>
  );
};

export default EditDepartment;
