import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Employee Management System</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link style={{"color": "#fff"}}><Link to={'/addEmployee'}>Add Employee</Link></Nav.Link>
                    <Nav.Link style={{"color": "#fff"}}><Link to={'/viewEmployeeList'}>View Employee Details</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}

export default Header;