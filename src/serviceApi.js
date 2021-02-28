import axios from 'axios'

let url = "http://localhost:9000/employees"

export const addEmployeeDetails = (requestObj) => {    
    return axios.post(url, requestObj)
}

export const getEmployeeList = () => {
    return axios.get(url)
}


export const deleteEmployeeApi = (id) => {    
    return axios.delete(url + `/${id}`)
}

export const updateEmployeeDetails = (requestObj, id) => {
    return axios.put(url+`/${id}`, requestObj)
}