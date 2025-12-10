import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_UJS_BACKEND_API_BASEURL || 'https://api.example.com';
const API_PORT = import.meta.env.VITE_UJS_BACKEND_API_PORT;

const API_URL = API_PORT ? `${API_BASE_URL}:${API_PORT}` : API_BASE_URL;

const instance = axios.create({
  // Set your desired Axios configuration options here
  baseURL: API_URL,
  timeout: 5000,
});

// TODO
// Optionally, you can add request interceptors for handling common request settings
instance.interceptors.request.use(function (config) {
  // Add your request interceptor logic here
  // For example, you can add a token to the request headers
//   const token = localStorage.getItem('ujs_token');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
  return config;
}, function (error) {
  // Handle request error
  return Promise.reject(error);
});

// TODO
// Optionally, you can add response interceptors for handling common response settings
instance.interceptors.response.use(function (response) {
  // Add your response interceptor logic here
  // For example, you can handle error responses or process the response data
  return response;
}, function (error) {
  // Handle response error
  return Promise.reject(error);
});

export default instance;