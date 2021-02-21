import axios from 'axios'

let url = "http://localhost:9000/employees"

export const addEmployeeDetails = (requestObj) => {    
    return axios.post(url, requestObj)
}

export const getEmployeeList = () => {
    return axios.get(url)
}