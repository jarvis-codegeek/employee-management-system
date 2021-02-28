import {DELETE_EMPLOYEE, UPDATE_EMPLOYEE, VIEW_EMPLOYEE} from './actionTypes';

const initialState = {
    view_employee_data: null,
    dataToBeUpdated: null,
    isUpdate: false,
    loading: false,
    error: null
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case VIEW_EMPLOYEE.PENDING: {
            return { ...state, loading: true}
        }
        case VIEW_EMPLOYEE.SUCCESS: {
            return {...state, view_employee_data: action.response, loading: false }
        }
        case VIEW_EMPLOYEE.ERROR: {
            return {
                ...state, error: action.error, loading: false
            }
        }

        case DELETE_EMPLOYEE.PENDING: {
            return { ...state, loading: true}
        }
        case DELETE_EMPLOYEE.SUCCESS: {
            return {...state, view_employee_data: action.response, loading: false }
        }
        case DELETE_EMPLOYEE.ERROR: {
            return {
                ...state, error: action.error, loading: false
            }
        }

        case UPDATE_EMPLOYEE.PENDING: {
            return { ...state, loading: true}
        }
        case UPDATE_EMPLOYEE.SUCCESS: {
            const {data, flag} = action;
            return {...state, dataToBeUpdated: data, isUpdate: flag, loading: false }
        }
        case UPDATE_EMPLOYEE.ERROR: {
            return {
                ...state, error: action.error, loading: false
            }
        }

    }
    return state;
}