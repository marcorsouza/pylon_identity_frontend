import axios from "axios";
// TODO: Trocar por endpoint da sua api
export const axiosClient = axios.create({
  baseURL: process.env.HOST_SISTEMA,
});
