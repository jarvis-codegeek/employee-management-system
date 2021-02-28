import React, {lazy, Suspense} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom'
import './App.css';
import AddEmployeeDetails from './modules/addemployeedetails';
import ViewEmployeeDetails from './modules/viewemployeedetails';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/addEmployee" component={AddEmployeeDetails} />
          <Route path="/viewEmployeeList" component={ViewEmployeeDetails} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App);
