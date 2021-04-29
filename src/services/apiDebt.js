import axios from "axios";

const apiDebt = axios.create({
  baseURL: process.env.BASE_URL_DIVIDA,
});

export default apiDebt;
