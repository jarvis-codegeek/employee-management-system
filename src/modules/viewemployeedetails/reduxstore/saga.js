import {takeEvery, put, call} from 'redux-saga/effects'

import {DELETE_EMPLOYEE, UPDATE_EMPLOYEE, VIEW_EMPLOYEE} from './actionTypes'
import {getEmployeeList, deleteEmployeeApi} from '../../../serviceApi'

export function* doViewEmployeeData(action) {
    try{
        yield put({ type: VIEW_EMPLOYEE.PENDING })
        const response = yield call(getEmployeeList)
        yield put({ type: VIEW_EMPLOYEE.SUCCESS, response})
    }catch(error){
        yield put({type: VIEW_EMPLOYEE.ERROR, error})
    }
} 


export function* doDeleteEmployeeData(action) {
    const {id} = action;
    try{
        yield put({ type: DELETE_EMPLOYEE.PENDING })
        const response = yield call(deleteEmployeeApi, id)
        yield put({ type: DELETE_EMPLOYEE.SUCCESS, response})
    }catch(error){
        yield put({type: DELETE_EMPLOYEE.ERROR, error})
    }
} 

export function* doUpdateEmployeeData(action) {
    const {data, flag} = action;
    try{
        yield put({ type: UPDATE_EMPLOYEE.PENDING })
        yield put({ type: UPDATE_EMPLOYEE.SUCCESS, data, flag})
    }catch(error){
        yield put({type: UPDATE_EMPLOYEE.ERROR, error})
    }
} 

export default function* saga(){
    yield takeEvery(VIEW_EMPLOYEE.ACTION, doViewEmployeeData);
    yield takeEvery(DELETE_EMPLOYEE.ACTION, doDeleteEmployeeData);
    yield takeEvery(UPDATE_EMPLOYEE.ACTION, doUpdateEmployeeData);
}