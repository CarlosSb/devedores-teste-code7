import axios from "axios";

const apiUser = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export default apiUser;
