import { Link } from 'react-router-dom';
import Table from '../../components/Table/Table';

// EMPLOYEE LIST PAGE
const Employees = () => {
  const employees = localStorage.getItem('employees');
  document.title = 'HRnet - Current Employees';
  return (
    <section>
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        {employees === null ? <div>Aucune données disponibles</div> : <Table />}
        <Link to="/">Home</Link>
      </div>
    </section>
  );
};

export default Employees;
