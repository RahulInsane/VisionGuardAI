import axios from "axios";

const api = axios.create({
  baseURL: "https://visionguardai.onrender.com",
});

export default api;