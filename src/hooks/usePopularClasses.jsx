import { useQuery } from 'react-query';
import { useAuth } from '../Pages/auth/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const usePopularClasses = () => {
    const {user, loading} = useAuth()
    const {axiosSecure} = useAxiosSecure()
    const {data: popularClasses = [], refetch} = useQuery({
        queryKey: ["popular-classes", user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get("/popular-classes")
            return res.data
        }
    })
    return {popularClasses, refetch}
};

export default usePopularClasses;