import axios from 'axios';

const api = axios.create({
    baseURL: 'https://apiamigochocolate.herokuapp.com',
    //baseURL: 'http://localhost:3333',
})

export default api;