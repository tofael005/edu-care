import { useQuery } from "react-query";
import useAxiosSecure from "./useAxiosSecure";
import {  useAuth } from "../Pages/auth/AuthProvider";



const useUsers = () => {
    const {axiosSecure} = useAxiosSecure()
    const {loading} = useAuth()
    const {data: users = [], refetch} = useQuery({
        queryKey: ["users"],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get("/users")
            return res.data
        }
    })
    return {users, refetch}
    
};

export default useUsers;