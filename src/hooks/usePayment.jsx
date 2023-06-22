import { useQuery } from 'react-query';
import { useAuth } from '../Pages/auth/AuthProvider';
import useAxiosSecure from './useAxiosSecure';



const usePayment = () => {
    const {user, loading} = useAuth()
    const {axiosSecure} = useAxiosSecure()
    const {data: paymentHistory = []} = useQuery({
        queryKey: ["payment-history", user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/payment-history?email=${user?.email}`)
            return res.data
        }
    })
    return {paymentHistory}
};

export default usePayment;