import axios from 'axios';

const API_URI = 'http://localhost:8080';

export const uploadImg = async (data) => {
    try {
        // axios is a async  function so we can use await and async 
        //axios return an object always like header ,method 
        const response = await axios.post(`${API_URI}/upload`, data); // 1st argument is api url,second argument is post api body 
        return response.data;
    } catch (error) {
        console.log('Error while calling the API ', error.message);
    }
}