import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8888",
    withCredentials: true,
});

export default axiosInstance;
