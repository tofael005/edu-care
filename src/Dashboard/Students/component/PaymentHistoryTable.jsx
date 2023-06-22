import moment from 'moment';
import React from 'react';

const PaymentHistoryTable = ({payment, i}) => {
    const {transactionId, price, date} = payment
    return (
        <tr className="border-b-2 ">
            <td className="py-2 font-bold text-center">{i + 1}</td>
            <td className="py-2 text-center">{transactionId}</td>
            <td className="py-2 text-center">{price}</td>       
            <td className="py-2 text-center">{moment(date).format('dddd, MMMM D, YYYY')}</td>
            
        </tr>
    );
};

export default PaymentHistoryTable;