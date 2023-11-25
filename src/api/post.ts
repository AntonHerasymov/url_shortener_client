import axios, { AxiosError } from "axios";
import { UrlDto } from "../types/url";
import { config } from "../config/axiosConfig";
import { LoginType } from "../types/login";

interface ErrorResponse {
  message: string;
}

export const Login = async (loginData: LoginType) => {
  const data = await axios
    .post("/User/Login", loginData, config)
    .then((response) => response.data)
    .catch((error: AxiosError) => {
      return error.response;
    });

  return data;
};

export const Register = async (registerData: LoginType) => {
  const data = await axios
    .post("/User/Register", registerData, config)
    .then((response) => response.data)
    .catch((error: AxiosError) => {
      return error.response;
    });

  return data;
};

export const AddUrl = async (url: UrlDto) => {
  const data = await axios
    .post("/URL/AddNew", url, config)
    .then((response) => response.data)
    .catch((error: AxiosError) => {
      alert((error.response?.data as ErrorResponse)?.message);
    });

  return data;
};
