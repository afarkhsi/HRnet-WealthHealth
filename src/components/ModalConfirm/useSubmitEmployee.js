import { useState } from 'react';

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

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'first-name':
        setFirstName(value);
        break;
      case 'last-name':
        setLastName(value);
        break;
      case 'date-of-birth':
        setDateOfBirth(value);
        break;
      case 'start-date':
        setStartDate(value);
        break;
      case 'department':
        setDepartment(value);
        break;
      case 'street':
        setStreet(value);
        break;
      case 'city':
        setCity(value);
        break;
      case 'state':
        setState(value);
        break;
      case 'zip-code':
        setZipCode(value);
        break;

      default:
        break;
    }
  };

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const employees = JSON.parse(localStorage.getItem('employees')) || [];
  const employee = {
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

  const handleOnSubmit = async (e) => {
    e.preventDefault();
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
    employees.push(employee);
    localStorage.setItem('employees', JSON.stringify(employees));
    console.log(`Nouveau profil d'employé ajouté:`, employees);
    openModal();
  };
  //   employees.push(employee);
  //   localStorage.setItem('employees', JSON.stringify(employees));
  //   // $('#confirmation').modal();

  // employees.push(employee);
  // console.log(firstName.value, lastName.value);
  // localStorage.setItem('employees', JSON.stringify(employees));

  return {
    handleOnChange,
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
  };
};

export default useSubmitEmployee;