import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://motrix-backend.herokuapp.com/',
});

export default Api;
