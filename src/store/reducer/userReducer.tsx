const initialState = {
  currentUser: null,
  loggedIn: false,
  numOfActions: 5,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        currentUser: action.payload,
        loggedIn: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        currentUser: null,
        loggedIn: false,
        numOfActions: 5, 
      };
    case 'DECREMENT_ACTIONS':
      return {
        ...state,
        numOfActions: state.numOfActions - 1,
      };
    case 'RESET_ACTIONS':
      return {
        ...state,
        numOfActions: 5,
      };
    default:
      return state;
  }
};
