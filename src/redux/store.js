import { configureStore } from '@reduxjs/toolkit';
import createEmployeeSlice from '../pages/createEmployee/createEmployeeSlice';

// STORE
const store = configureStore({
  reducer: {
    createEmployee: createEmployeeSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
