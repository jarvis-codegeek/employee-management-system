import {takeEvery, put, call} from 'redux-saga/effects'

import {ADD_EMPLOYEE} from './actionTypes'
import {addEmployeeDetails} from '../../../serviceApi'

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

export default function* saga(){
    yield takeEvery(ADD_EMPLOYEE.ACTION, doAddEmployeeData);
}