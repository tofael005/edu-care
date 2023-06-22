import { BsTrash3Fill } from "react-icons/bs";

const ManageUserCard = ({ user, i, deleteUser, updateUserRole }) => {

    const { _id, photo_url, name, email, role } = user
    return (

        <tr className="text-black border-b-2">
            <td className="py-2 font-bold text-center">{i + 1}</td>
            <td className="py-2"><img className="h-[75px] w-[75px] object-cover mx-auto" src={photo_url} alt="" /></td>
            <td className="py-2 text-center">{name}</td>
            <td className="py-2 text-center">{email}</td>
            <td>
                <button onClick={() => updateUserRole("admin", _id)} disabled={role === "admin"} className={`${role === "admin" ? "opacity-25 cursor-not-allowed" : ""}  px-6 py-2 rounded m-1 text-sm block mx-auto`}>Make Admin</button>
                <button onClick={() => updateUserRole("instructor", _id)} disabled={role === "instructor"} className={`${role === "instructor" ? "opacity-25 cursor-not-allowed" : ""}  px-6 py-2 rounded m-1 text-sm block mx-auto`}>Make Instructor</button>
            </td>
            <td className="py-2"><button onClick={() => deleteUser(_id)} className="bg-[#B91C1C] p-3 rounded text-white block mx-auto"><BsTrash3Fill /></button></td>
        </tr>

    );
};

export default ManageUserCard;
