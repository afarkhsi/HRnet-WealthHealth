import useSubmitEmployee from '../ModalConfirm/useSubmitEmployee';

// Table hook
const useDataTable = () => {
  const { employeesList } = useSubmitEmployee();

  const data = employeesList;

  const columns = [
    {
      name: 'First Name',
      id: 'firstName',
      sortable: true,
    },
    {
      name: 'Last Name',
      id: 'lastName',
      sortable: true,
    },
    {
      name: 'Start Date',
      id: 'startDate',
      sortable: true,
    },
    {
      name: 'Department',
      id: 'department',
      sortable: true,
    },
    {
      name: 'Date of Birth',
      id: 'dateOfBirth',
      sortable: true,
    },
    {
      name: 'Street',
      id: 'street',
      sortable: true,
    },
    { name: 'City', id: 'city', sortable: true },
    {
      name: 'State',
      id: 'state',
      sortable: true,
    },
    {
      name: 'Zip Code',
      id: 'zipCode',
      sortable: true,
    },
  ];
  return { data, columns };
};

export default useDataTable;
