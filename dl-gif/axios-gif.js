import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.giphy.com',
});

export default instance;
