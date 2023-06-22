import { useQuery } from "react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useAuth } from "../Pages/auth/AuthProvider";



const useEnrolledClasses = () => {
    const {user, loading} = useAuth()
    const {axiosSecure} = useAxiosSecure()
    const {data : enrolledClasses = [], refetch} = useQuery({
        queryKey: ["selected-class", user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/enrolled-classes?email=${user?.email}`)
            return res.data
        }
    })
    return {enrolledClasses, refetch}
};

export default useEnrolledClasses;