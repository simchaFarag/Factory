import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios'; 
import { fetchDepartmentsSuccess } from '../store/action/departmentActions';

const Department = () => {
  const dispatch = useDispatch();
  const departments = useSelector(
    (state) => state.departmentReducer.departments
  );

  useEffect(() => {
    axios
      .get('/api/departments') 
      .then((response) => {
        dispatch(fetchDepartmentsSuccess(response.data));
      })
      .catch((error) => {
        console.error('Error fetching departments:', error);
      });
  }, [dispatch]); 

  return (
    <div>
      <h2>Department Page</h2>
      <table>
        <thead>
          <tr>
            <th>Department Name</th>
            <th>Department Manager</th>
            <th>Employees</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((department) => (
            <tr key={department._id}>
              <td>
                <Link to={`/departments/${department._id}`}>
                  {department.name}
                </Link>
              </td>
              <td>{department.manager}</td>
              <td>
                <ul>
                  {department.employees.map((employee) => (
                    <li key={employee._id}>
                      <Link to={`/employees/${employee._id}`}>
                        {employee.fullName}
                      </Link>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link to="/departments/new">New Department</Link>
    </div>
  );
};

export default Department;
