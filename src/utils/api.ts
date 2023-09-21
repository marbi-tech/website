import axios from 'axios';

const appApi = axios.create({
  baseURL: '/api/',
});

export { appApi };
