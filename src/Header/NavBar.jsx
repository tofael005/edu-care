import React, { useState } from 'react';
import logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router-dom';
import useDark from '../hooks/useDark';
import { MdOutlineLightMode } from 'react-icons/md';
import { MdLightMode } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useAuth } from '../Pages/auth/AuthProvider';



const NavBar = () => {
    const [isDark, setIsdark] = useState(null)
    const [toggle, setToggle] = useState()
    useDark(isDark)
    const { user, logOut } = useAuth()
    return (
        <nav className="bg-sky-300 fixed z-50 top-0 right-0 left-0">
            <div className="flex py-2 justify-between items-center px-3 max-w-[1240px] text-black mx-auto">

                <div className="flex items-center">
                    <Link to="/"><img className="w-20" src={logo} alt="" /></Link>
                    <Link to="/"><h1 className="text-lg md:text-2xl font-bold">Edu <span className="text-red-500">CARE</span></h1></Link>
                </div>
                <span className='md:hidden'>
                    {
                        toggle ? <AiOutlineClose onClick={() => setToggle(!toggle)} /> : <GiHamburgerMenu onClick={() => setToggle(!toggle)} />
                    }
                </span>

                <ul className={`flex items-center  px-4 duration-300 flex-col py-5 md:p-0 text-white md:text-black bg-opacity-90 top-16 bg-black md:bg-transparent w-full text-center md:w-auto md:flex-row gap-4 absolute md:static z-50 ${toggle ? "left-0" : "-left-full"}`}>
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/classes" className={({ isActive }) => isActive ? "active" : ""}>Classes</NavLink>
                    </li>
                    <li>
                        <NavLink to="/instructor" className={({ isActive }) => isActive ? "active" : ""}>Instructors</NavLink>
                    </li>
                    {
                        user ? <li>
                            <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/dashboard">Dashboard </NavLink>
                        </li> : <></>
                    }
                    <div className="flex gap-4 list-none items-center">
                        <li>{
                            user?.photoURL ? <img className="w-[35px] block mx-auto h-[35px] rounded-full" src={user?.photoURL} title={user.displayName} alt="" /> : ""
                        }
                        </li>
                        <li>{
                            user ? <button onClick={logOut} className="border border-[#107380] rounded-full px-4 py-2 font-semibold text-red-600 ">LogOut</button> : <button className="border border-[#107380] px-4 py-2 rounded-full hover:bg-sky-300 font-semibold text-red-600"><Link to="/login">Login</Link></button>
                        }
                        </li>

                        <button>
                            {isDark ? <MdOutlineLightMode className="cursor-pointer text-2xl" onClick={() => setIsdark(false)} /> : <MdLightMode className="cursor-pointer text-2xl" onClick={() => setIsdark(true)} />}
                        </button>
                    </div>
                </ul>

            </div>
        </nav>
    );
};

export default NavBar;