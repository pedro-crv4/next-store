import axios from 'axios';

const request = axios.create({
    baseURL: 'https://api.dooki.com.br/v2'
});

export default request; 