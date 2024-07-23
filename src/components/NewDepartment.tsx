import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDepartmentSuccess } from '../store/action/departmentActions';

const NewDepartment = () => {
  const dispatch = useDispatch();
  const [departmentData, setDepartmentData] = useState({
    name: '',
    manager: '',
  });

  const handleNameChange = (event) => {
    setDepartmentData({ ...departmentData, name: event.target.value });
  };

  const handleManagerChange = (event) => {
    setDepartmentData({ ...departmentData, manager: event.target.value });
  };

  const handleSave = () => {
    const newDepartment = {
      name: departmentData.name,
      manager: departmentData.manager,
    };
    dispatch(addDepartmentSuccess(newDepartment));
  };

  const handleCancel = () => {
    history.push('');
  };

  return (
    <div className="new-department-container">
      <h2>New Department</h2>
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
        <button type="button" onClick={handleSave}>
          Save
        </button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default NewDepartment;
