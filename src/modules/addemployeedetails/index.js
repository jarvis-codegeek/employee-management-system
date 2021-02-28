import React from 'react'
import { Container, Card, Row, Col, FormControl, FormLabel, Button, Modal } from 'react-bootstrap'
import {connect} from 'react-redux';
import CustomDatePicker from '../../components/DatePicker';
import {addEmployee, updateEmployeeDetails} from './reduxstore/actions';
import {updateEmployee} from '../viewemployeedetails/reduxstore/actions';
import {addEmployeeData, updateEmployeeDetailsData} from './reduxstore/selectors'
import {isUndefinedOrNull, isDate} from '../../utils'
import {updateEmployeeData, updateFlagData} from '../viewemployeedetails/reduxstore/selectors'


class AddEmployeeDetails extends React.Component {
    constructor(props){
        super(props)
    }

    state = {
        employeeName: '',
        employeeId: '',
        dateOfBirth: null,
        gender: '',
        phone: '',
        designation: '',
        address: '',
        errorShow: false,
        errorMessage: ''
    }

    componentDidMount(){
        const {updateFlag, dataToBeUpdated} = this.props
        if(updateFlag){
            this.setState({
                employeeName: dataToBeUpdated.employeeName,
                employeeId: dataToBeUpdated.employeeId,
                dateOfBirth: new Date(dataToBeUpdated.dateOfBirth),
                gender: dataToBeUpdated.gender,
                phone: dataToBeUpdated.phone,
                designation: dataToBeUpdated.designation,
                address: dataToBeUpdated.address
            })
        }
    }

    componentDidUpdate(prevProps){
        if(this.props.add_employee_data !== prevProps.add_employee_data){
            const {add_employee_data} = this.props
            if(add_employee_data.data.status === "Saved"){
                this.setState({errorShow: true, errorMessage: add_employee_data.data.message })
            }
        }

        if(this.props.update_result !== prevProps.update_result){
            const {update_result} = this.props
            if(update_result.data.status === "Updated"){
                this.setState({errorShow: true, errorMessage: update_result.data.message })
            }
        }
    }

    componentWillUnmount(){
        this.props.updateEmployee(null, false)
    }

    handleChange = (e) => {
        if (isDate(e)) {
            this.setState({dateOfBirth: e })
        } else {
            this.setState({
                [e.target.id]: e.target.value
            })
        }
    }

    handleValidation = () => {
        const {employeeName, employeeId, gender, phone, designation, dateOfBirth, address} = this.state
        if(isUndefinedOrNull(employeeName) || isUndefinedOrNull(employeeId) || isUndefinedOrNull(gender) || isUndefinedOrNull(phone) || isUndefinedOrNull(designation) || isUndefinedOrNull(address) || isUndefinedOrNull(dateOfBirth)){
           return true
        }else{
           return false
        }
    }

    renderErrorPopup = () => {
        return (
            <Modal show={this.state.errorShow}>
            <Modal.Body>{this.state.errorMessage}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )
    }

    handleClose = () => {
        this.setState({errorShow: false})
        this.props.history.push('/viewEmployeeList')
    }

    handleSubmit = () => {
        let isEmpty = this.handleValidation()
        if(!isEmpty){
            const {employeeName, employeeId, gender, phone, designation, dateOfBirth, address} = this.state;
            const {updateFlag, dataToBeUpdated} = this.props;
            let requestObj = {
                employeeName,
                employeeId,
                gender,
                phone,
                designation,
                dateOfBirth,
                address
            }
            if(updateFlag){
                this.props.updateEmployeeDetails(requestObj, dataToBeUpdated._id)
            }else{            
                this.props.addEmployee(requestObj)
            }
            this.handleClear()           
        }
        
    }

    handleClear = () => {
        this.setState({employeeName: '', employeeId: '', gender: '', phone: '', designation: '', dateOfBirth: null, address: ''})
    }

    render() {
        const {employeeName, employeeId, gender, phone, designation, dateOfBirth, address, errorShow} = this.state
        const {updateFlag} = this.props
        return (
            <>
            {errorShow && this.renderErrorPopup()}
            <Container>
                <h3> { updateFlag ?  'Update Employee Data' : 'Add Employee Data' } </h3>
                <Card>
                    <Card.Body>
                        <Row className="mb-2">
                            <Col md={2}><FormLabel>Employee Name</FormLabel></Col>
                            <Col md={3}><FormControl type="text" id="employeeName" value={employeeName} onChange={this.handleChange} /></Col>
                        </Row>
                        <Row className="mb-2">
                            <Col md={2}><FormLabel>Employee Id</FormLabel></Col>
                            <Col md={3}><FormControl type="number" id="employeeId" value={employeeId} onChange={this.handleChange} /></Col>
                        </Row>
                        <Row className="mb-2" >
                            <Col md={2}><FormLabel>Date of Birth</FormLabel></Col>
                            <Col md={3}><CustomDatePicker handleDateChange={this.handleChange} selected={dateOfBirth}/></Col>
                        </Row>
                        <Row className="mb-2">
                            <Col md={2}><FormLabel>Gender</FormLabel></Col>
                            <Col md={3}>
                                <FormControl as="select"  id="gender" value={gender} onChange={this.handleChange} >
                                    <option></option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </FormControl>
                            </Col>
                        </Row>
                        <Row className="mb-2">
                            <Col md={2}><FormLabel>Phone</FormLabel></Col>
                            <Col md={3}><FormControl type="text"  id="phone" value={phone} onChange={this.handleChange}/>
                            </Col>
                        </Row>
                        <Row className="mb-2">
                            <Col md={2}><FormLabel>Designation</FormLabel></Col>
                            <Col md={3}><FormControl type="text" id="designation" value={designation} onChange={this.handleChange}/></Col>
                        </Row>
                        <Row className="mb-2">
                            <Col md={2}><FormLabel>Address</FormLabel></Col>
                            <Col md={3}><FormControl  as="textarea" id="address" value={address} onChange={this.handleChange}/></Col>
                        </Row>
                        <Row>
                            <Col md={3}></Col>
                            <Col md={'auto'}><Button variant="outline-primary" size="sm" onClick={this.handleClear}>Clear</Button></Col>
                            <Col md={'auto'}><Button variant="primary" size="sm" onClick={this.handleSubmit}>{updateFlag ? 'Update' : 'Submit'}</Button></Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        add_employee_data: addEmployeeData(state),
        dataToBeUpdated: updateEmployeeData(state),
        updateFlag: updateFlagData(state),
        update_result: updateEmployeeDetailsData(state)
    }
}

export default connect(mapStateToProps,{addEmployee, updateEmployeeDetails, updateEmployee})(AddEmployeeDetails)