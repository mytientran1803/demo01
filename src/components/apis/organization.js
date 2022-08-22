import axios from 'axios'

export const getOrganizations = () => {
    return axios.get('https://62fce6a9b9e38585cd4884ce.mockapi.io/organization')
}
export const getOrganization = (id) => {
    return axios.get('https://62fce6a9b9e38585cd4884ce.mockapi.io/organization/${id}')
}
export const createOrganization = (formData) => {
    return axios.post('https://62fce6a9b9e38585cd4884ce.mockapi.io/organization',formData)
}
export const editOrganization = (id, formData) => {
    return axios.put(`https://62fce6a9b9e38585cd4884ce.mockapi.io/organization/${id}`,formData)
}
export const deletetOrganization = (id) => {
    return axios.delete(`https://62fce6a9b9e38585cd4884ce.mockapi.io/organization/${id}`)
}