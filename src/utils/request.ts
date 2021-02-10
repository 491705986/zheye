import axios from 'axios';

const AXIOS_DEFAULT_CONFIG = {
  timeout: 60000,
  withCredentials: true
};

const service = axios.create(AXIOS_DEFAULT_CONFIG);

service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return error;
  }
);

service.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return error.response.data;
  }
);

export default service;
