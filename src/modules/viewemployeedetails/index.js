import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { viewEmployeeList, deleteEmployee, updateEmployee } from './reduxstore/actions'
import { viewEmployeeData, deleteEmployeeData } from './reduxstore/selectors'
import { isUndefinedOrNull } from '../../utils'

class ViewEmployeeDetails extends React.Component {

    state = {
        viewEmployeeList: [],
        titleObj: {
            employeeName: 'Employee Name',
            employeeId: 'Employee Id',
            dateOfBirth: 'Date of Birth',
            gender: 'Gender',
            phone: 'Phone',
            designation: 'Designation',
            address: 'Address',
            actions: 'Actions'
        }
    }

    componentDidMount() {
        this.props.viewEmployeeList()
    }

    componentDidUpdate(prevProps) {
        if (this.props.view_employee_data !== prevProps.view_employee_data) {
            const { view_employee_data } = this.props
            if (!isUndefinedOrNull(view_employee_data.data) && view_employee_data.data.length > 0) {
                this.setState({ viewEmployeeList: view_employee_data.data })
            }
        }
    }

    renderTableHeader() {
        const {titleObj} = this.state;
        const {employeeName, employeeId, dateOfBirth, gender, phone, designation, address, actions} = titleObj
        return <>
        <th>{employeeName}</th>
        <th>{employeeId}</th>
        <th>{dateOfBirth}</th>
        <th>{gender}</th>
        <th>{phone}</th>
        <th>{designation}</th>
        <th>{address}</th>
        <th>{actions}</th>
        </>
    }

    renderTableData() {
        const {viewEmployeeList} = this.state;
        if(!isUndefinedOrNull(viewEmployeeList)){
        return viewEmployeeList.map((item, index) => {
            const { employeeName, employeeId, dateOfBirth, gender, phone, designation, address } = item //destructuring
            return (
                <tr key={index}>
                    <td>{employeeName}</td>
                    <td>{employeeId}</td>
                    <td>{dateOfBirth}</td>
                    <td>{gender}</td>
                    <td>{phone}</td>
                    <td>{designation}</td>
                    <td>{address}</td>
                    <td><button onClick={() => this.handleDelete(item)}>Delete</button><button onClick={() => this.handleUpdate(item)}>Update</button></td>
                </tr>
            )
        })
    }
    }

    handleDelete = (data) => {
        console.log("delete", data)
        this.props.deleteEmployee(data._id)
    }

    handleUpdate = (data) => {
        this.props.updateEmployee(data, true)
        this.props.history.push('/addEmployee')
    }

    render() {

        return (
            <Container>
                <h3>List of Employees</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            {this.renderTableHeader()}
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </Table>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        view_employee_data: viewEmployeeData(state),
        delete_employee_data: deleteEmployeeData(state)
    }
}

export default connect(mapStateToProps, { viewEmployeeList, deleteEmployee, updateEmployee })(ViewEmployeeDetails);