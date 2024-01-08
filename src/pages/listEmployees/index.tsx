import { Link } from 'react-router-dom';
import React from 'react';

// EMPLOYEE LIST PAGE
const Employees = () => {
  document.title = 'HRnet - Current Employees';
  return (
    <body>
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <table id="employee-table" className="display"></table>
        <Link to="/">Home</Link>
      </div>
    </body>
  );
};

export default Employees;
