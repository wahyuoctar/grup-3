import axios from "axios";
import jscookie from "js-cookie";

export const API_URL = "http://localhost:2020";

export const axiosInstance = axios.create({
  baseURL: API_URL,
});

axiosInstance.interceptors.request.use((config) => {
  config.headers.authorization = jscookie.get("auth_token") || "";

  return config;
});
