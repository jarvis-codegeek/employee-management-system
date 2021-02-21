import {defineAction} from 'redux-define';

const NAMESPACE = "ADD_EMPLOYEE_DETAILS"

export const ADD_EMPLOYEE = defineAction('ADD_EMPLOYEE', ["PENDING", "SUCCESS", "ERROR"], NAMESPACE)