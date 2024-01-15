import { createSlice } from '@reduxjs/toolkit';

//Initial employee state
const initialState = {
  isLoading: false,
  isCreated: false,
  // id: localStorage.getItem('id') || '',
  // firstName: localStorage.getItem('firstName') || '',
  // lastName: localStorage.getItem('lastName') || '',
  // dateOfBirth: localStorage.getItem('dateOfBirth') || '',
  // startDate: localStorage.getItem('startDate') || '',
  // department: localStorage.getItem('department') || '',
  // street: localStorage.getItem('street') || '',
  // city: localStorage.getItem('city') || '',
  // state: localStorage.getItem('state') || '',
  // zipCode: localStorage.getItem('zipCode') || '',
  employeesList: '',
  error: null,
};

//User slices
const createEmployeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    createEmployeePending: (state) => {
      state.isCreated = false;
      // state.id = action.payload;
      // state.firstName = action.payload;
      // state.lastName = action.payload;
      // state.dateOfBirth = action.payload;
      // state.startDate = action.payload;
      // state.department = action.payload;
      // state.street = action.payload;
      // state.city = action.payload;
      // state.state = action.payload;
      state.error = null;
      state.isLoading = true;
    },
    createEmployeeSuccess: (state, action) => {
      state.isCreated = true;
      // state.id = action.payload;
      // state.firstName = action.payload;
      // state.lastName = action.payload;
      // state.dateOfBirth = action.payload;
      // state.startDate = action.payload;
      // state.department = action.payload;
      // state.street = action.payload;
      // state.city = action.payload;
      // state.state = action.payload;
      state.employeesList = action.payload;
      state.error = null;
      state.isLoading = false;
    },
    createEmployeeFail: (state, action) => {
      state.isCreated = false;
      // state.id = null;
      // state.firstName = null;
      // state.lastName = null;
      // state.dateOfBirth = null;
      // state.startDate = null;
      // state.department = null;
      // state.street = null;
      // state.city = null;
      // state.state = null;
      state.employeesList = null;
      state.error = action.payload.message;
      state.isLoading = false;
    },
  },
});

export default createEmployeeSlice;
