import { combineReducers } from '@reduxjs/toolkit';
import authReducer from 'redux/auth/authSlice';
import usersReducer from 'redux/users/userSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
});

export default rootReducer;
