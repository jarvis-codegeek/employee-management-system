import {all} from 'redux-saga/effects'

import {saga as addEmployeeSaga} from '../modules/addemployeedetails/reduxstore'

import {saga as viewEmployeeSaga} from '../modules/viewemployeedetails/reduxstore'

export default function* saga() {
    yield all([addEmployeeSaga(), viewEmployeeSaga()]);
}

