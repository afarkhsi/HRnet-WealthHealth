import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import createEmployeeSlice from '../../pages/createEmployee/createEmployeeSlice';

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
  const {
    error,
    // id,
    // firstName,
    // lastName,
    // dateOfBirth,
    // startDate,
    // department,
    // street,
    // city,
    // state,
    // zipCode,
  } = useSelector((state) => state.createEmployee);

  // const handleOnChange = (e) => {
  //   const { name, value } = e.target;
  //   switch (name) {
  //     case 'first-name':
  //       setFirstName(value);
  //       break;
  //     case 'last-name':
  //       setLastName(value);
  //       break;
  //     case 'date-of-birth':
  //       setDateOfBirth(value);
  //       break;
  //     case 'start-date':
  //       setStartDate(value);
  //       break;
  //     case 'department':
  //       setDepartment(value);
  //       break;
  //     case 'street':
  //       setStreet(value);
  //       break;
  //     case 'city':
  //       setCity(value);
  //       break;
  //     case 'state':
  //       setState(value);
  //       break;
  //     case 'zip-code':
  //       setZipCode(value);
  //       break;

  //     default:
  //       break;
  //   }
  // };

  // const dep = JSON.stringify(document.getElementById('selection_department'));

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  // const employees = JSON.parse(localStorage.getItem('employees')) || [];
  // const employee = {
  //   firstName: firstName,
  //   lastName: lastName,
  //   dateOfBirth: dateOfBirth,
  //   startDate: startDate,
  //   department: department,
  //   street: street,
  //   city: city,
  //   state: state,
  //   zipCode: zipCode,
  // };

  const dispatch = useDispatch();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    dispatch(createEmployeeSlice.actions.createEmployeePending());
    // console.log('value department :', dep);
    // console.log(`Nouveau profil d'employé créé:

    // firstName: ${firstName},
    // lastName: ${lastName},
    // dateOfBirth: ${dateOfBirth},
    // startDate: ${startDate},
    // department: ${department},
    // street: ${street},
    // city: ${city},
    // state: ${state},
    // zipCode: ${zipCode}`);
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
        // employees.push(employee);
        dispatch(createEmployeeSlice.actions.createEmployeeSuccess(employee));
        // localStorage.setItem('employees', JSON.stringify(employee));
        console.log(`Nouveau profil d'employé ajouté:`, employee);
        openModal();
      }
    } catch (error) {
      console.log('erreur signalée:', error);
      dispatch(createEmployeeSlice.actions.createEmployeeFail(error.message));
    }
    // employees.push(employee);
    // localStorage.setItem('employees', JSON.stringify(employees));
    // console.log(`Nouveau profil d'employé ajouté:`, employees);
    // openModal();
  };
  //   employees.push(employee);
  //   localStorage.setItem('employees', JSON.stringify(employees));
  //   // $('#confirmation').modal();

  // employees.push(employee);
  // console.log(firstName.value, lastName.value);
  // localStorage.setItem('employees', JSON.stringify(employees));

  const { employeesList } = useSelector((state) => state.createEmployee);
  localStorage.setItem('employees', JSON.stringify(employeesList));

  return {
    // handleOnChange,
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
