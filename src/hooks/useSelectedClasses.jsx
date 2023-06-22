import { useQuery } from "react-query";
import { useAuth } from "../Pages/auth/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";


const useSelectedClasses = () => {
    const { user, loading } = useAuth()
    const { axiosSecure } = useAxiosSecure()
    const { data: selectedClasses = [], refetch } = useQuery({
        queryKey: ["selected-class", user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/selected-classes?email=${user?.email}`)
            return res.data
        }
    })
    return { selectedClasses, refetch }
};

export default useSelectedClasses;
