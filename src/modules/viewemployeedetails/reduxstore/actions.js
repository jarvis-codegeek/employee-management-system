import {VIEW_EMPLOYEE, DELETE_EMPLOYEE, UPDATE_EMPLOYEE} from './actionTypes';

const viewEmployeeList = () => {
    return{
        type: VIEW_EMPLOYEE.ACTION
    }
}

const deleteEmployee = (id) => {
    return {
        type: DELETE_EMPLOYEE.ACTION,
        id
    }
}

const updateEmployee = (data, flag) => {
    return{
        type: UPDATE_EMPLOYEE.ACTION,
        data,
        flag
    }
} 

export {viewEmployeeList, deleteEmployee, updateEmployee}