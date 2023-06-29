import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';

// set up root reducer
const rootReducer = {
  auth: authReducer,
};

// set up store
const store = configureStore({
  reducer: rootReducer,
});

// set up TypeScript types for store and root reducer
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
