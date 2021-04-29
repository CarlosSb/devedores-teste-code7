import axios from "axios";

const apiDebt = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_DIVIDA,
});

export default apiDebt;
