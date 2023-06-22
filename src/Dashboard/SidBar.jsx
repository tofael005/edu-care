import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png"
import { BsFillMoonStarsFill,  BsFillSunFill } from "react-icons/bs";
import { GrUserAdmin } from "react-icons/gr";
import { MdOutlineManageHistory } from "react-icons/md";
import { GrHistory } from "react-icons/gr";
import { SiGoogleclassroom } from "react-icons/si";
import { useState } from "react";
import { IoMdArrowRoundBack } from 'react-icons/io';
import { RiSecurePaymentFill } from 'react-icons/ri';
import { BsDatabaseFillAdd } from 'react-icons/bs';
import useAuthorization from "../hooks/useAuthorization";
import useDark from "../hooks/useDark";



const Sidebar = () => {
    const {role} = useAuthorization()
    const [isDark, setIsdark] = useState(null)
    useDark(isDark)
  
    return (
        <aside className=" w-dashboard-md p-10 h-screen fixed top-0 bottom-0 shadow-2xl">
            <div className="flex gap-2 items-center justify-center">
            <Link to={`/dashboard/${role === "admin" ? "manageClasses" : role === "instructor" ? "addCourse" : "mySelectCourse"}`} className="flex items-center gap-1 -ml-10">
             <h3 className="text-2xl font-bold uppercase">{role}</h3>
            </Link>
            <Link to="/"><img className="h-[50px]" src={logo} alt="" /></Link>
            <button className="-mr-10 block"> 
                       {isDark ? <BsFillSunFill className="cursor-pointer" onClick={() => setIsdark(false)} /> : <BsFillMoonStarsFill className="cursor-pointer" onClick={() => setIsdark(true)}/>}
                    </button>
            </div>
            <ul className="mt-[60px]">

                {
                   role === "admin" ? <>
                    <li className="mt-4 font-bold"><NavLink to="/dashboard/manageClasses" className={({isActive}) => isActive ? "d-active flex gap-2 text-[16px] items-center": "uppercase flex gap-2 text-[16px] items-center"}><span className="text-2xl font-bold"><GrUserAdmin /></span><span>Manage Classes</span></NavLink></li>
                    <li className="mt-4 font-bold"><NavLink to="/dashboard/manageUser" className={({isActive}) => isActive ? "d-active flex gap-2 text-[16px] items-center": "uppercase flex gap-2 text-[16px] items-center"}><span className="text-2xl font-bold"><MdOutlineManageHistory /></span><span>Manage Users</span></NavLink></li>
                    </>
                    :
                    role === "instructor" ? <>
                    <li className="mt-4 font-bold"><NavLink to="/dashboard/addCourse" className={({isActive}) => isActive ? "d-active flex gap-2 text-[16px] items-center": "uppercase flex gap-2 text-[16px] items-center"}><span className="text-2xl font-bold"><BsDatabaseFillAdd /></span><span>Add Class</span></NavLink></li>


                    <li className="mt-4 font-bold"><NavLink to="/dashboard/myCourse" className={({isActive}) => isActive ? "d-active flex gap-2 text-[16px] items-center": "uppercase flex gap-2 text-[16px] items-center"}><span className="text-2xl font-bold"><SiGoogleclassroom /></span><span>My Classes</span></NavLink></li>
                    </> : 
                    <>
                        <li className="mt-4 font-bold"><NavLink to="/dashboard/paymentHist" className={({isActive}) => isActive ? "d-active flex gap-2 text-[16px] items-center": "uppercase flex gap-2 text-[16px] items-center"}><span className="text-2xl font-bold"><GrHistory /></span><span>Payment History</span></NavLink></li>
                        <li className="mt-4 font-bold"><NavLink to="/dashboard/mySelectCourse" className={({isActive}) => isActive ? "d-active flex gap-2 text-[16px] items-center": "uppercase flex gap-2 text-[16px] items-center"}><span className="text-2xl font-bold"><SiGoogleclassroom /></span><span>Selected Classes</span></NavLink></li>
                        <li className="mt-4 font-bold"><NavLink to="/dashboard/myEnrollCourse" className={({isActive}) => isActive ? "d-active flex gap-2 text-[16px] items-center": "uppercase flex gap-2 text-[16px] items-center"}><span className="text-2xl font-bold"><RiSecurePaymentFill /></span><span>Enrolled Classes</span></NavLink></li>
                    </>
                }
                
               
            </ul>
            <h1 className="mt-96 bg-sky-300 p-3 text-center rounded-md hover:bg-sky-400 font-bold"><Link to="/" className="flex items-center gap-3 justify-center"><IoMdArrowRoundBack />Back Home</Link></h1>
        </aside>
    );
};

export default Sidebar;
