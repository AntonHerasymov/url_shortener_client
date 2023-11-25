import axios, { AxiosError } from "axios";
import { Url, UrlDto } from "../types/url";
import { config } from "../config/axiosConfig";
import { error } from "console";

interface ErrorResponse {
  message: string;
}

export const Login = () => {};

export const Register = () => {};

export const AddUrl = async (url: UrlDto) => {
  const data = await axios
    .post("/URL/AddNew", url, config)
    .then(response => response.data)
    .catch((error: AxiosError) => {
      alert((error.response?.data as ErrorResponse)?.message);
    });
    
  return data;
};
