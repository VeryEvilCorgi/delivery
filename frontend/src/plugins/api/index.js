import axios from "axios";

const ApiClient = axios.create({
  baseURL: "http://54.144.111.181:3000/",
});

export default ApiClient;
