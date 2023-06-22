
import { useQuery } from "react-query";
import useAxiosSecure from "./useAxiosSecure";


const useInstructors = () => {
    const {axiosSecure} = useAxiosSecure()
    const {data: instructors = []} = useQuery({
        queryKey: ["popular-instructor"],
        queryFn: async () => {
            const res = await axiosSecure.get("/instructors")
            return res.data
        }
    })
    return {instructors}
    
};

export default useInstructors;