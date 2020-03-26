import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.73.19.251:3333'
})

export default api;