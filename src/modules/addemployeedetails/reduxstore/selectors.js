const NAME= "ADD_EMPLOYEE_DETAILS"

const addEmployeeData = (state) => {
    return state[NAME]['add_employee_data']
}

const updateEmployeeDetailsData = (state) => {
    return state[NAME]['update_employee_data']
} 

const loading = (state) => {
    return state[NAME]['loading']
}

const error = (state) => {
    return state[NAME]['error']
} 

export {
    addEmployeeData,
    updateEmployeeDetailsData,
    loading,
    error
}