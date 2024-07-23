export const fetchDepartmentsSuccess = (departments) => ({
  type: 'FETCH_DEPARTMENTS_SUCCESS',
  payload: departments,
});

export const addDepartmentSuccess = (department) => ({
  type: 'ADD_DEPARTMENT_SUCCESS',
  payload: department,
});

export const updateDepartmentSuccess = (department) => ({
  type: 'UPDATE_DEPARTMENT_SUCCESS',
  payload: department,
});

export const deleteDepartmentSuccess = (departmentId) => ({
  type: 'DELETE_DEPARTMENT_SUCCESS',
  payload: departmentId,
});

export const addEmployeeToDepartmentSuccess = (data) => ({
  type: 'ADD_EMPLOYEE_TO_DEPARTMENT_SUCCESS',
  payload: data,
});
