import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { userReducer } from './reducer/userReducer';
import { employeeReducer } from './reducer/employeeReducer';
import { departmentReducer } from './reducer/departmentReducer';

const rootReducer = combineReducers({
  user: userReducer,
  employees: employeeReducer,
  departments: departmentReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
