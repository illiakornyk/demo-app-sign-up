import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import usersReducer from "./users/userSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
});

export default rootReducer;
