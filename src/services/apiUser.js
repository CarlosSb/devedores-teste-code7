import axios from "axios";

const apiUser = axios.create({
  baseURL: process.env.BASE_URL_USUARIO,
});

export default apiUser;
