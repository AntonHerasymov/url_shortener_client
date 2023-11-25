import { AxiosRequestConfig } from "axios";

export const config: AxiosRequestConfig = {
  baseURL: "http://localhost:5110/",
  headers: {
    Accept: "text/plain",
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
  },
  timeout: 5000,
};
