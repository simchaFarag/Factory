

export const updateEmployeeSuccess = (employee) => ({
  type: 'UPDATE_EMPLOYEE_SUCCESS',
  payload: employee,
});

export const deleteEmployeeSuccess = (employeeId) => ({
  type: 'DELETE_EMPLOYEE_SUCCESS',
  payload: employeeId,
});

export const addEmployeeToShiftSuccess = (data) => ({
  type: 'ADD_EMPLOYEE_TO_SHIFT_SUCCESS',
  payload: data,
});
