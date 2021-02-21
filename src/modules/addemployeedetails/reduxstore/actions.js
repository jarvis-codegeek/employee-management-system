import {ADD_EMPLOYEE} from './actionTypes';

export const addEmployee = (requestObj = null) => {
    return{
        type: ADD_EMPLOYEE.ACTION,
        requestObj
    }
}