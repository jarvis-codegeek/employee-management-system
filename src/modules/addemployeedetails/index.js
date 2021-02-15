import React from 'react'
import { Container, Card, Row, Col, FormControl, FormLabel, Button, Modal } from 'react-bootstrap'
import CustomDatePicker from '../../components/DatePicker'

const isUndefinedOrNull = (value) => {
    return value === "" || value === undefined || value === null
}

const isDate = (value) => {
    return Object.prototype.toString.call(value) === "[object Date]"

} 

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
        if(isUndefinedOrNull(employeeName) || isUndefinedOrNull(employeeId) || isUndefinedOrNull(gender) || isUndefinedOrNull(phone) || isUndefinedOrNull(designation) || isUndefinedOrNull(address)){
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
    }

    handleSubmit = () => {
        let isEmpty = this.handleValidation()
        if(!isEmpty){
            const {employeeName, employeeId, gender, phone, designation, dateOfBirth, address} = this.state
            let requestObj = {
                employeeName,
                employeeId,
                gender,
                phone,
                designation,
                dateOfBirth,
                address
            }
            console.log(requestObj)
        }
        
    }

    handleClear = () => {
        this.setState({employeeName: '', employeeId: '', gender: '', phone: '', designation: '', dateOfBirth: new Date(), address: ''})
    }

    render() {
        const {employeeName, employeeId, gender, phone, designation, dateOfBirth, address, errorShow} = this.state
        return (
            <>
            {errorShow && this.renderErrorPopup()}
            <Container>
                <h3> Add Employee </h3>
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
                            <Col md={'auto'}><Button variant="primary" size="sm" onClick={this.handleSubmit}>Submit</Button></Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
            </>
        )
    }
}

export default AddEmployeeDetails