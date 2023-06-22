import { useQuery } from "react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useAuth } from "../Pages/auth/AuthProvider";



const useAuthorization = () => {
    const {axiosSecure} = useAxiosSecure()
    const {user, loading} = useAuth()
    const {data : role, isLoading} = useQuery({
        queryKey: ["authorization", user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/authorization?email=${user?.email}`)
            return res.data.role
        }
    })
    return {role, isLoading}
};

export default useAuthorization;