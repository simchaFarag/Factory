export const loginSuccess = (user) => ({
  type: 'LOGIN_SUCCESS',
  payload: user,
});

export const logout = () => ({
  type: 'LOGOUT',
});

export const decrementActions = () => ({
  type: 'DECREMENT_ACTIONS',
});

export const resetActions = () => ({
  type: 'RESET_ACTIONS',
});
