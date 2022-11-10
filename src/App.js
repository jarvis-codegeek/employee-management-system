import React, {lazy, Suspense} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom'
import './App.css';
import AddEmployeeDetails from './modules/addemployeedetails';
import ViewEmployeeDetails from './modules/viewemployeedetails';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <Navbar>
      <Container>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <NavDropdown title="SJ" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
  }
}

export default withRouter(App);
