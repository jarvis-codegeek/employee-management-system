import {combineReducers} from 'redux';
import {reducer as addEmployee} from '../modules/addemployeedetails/reduxstore'
import {reducer as viewEmployee} from '../modules/viewemployeedetails/reduxstore'


const reducer = combineReducers({
    ["ADD_EMPLOYEE_DETAILS"]: addEmployee,
    ["VIEW_EMPLOYEE_DETAILS"]: viewEmployee
})

export default reducer;