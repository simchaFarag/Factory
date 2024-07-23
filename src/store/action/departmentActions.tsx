export const fetchDepartmentsSuccess = (departments) => ({
  type: 'FETCH_DEPARTMENTS_SUCCESS',
  payload: departments,
});

export const addDepartmentSuccess = (department) => ({
  type: 'ADD_DEPARTMENT_SUCCESS',
  payload: department,
});
