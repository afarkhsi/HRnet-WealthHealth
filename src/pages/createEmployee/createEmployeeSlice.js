import { createSlice } from '@reduxjs/toolkit';

//Initial employee state
const initialState = {
  isLoading: false,
  isCreated: false,
  employeesList: [],
  error: null,
};

//Employee slices
const createEmployeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    createEmployeePending: (state) => {
      state.isCreated = false;
      state.error = null;
      state.isLoading = true;
    },
    createEmployeeSuccess: (state, action) => {
      state.isCreated = true;
      state.employeesList.unshift(action.payload);
      state.error = null;
      state.isLoading = false;
    },
    createEmployeeFail: (state, action) => {
      state.isCreated = false;
      state.employeesList = null;
      state.error = action.payload.message;
      state.isLoading = false;
    },
  },
});

export default createEmployeeSlice;
