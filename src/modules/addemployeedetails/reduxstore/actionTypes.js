import {defineAction} from 'redux-define';

const NAMESPACE = "ADD_EMPLOYEE_DETAILS"

export const ADD_EMPLOYEE = defineAction('ADD_EMPLOYEE', ["PENDING", "SUCCESS", "ERROR"], NAMESPACE)

export const UPDATE_EMPLOYEE_DETAILS = defineAction('UPDATE_EMPLOYEE_DETAILS', ["PENDING", "SUCCESS", "ERROR"], NAMESPACE)