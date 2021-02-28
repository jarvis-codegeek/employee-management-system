import {ADD_EMPLOYEE, UPDATE_EMPLOYEE_DETAILS} from './actionTypes';

export const addEmployee = (requestObj = null) => {
    return{
        type: ADD_EMPLOYEE.ACTION,
        requestObj
    }
}

export const updateEmployeeDetails = (requestObj = null, id) => {
    return {
        type: UPDATE_EMPLOYEE_DETAILS.ACTION,
        requestObj,
        id
    }
}