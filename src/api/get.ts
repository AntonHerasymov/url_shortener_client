import axios from "axios";
import { Url } from "../types/url";
import { config } from "../config/axiosConfig";

export const getUrls = async () => {
  try {
    const response = await axios.get("/URL/GetUrls", config);

    if (response.status !== 200) {
      throw Error("Error GetUrls");
    }

    return response.data as Url[];
  } catch (error) {
    console.log("Error");
    return [];
  }
};

export const getUrlById = async (urlId: string) => {
  try {
    const response = await axios.get("/URL/GetUrl?urlId=" + urlId, config);

    if (response.status !== 200) {
      throw Error("Error GetUrlById");
    }

    return response.data as Url;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getFullUrl = async (shortUrl: string) => {
  try {
    const response = await axios.get(
      "/URL/GetFullUrl?shortUrl=" + shortUrl,
      config
    );

    if (response.status !== 200) {
      throw Error("Error GetUrlById");
    }

    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
