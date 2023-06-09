import axios from "axios";
export const api = axios.create({
  baseURL: "https://projetofullstack.onrender.com",
  timeout: 10000,
});
