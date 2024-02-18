import axios from 'axios'
const url = "http://localhost:8080"

export const uploadImg = async (data) => {
    const response = await axios.post(`${url}/upload`, data);
    return response.data
}