import axios from 'axios';

const api = axios.create({
  baseURL: 'https://http-dog-app.onrender.com/api',
});

export default api;
