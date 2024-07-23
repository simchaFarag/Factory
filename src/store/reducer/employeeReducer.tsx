const initialState = {
  employees: [],
};

export const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_EMPLOYEES_SUCCESS':
      return {
        ...state,
        employees: action.payload,
      };
    case 'ADD_EMPLOYEE_SUCCESS':
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };
    default:
      return state;
  }
};
