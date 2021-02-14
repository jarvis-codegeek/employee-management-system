import React from 'react'
import { Container, Card, Row, Col, FormControl, FormLabel, Button, Modal } from 'react-bootstrap'
import CustomDatePicker from '../../components/DatePicker'

const isUndefinedOrNull = (value) => {
    return value === "" || value === undefined || value === null
}

class AddEmployeeDetails extends React.Component {
    constructor(props){
        super(props)
    }

    state = {
        employeeName: '',
        employeeId: '',
        date: new Date(),
        gender: '',
        phone: '',
        designation: '',
        address: '',
        errorShow: false,
        errorMessage: '',
        isEmpty: false
    }

    handleChange = (data, type) => {
        switch(type){
            case 'empName':
            return this.setState({employeeName: data.target.value})
            case 'empId':
            return this.setState({employeeId: data.target.value})
            case 'gender':
            return this.setState({gender: data.target.value})
            case 'phone':
            return this.setState({phone: data.target.value})
            case 'designation':
            return this.setState({designation: data.target.value})
            case 'address':
            return this.setState({address: data.target.value})
        }
    }

    handleDateChange = (date) => {
        this.setState({date: date})
    } 

    handleValidation = () => {
        const {employeeName, employeeId, gender, phone, designation, date, address} = this.state
        if(isUndefinedOrNull(employeeName) || isUndefinedOrNull(employeeId) || isUndefinedOrNull(gender) || isUndefinedOrNull(phone) || isUndefinedOrNull(designation) || isUndefinedOrNull(address)){
            this.setState({errorShow: true, errorMessage: 'All fields are mandatory', isEmpty: true})
        }else{
            this.setState({errorShow: false, errorMessage: '', isEmpty: false})
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
        this.handleValidation()
        if(!this.state.isEmpty){
            const {employeeName, employeeId, gender, phone, designation, date, address} = this.state
            let requestObj = {
                employeeName,
                employeeId,
                gender,
                phone,
                designation,
                date,
                address
            }
            console.log(requestObj)
        }
        
    }

    handleClear = () => {
        this.setState({employeeName: '', employeeId: '', gender: '', phone: '', designation: '', date: new Date(), address: ''})
    }

    render() {
        const {employeeName, employeeId, gender, phone, designation, date, address, errorShow} = this.state
        return (
            <>
            {errorShow && this.renderErrorPopup()}
            <Container>
                <h3> Add Employee </h3>
                <Card>
                    <Card.Body>
                        <Row className="mb-2">
                            <Col md={2}><FormLabel>Employee Name</FormLabel></Col>
                            <Col md={3}><FormControl type="text" value={employeeName} onChange={(data) => this.handleChange(data, 'empName')} /></Col>
                        </Row>
                        <Row className="mb-2">
                            <Col md={2}><FormLabel>Employee Id</FormLabel></Col>
                            <Col md={3}><FormControl type="number" value={employeeId} onChange={(data) => this.handleChange(data, 'empId')} /></Col>
                        </Row>
                        <Row className="mb-2" >
                            <Col md={2}><FormLabel>Date of Birth</FormLabel></Col>
                            <Col md={3}><CustomDatePicker handleDateChange={this.handleDateChange} selected={date}/></Col>
                        </Row>
                        <Row className="mb-2">
                            <Col md={2}><FormLabel>Gender</FormLabel></Col>
                            <Col md={3}>
                                <FormControl as="select" value={gender} onChange={(data) =>this.handleChange(data, 'gender')} >
                                    <option></option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </FormControl>
                            </Col>
                        </Row>
                        <Row className="mb-2">
                            <Col md={2}><FormLabel>Phone</FormLabel></Col>
                            <Col md={3}><FormControl type="text" value={phone} onChange={(data) => this.handleChange(data, 'phone')}/>
                            </Col>
                        </Row>
                        <Row className="mb-2">
                            <Col md={2}><FormLabel>Designation</FormLabel></Col>
                            <Col md={3}><FormControl type="text" value={designation} onChange={(data) => this.handleChange(data, 'designation')}/></Col>
                        </Row>
                        <Row className="mb-2">
                            <Col md={2}><FormLabel>Address</FormLabel></Col>
                            <Col md={3}><FormControl  as="textarea" value={address} onChange={(data) => this.handleChange(data, 'address')}/></Col>
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