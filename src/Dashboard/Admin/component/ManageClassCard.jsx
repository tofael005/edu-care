import React from 'react';


const ManageClassCard = ({singleClass, i, openFeed, updateStatus}) => {


    const { _id, class_image, class_name, instructor_email, instructor_name, avilable_seats, price, status } = singleClass;
    return (

        <tr className="border-b-2 ">
            <td className="py-2 font-bold text-center">{i + 1}</td>
            <td className="py-2"><img className="h-[75px] w-[75px] object-cover mx-auto" src={class_image} alt="" /></td>
            <td className="py-2 text-center">{class_name}</td>
            <td className="py-2 text-center">{instructor_email}</td>
            <td className="py-2 text-center">{instructor_name}</td>
            <td className="py-2 text-center">{avilable_seats}</td>
            <td className="py-2 text-center">${price}</td>
            <td className="py-2 text-center">
                <div>
                    <button onClick={() => updateStatus("Approved", _id)} disabled={status === "Approved" || status === "denied"} className={`${status === "Approved" || status === "denied" ? "opacity-25 cursor-not-allowed" : ""} bg-[#1b1e34] text-white px-6 py-2 rounded m-1 text-sm block mx-auto`}>Approved</button>
                    <button onClick={() => updateStatus("denied", _id)} disabled={status === "Approved" || status === "denied"} className={`${status === "Approved" || status === "denied" ? "opacity-25 cursor-not-allowed" : ""} bg-main px-6 py-2 rounded m-1 text-sm block bg-[#1b1e34] text-white mx-auto`}>Denied</button>
                    <button onClick={() => openFeed(_id)} className="block px-6 py-2 m-1 mx-auto text-sm rounded bg-[#1b1e34] text-white bg-main">
                        Send Feedback
                    </button>
                </div>
            </td>
        </tr>

    );
};

export default ManageClassCard;