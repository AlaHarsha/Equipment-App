import axios from "axios";

const API_URL = "http://localhost:8080/api/equipment";

export const getAllEquipment = () => axios.get(API_URL);

export const addEquipment = (data) =>
  axios.post(API_URL, data);

export const updateEquipment = (id, data) =>
  axios.put(`${API_URL}/${id}`, data);

export const deleteEquipment = (id) =>
  axios.delete(`${API_URL}/${id}`);
