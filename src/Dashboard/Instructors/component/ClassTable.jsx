import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const ClassTable = ({ singleClass, i }) => {
    const { _id, enrolled, class_image, class_name, status, feedback } = singleClass
    return(

        <tr className="border-b-2 ">
            <td className="py-2 font-bold text-center">{i + 1}</td>
            <td className="py-2"><img className="h-[75px] w-[75px] object-cover mx-auto" src={class_image} alt="" /></td>
            <td className="py-2 font-bold text-center">{enrolled}</td>
            <td className="py-2 text-center">{class_name}</td>
            <td className="py-2 text-center">{feedback || "No Feedback Here"}</td>
            <td className="py-2 text-center">{status}</td>
            <td className="py-2 text-center "><Link to={`/dashboard/${_id}/edit`}>
                <button className={`bg-sky-300 p-3 rounded block mx-auto`}>
                    <FaEdit />
                </button>
            </Link></td>

        </tr>

    );
};

export default ClassTable;