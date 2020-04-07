import React from 'react';
import Employee from '../Employee';
import './styles.css';

const EmployeeList = ({ employees, onAdd }) => {

  const employeeNodes = employees.map(employee => (
      <Employee
          key={employee.name + employee.surname}
          {...employee}
      />
  ));

  return (
      <div>
          <ul
            className="EmployeeList"
          >
              {employeeNodes}
          </ul>

          <button
            className="EmployeeList-button"
            onClick={onAdd}
          >
            Proceed
          </button>
      </div>
  );
};

EmployeeList.propTypes = {
  employees: React.PropTypes.arrayOf(
      React.PropTypes.shape({
          name: React.PropTypes.string.isRequired,
          surname: React.PropTypes.string.isRequired,
      }).isRequired
  ).isRequired,
  onAdd: React.PropTypes.func.isRequired,
};

export default EmployeeList;
