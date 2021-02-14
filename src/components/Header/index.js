import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Employee Management System</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="">Add Employee</Nav.Link>
                    <Nav.Link href="">View Employee Details</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}

export default Header;