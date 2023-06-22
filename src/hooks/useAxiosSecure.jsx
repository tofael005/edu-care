import axios from "axios";
import { useEffect } from "react";

const axiosSecure = axios.create({
    baseURL: "https://edu-care.vercel.app"
})

const useAxiosSecure = () => {
        
    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem("access-token")
            if(token) {
                config.headers.authorization = `Bearer ${token}`;
            }
            return config
        })
    },[])
    return {axiosSecure}
};

export default useAxiosSecure;