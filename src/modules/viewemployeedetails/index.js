import React from 'react';
import { Container, Table } from 'react-bootstrap';

class ViewEmployeeDetails extends React.Component {
    render() {
        return (
            <Container>
                <h3>List of Employees</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Employee Name</th>
                            <th>Employee Id</th>
                            <th>Date of Birth</th>
                            <th>Gender</th>
                            <th>Phone</th>
                            <th>Designation</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </Table>
            </Container>
        )
    }
}

export default ViewEmployeeDetails;