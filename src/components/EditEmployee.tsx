import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteEmployeeSuccess, updateEmployeeSuccess } from '../store/action/employeeActions';

const EditEmployee = ({ employee }) => {
  const dispatch = useDispatch();
  const shifts = useSelector(state => state.shiftReducer.shifts); 
  const [employeeData, setEmployeeData] = useState({
    id: employee.id,
    name: employee.name,
    email: employee.email,
 
  });

  const handleNameChange = (event) => {
    setEmployeeData({ ...employeeData, name: event.target.value });
  };

  const handleEmailChange = (event) => {
    setEmployeeData({ ...employeeData, email: event.target.value });
  };

  const handleUpdate = () => {
    dispatch(updateEmployeeSuccess(employeeData));
  };

  const handleDelete = () => {
    dispatch(deleteEmployeeSuccess(employee.id));
  };

  const handleAddToShift = (shiftId) => {
 
  };

  return (
    <div className="edit-employee-container">
      <h2>Edit Employee</h2>
      <form>
        <div>
          Name:
          <input type="text" value={employeeData.name} onChange={handleNameChange} />
        </div>
        <div>
          Email:
          <input type="text" value={employeeData.email} onChange={handleEmailChange} />
        </div>
        <button type="button" onClick={handleUpdate}>Update</button>
        <button type="button" onClick={handleDelete}>Delete</button>
      </form>
      <div className="shifts-table">
        <h3>Shifts</h3>
        <table>
          <thead>
            <tr>
              <th>Shift ID</th>
              <th>Date</th>
              {/* Add more columns as needed */}
            </tr>
          </thead>
          <tbody>
            {employeeData.shifts.map(shift => (
              <tr key={shift.id}>
                <td>{shift.id}</td>
                <td>{shift.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="add-to-shift">
        <select>
          <option>Select Shift</option>
          {shifts.map(shift => (
            <option key={shift.id} value={shift.id}>{shift.date}</option>
          ))}
        </select>
        <button type="button" onClick={() => handleAddToShift(selectedShiftId)}>Add to Shift</button>
      </div>
    </div>
  );
};

export default EditEmployee;

