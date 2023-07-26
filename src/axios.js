import axios from "axios";

const axiosApi = axios.create({
  baseURL: "https://laurabook-c13a5b12be6d.herokuapp.com/",
  timeout: 100000,
});

export default axiosApi;
