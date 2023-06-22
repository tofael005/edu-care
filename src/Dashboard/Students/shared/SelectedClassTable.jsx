import { BsTrash3Fill } from "react-icons/bs";
const SelectedClassTable = ({ singleClass, i, deleteSelectedClass }) => {
    const { _id, class_name, class_image, instructor_name, instructor_email, price } = singleClass
    return (
        <tr className="border-b-2 ">
            <td className="py-2 font-bold text-center">{i + 1}</td>
            <td className="py-2"><img className="h-[75px] w-[75px] object-cover mx-auto" src={class_image} alt="" /></td>
            <td className="py-2 text-center">{class_name}</td>
            <td className="py-2 text-center">{instructor_name}</td>
            <td className="py-2 text-center">{instructor_email}</td>
            <td className="py-2 text-center">${price}</td>
            <td className="py-2"><button onClick={() => deleteSelectedClass(_id)} className="bg-[#B91C1C] p-3 rounded text-white block mx-auto"><BsTrash3Fill /></button></td>
        </tr>
    );
};

export default SelectedClassTable;