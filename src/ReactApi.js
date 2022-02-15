import axios from "axios";

export const getAllClients = (requestedPage = 0, limit = 3) => {
  const path = `/api/v1/clients?page=${requestedPage}&limit=${limit}`;

  return axios.get(path);
};

export const addClient = (client) => {
  const path = "/api/v1/clients";

  return axios.post(path, client);
};

export const deleteClient = (id) => {
  const path = `api/v1/clients/${id}`;

  return axios.delete(path);
};

export const getClientById = (id) => {
  const path = `api/v1/clients/${id}`;

  return axios.get(path);
};

export const updateClient = (id, client) => {
  const path = `api/v1/clients/${id}`;

  return axios.put(path, client);
};
