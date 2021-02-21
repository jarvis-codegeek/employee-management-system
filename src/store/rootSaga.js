import {all} from 'redux-saga/effects'

import {saga as addEmployeeSaga} from '../modules/addemployeedetails/reduxstore'

export default function* saga() {
    yield all([addEmployeeSaga()]);
}

