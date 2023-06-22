import usePayment from "../../../hooks/usePayment";
import useTitle from "../../../hooks/useTitle";
import PaymentHistoryTable from "../component/PaymentHistoryTable";





const PaymentHistory = () => {
    useTitle("Payment History")
    const { paymentHistory } = usePayment()


    return (
        <main className='h-screen mt-20 overflow-hidden'>
            <h1 className="text-2xl font-bold mb-4">Payment History:{paymentHistory.length}</h1>
            <section className='h-[650px] mt-2 overflow-x-auto relative'>
                <table className='w-full'>
                    <thead >
                        <tr className='sticky top-0 px-10 bg-sky-300'>
                            <th className='py-3'></th>
                            <th className='py-3'>Transaction Id</th>
                            <th className='py-3'>Price</th>
                            <th className='py-3'>Payment Date</th>
                        </tr>
                    </thead>
                    <tbody >

                        {
                            paymentHistory && paymentHistory.map((payment, i) => <PaymentHistoryTable key={payment._id} payment={payment} i={i} />)
                        }

                    </tbody>
                </table>
            </section>
        </main>
    );
};

export default PaymentHistory;