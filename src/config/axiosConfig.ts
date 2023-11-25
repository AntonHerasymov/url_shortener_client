import { AxiosRequestConfig } from "axios";

export const config: AxiosRequestConfig = {
  baseURL: "http://localhost:5110/",
  headers: {
    Accept: "text/plain",
    "Content-Type": "application/json",
    Authorization: "Bearer yourAccessToken",
    
  },
  timeout: 5000,
};
