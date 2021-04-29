import axios from "axios";

const apiUser = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_USUARIO,
});

export default apiUser;
