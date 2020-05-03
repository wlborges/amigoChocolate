import axios from 'axios';

const api = axios.create({
    baseURL: 'http://apiAmigo.herokuapp.com',
})

export default api;