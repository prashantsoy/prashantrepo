import React, { Component } from 'react';
import './styles.css';
import EmployeeListContainer from '../../containers/EmployeeListContainer';
import EmployeeForm from '../../containers/EmployeeFormContainer';


class App extends Component {
  render() {
    const child = (this.props.addingEmployee)
      ? <EmployeeForm />
      : <EmployeeListContainer />

    return (
      <div className="App">
        <div className="App-header">
          <h2>Manage employees</h2>
        </div>

        <div className="App-content">
          {child}
        </div>

      </div>
    );
  }
}

App.propTypes = {
  addingEmployee: React.PropTypes.bool.isRequired,
}

export default App;
