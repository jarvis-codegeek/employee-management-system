import {combineReducers} from 'redux';
import {reducer as addEmployee} from '../modules/addemployeedetails/reduxstore'


const reducer = combineReducers({
    ["ADD_EMPLOYEE_DETAILS"]: addEmployee
})

export default reducer;