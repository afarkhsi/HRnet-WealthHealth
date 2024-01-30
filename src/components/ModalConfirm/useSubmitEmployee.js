import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import createEmployeeSlice from '../../pages/createEmployee/createEmployeeSlice';

// Modal hook
const useSubmitEmployee = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [startDate, setStartDate] = useState('');
  const [department, setDepartment] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const { error } = useSelector((state) => state.createEmployee);

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const dispatch = useDispatch();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    dispatch(createEmployeeSlice.actions.createEmployeePending());

    let employee = {
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: dateOfBirth,
      startDate: startDate,
      department: department,
      street: street,
      city: city,
      state: state,
      zipCode: zipCode,
    };

    try {
      if (employee !== null) {
        dispatch(createEmployeeSlice.actions.createEmployeeSuccess(employee));
        console.log(`Nouveau profil d'employé ajouté:`, employee);
        openModal();
      }
    } catch (error) {
      console.log('erreur signalée:', error);
      dispatch(createEmployeeSlice.actions.createEmployeeFail(error.message));
    }
  };

  const { employeesList } = useSelector((state) => state.createEmployee);
  localStorage.setItem('employees', JSON.stringify(employeesList));

  return {
    employeesList,
    handleOnSubmit,
    modalIsOpen,
    closeModal,
    firstName,
    lastName,
    dateOfBirth,
    startDate,
    department,
    street,
    city,
    state,
    zipCode,
    error,
    setFirstName,
    setLastName,
    setDateOfBirth,
    setStartDate,
    setDepartment,
    setStreet,
    setCity,
    setState,
    setZipCode,
  };
};

export default useSubmitEmployee;
