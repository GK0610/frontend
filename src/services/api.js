import axios from 'axios';

const API_URL = 'http://localhost:3000';

// Helper function to set the authorization token in the request headers
const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

// User APIs
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Employee APIs
export const getEmployees = async () => {
  try {
    const response = await axios.get(`${API_URL}/employees`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const createEmployee = async (employeeData) => {
  try {
    const response = await axios.post(`${API_URL}/employees`, employeeData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateEmployee = async (employeeId, employeeData) => {
  try {
    const response = await axios.put(`${API_URL}/employees/${employeeId}`, employeeData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteEmployee = async (employeeId) => {
  try {
    const response = await axios.delete(`${API_URL}/employees/${employeeId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const api = {
  setAuthToken,
  registerUser,
  loginUser,
  getEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};

export default api;
