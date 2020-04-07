import {
  RECEIVE_EMPLOYEES,
  REQUEST_EMPLOYEES,
  START_EMPLOYEE_ADD,
  ADD_EMPLOYEE,
} from './constants';

export function requestEmployees() {
  return (dispatch) => {
    dispatch({
      type: REQUEST_EMPLOYEES,
    });
  }
}

export function receiveEmployees(employees) {
  return {
    type: RECEIVE_EMPLOYEES,
    employees,
  };
}

export function startEmployeeAdd() {
  return {
    type: START_EMPLOYEE_ADD,
  };
}


export function addEmployee() {
  return (dispatch, getState) => {
    const form = getState().form; // get form value
    const main = getState().main; // already present values
    let duplicate_err_msg = '';
    const employee = {
      name: form.employee.name.value,
      surname: form.employee.surname.value,
    }
    if (main.employees.length > 0) {
      for (let i = 0; i < main.employees.length; i++) {
        if (form.employee.name.value === main.employees[i].name && form.employee.surname.value === main.employees[i].surname) { // to check whether data already present
          // debugger;
          alert('User already exist')
          duplicate_err_msg = 'User already exist'
          return false;
        }
      }
    }
    dispatch({
      type: ADD_EMPLOYEE,
      employee,
      duplicate_err_msg
    });
  }
}
