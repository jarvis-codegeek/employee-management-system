const NAME= "VIEW_EMPLOYEE_DETAILS"

const viewEmployeeData = (state) => {
    return state[NAME]['view_employee_data']
}

const deleteEmployeeData = (state) => {
    return state[NAME]['delete_employee_data']
}

const updateEmployeeData = (state) => {
    return state[NAME]['dataToBeUpdated']
} 

const updateFlagData = (state) => {
    return state[NAME]['isUpdate']
}


const loading = (state) => {
    return state[NAME]['loading']
}

const error = (state) => {
    return state[NAME]['error']
} 

export {
    viewEmployeeData,
    deleteEmployeeData,
    updateEmployeeData,
    updateFlagData,
    loading,
    error
}