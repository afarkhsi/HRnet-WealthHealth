import { Link } from 'react-router-dom';
import Table from '../../components/Table/Table';
import useSubmitEmployee from '../../components/ModalConfirm/useSubmitEmployee';

// EMPLOYEE LIST PAGE
const Employees = () => {
  const { employeesList } = useSubmitEmployee();
  console.log('verif', employeesList);
  document.title = 'HRnet - Current Employees';
  return (
    <section>
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        {!employeesList ? <div>Aucune données disponibles</div> : <Table />}
        <Link to="/">Home</Link>
      </div>
    </section>
  );
};

export default Employees;
