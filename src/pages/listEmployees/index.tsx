import { Link } from 'react-router-dom';
import Table from '../../components/Table/Table';
import useSubmitEmployee from '../../components/ModalConfirm/useSubmitEmployee';
import './style.css';

// EMPLOYEE LIST PAGE
const Employees = () => {
  const { employeesList } = useSubmitEmployee();
  console.log('verif', employeesList);
  document.title = 'HRnet - Current Employees';
  return (
    <section className="table">
      <div id="employee-div" className="container_list">
        <h1>Current Employees</h1>
        {!employeesList ? <div>Aucune données disponibles</div> : <Table />}
        <Link to="/" className="home-link">
          Home
        </Link>
      </div>
    </section>
  );
};

export default Employees;
