import axios from "axios";

const instance = axios.create({
    // baseURL: "http://localhost:5000",
    baseURL: "https://stay-finder-server.vercel.app",
    withCredentials: true
})

const useAxios = () => {
    return instance
};

export default useAxios;