import useSubmitEmployee from '../ModalConfirm/useSubmitEmployee';

// const employees = JSON.parse(localStorage.getItem('employees'));
const useDataTable = () => {
  const { employeesList } = useSubmitEmployee();
  const data = employeesList;
  console.log('TEST LISTE', data);
  const columns = [
    {
      name: 'First Name',
      selector: (row) => row.firstName,
      data: 'firstName',
      sortable: true,
    },
    {
      name: 'Last Name',
      selector: (row) => row.lastName,
      data: 'lastName',
      sortable: true,
    },
    {
      name: 'Start Date',
      selector: (row) => row.startDate,
      data: 'startDate',
      sortable: true,
    },
    {
      name: 'Department',
      selector: (row) => row.department,
      data: 'department',
      sortable: true,
    },
    {
      name: 'Date of Birth',
      selector: (row) => row.dateOfBirth,
      data: 'dateOfBirth',
      sortable: true,
    },
    {
      name: 'Street',
      selector: (row) => row.street,
      data: 'street',
      sortable: true,
    },
    { name: 'City', selector: (row) => row.city, data: 'city', sortable: true },
    {
      name: 'State',
      selector: (row) => row.state,
      data: 'state',
      sortable: true,
    },
    {
      name: 'Zip Code',
      selector: (row) => row.zipCode,
      data: 'zipCode',
      sortable: true,
    },
  ];
  return { data, columns };
};

export default useDataTable;
// const employees = JSON.parse(localStorage.getItem('employees'));
// const data = employees;
// console.log('TEST LISTE', data);
// const columns = [
//   {
//     name: 'First Name',
//     selector: (row) => row.firstName,
//     data: 'firstName',
//     sortable: true,
//   },
//   {
//     name: 'Last Name',
//     selector: (row) => row.lastName,
//     data: 'lastName',
//     sortable: true,
//   },
//   {
//     name: 'Start Date',
//     selector: (row) => row.startDate,
//     data: 'startDate',
//     sortable: true,
//   },
//   {
//     name: 'Department',
//     selector: (row) => row.department,
//     data: 'department',
//     sortable: true,
//   },
//   {
//     name: 'Date of Birth',
//     selector: (row) => row.dateOfBirth,
//     data: 'dateOfBirth',
//     sortable: true,
//   },
//   {
//     name: 'Street',
//     selector: (row) => row.street,
//     data: 'street',
//     sortable: true,
//   },
//   { name: 'City', selector: (row) => row.city, data: 'city', sortable: true },
//   {
//     name: 'State',
//     selector: (row) => row.state,
//     data: 'state',
//     sortable: true,
//   },
//   {
//     name: 'Zip Code',
//     selector: (row) => row.zipCode,
//     data: 'zipCode',
//     sortable: true,
//   },
// ];

// export { data, columns };
