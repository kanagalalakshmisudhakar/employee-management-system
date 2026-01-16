import axios from "axios";

const API_URL = "https://ems-deployment-latest-g8y6.onrender.com/api/employees";

export const getAllEmployees = () => {
  return axios.get(API_URL);
};

export const createEmployee = (employee) => {
  return axios.post(API_URL, employee);
};

export const updateEmployee = (id, employee) => {
  return axios.put(`${API_URL}/${id}`, employee);
};

export const deleteEmployee = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
