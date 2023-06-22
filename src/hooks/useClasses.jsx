import { useQuery } from "react-query";
import useAxiosSecure from "./useAxiosSecure";

const useClasses = (status) => {
    const {axiosSecure} = useAxiosSecure()
    const {data: classes = [], refetch} = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/classes?status=${status}`)
            return res.data
        }
    })
    return {classes, refetch}
};

export default useClasses;