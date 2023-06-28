import axios, { AxiosError, AxiosResponse } from 'axios';

const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  // Add any common headers or configurations here
});

// Handle successful API responses
const handleResponse = (response: AxiosResponse) => {
  return response.data;
};

// Handle API errors
const handleError = (error: unknown) => {
  // Add any error handling logic here
  if (error instanceof AxiosError) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error(error.response.data);
      console.error(error.response.status);
      console.error(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.error(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error', error.message);
    }
  }
  return Promise.reject(error);
};

// Make a GET request to the specified endpoint with the specified parameters
const get = async (endpoint: string, params?: object) => {
  try {
    const response = await apiClient.get(endpoint, { params });
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

// Make a POST request to the specified endpoint with the specified data
const post = async (endpoint: string, data?: object) => {
  try {
    const response = await apiClient.post(endpoint, data);
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

// Make a PUT request to the specified endpoint with the specified data
const put = async (endpoint: string, data?: object) => {
  try {
    const response = await apiClient.put(endpoint, data);
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

// Make a PATCH request to the specified endpoint with the specified data
const patch = async (endpoint: string, data?: object) => {
  try {
    const response = await apiClient.patch(endpoint, data);
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

export default {
  get,
  post,
  put,
  patch,
};
