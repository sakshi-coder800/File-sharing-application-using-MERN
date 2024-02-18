import axios from 'axios'
const url = "http://localhost:8080"

export const uploadImg = async (data) => {
    try {
        const response = await axios.post(`${url}/upload`, data);
        return response.data
    } catch (error) {
        console.log(" Error While Calling the api ", error)
    }
}