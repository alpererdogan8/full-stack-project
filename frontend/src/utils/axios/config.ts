import axios from "axios";
const apiUrl: string =
  import.meta.env.MODE === "production"
    ? import.meta.env.VITE_REACT_APP_API_URL_PROD!
    : import.meta.env.VITE_REACT_APP_API_URL_DEV!;

export const API = axios.create({
  baseURL: apiUrl,
  headers: { "Content-Type": "application/json", Accept: "application/json" },
});
