import {takeEvery, put, call} from 'redux-saga/effects'

import {ADD_EMPLOYEE, UPDATE_EMPLOYEE_DETAILS} from './actionTypes'
import {addEmployeeDetails, updateEmployeeDetails} from '../../../serviceApi'

export function* doAddEmployeeData(action) {
    const {requestObj} = action
    try{
        yield put({ type: ADD_EMPLOYEE.PENDING })
        const response = yield call(addEmployeeDetails, requestObj)
        yield put({ type: ADD_EMPLOYEE.SUCCESS, response})
    }catch(error){
        yield put({type: ADD_EMPLOYEE.ERROR, error})
    }
} 



export function* doUpdateEmployeeDetails(action) {
    const {requestObj, id} = action
    try{
        yield put({ type: UPDATE_EMPLOYEE_DETAILS.PENDING })
        const response = yield call(updateEmployeeDetails, requestObj, id)
        yield put({ type: UPDATE_EMPLOYEE_DETAILS.SUCCESS, response})
    }catch(error){
        yield put({type: UPDATE_EMPLOYEE_DETAILS.ERROR, error})
    }
} 


export default function* saga(){
    yield takeEvery(ADD_EMPLOYEE.ACTION, doAddEmployeeData);
    yield takeEvery(UPDATE_EMPLOYEE_DETAILS.ACTION, doUpdateEmployeeDetails);
}