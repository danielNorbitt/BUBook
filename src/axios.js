import axios from "axios";

const axiosApi = axios.create({
  baseURL: `${
    process.env.NODE_ENV !== "production" ? "http://localhost:3001" : "https://laurabook-c13a5b12be6d.herokuapp.com/"
  }`,
  timeout: 100000,
});

export default axiosApi;
