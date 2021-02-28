import {defineAction} from 'redux-define';

const NAMESPACE = 'VIEW_EMPLOYEE_DETAILS'

export const VIEW_EMPLOYEE = defineAction('VIEW_EMPLOYEE', ["PENDING", "SUCCESS", "ERROR"], NAMESPACE)

export const DELETE_EMPLOYEE = defineAction('DELETE_EMPLOYEE', ['PENDING', 'SUCCESS', 'ERROR'], NAMESPACE)

export const UPDATE_EMPLOYEE = defineAction('UPDATE_EMPLOYEE', ['PENDING', 'SUCCESS', 'ERROR'], NAMESPACE)