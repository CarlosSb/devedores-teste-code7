import axios from "axios";

const apiDebt = axios.create({
  baseURL: "https://provadev.xlab.digital/api/v1/",
});

export default apiDebt;
