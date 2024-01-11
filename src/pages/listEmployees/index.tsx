import { Link } from 'react-router-dom';
import React from 'react';
import Table from '../../components/Table/Table';

// EMPLOYEE LIST PAGE
const Employees = () => {
  document.title = 'HRnet - Current Employees';
  return (
    <div>
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <Table />
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default Employees;
