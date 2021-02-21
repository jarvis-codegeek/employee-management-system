import {ADD_EMPLOYEE} from './actionTypes';

const initialState = {
    add_employee_data: null,
    loading: false,
    error: null
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case ADD_EMPLOYEE.PENDING: {
            return { ...state, loading: true}
        }
        case ADD_EMPLOYEE.SUCCESS: {
            return {...state, add_employee_data: action.response, loading: false }
        }
        case ADD_EMPLOYEE.ERROR: {
            return {
                ...state, error: action.error, loading: false
            }
        }
    }
    return state;
}