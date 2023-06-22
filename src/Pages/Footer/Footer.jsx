import React from 'react';
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom';
import { ImHome } from 'react-icons/im';
import { MdMarkEmailRead } from 'react-icons/md';
import { BiPhoneCall } from 'react-icons/bi';
import { AiFillLinkedin, AiFillFacebook, AiOutlineInstagram } from 'react-icons/ai';


const Footer = () => {
    return (
        <div className="max-w-[1240px] mx-auto text-gray-600 px-4 py-6">
            <div className="grid md:grid-cols-4 gap-8">
                <div>
                    <div className="flex gap-1 items-center my-4">
                        <img className="w-20" src={logo} alt="" />
                        <h1 className="text-2xl text-black"><Link to="/">Edu <span className="text-red-500 font-semibold">CARE</span></Link></h1>
                    </div>
                    <p className="">Edu care is a crucial aspect of nurturing young minds, providing them with a supportive environment for learning and personal growth. It encompasses quality education.</p>
                    <div className="flex text-3xl gap-3 cursor-pointer items-center text-cyan-500 mt-6">
                        <AiFillLinkedin />
                        <AiFillFacebook />
                        <AiOutlineInstagram />
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl my-5 text-black">Our Courses</h1>
                    <p className="mb-2">Football</p>
                    <p className="mb-2">Cricket</p>
                    <p className="mb-2">Basket ball</p>
                    <p className="mb-2">Volly ball</p>
                    <p className="mb-2">Ruvey</p>
                    <p className="mb-2">Hokey</p>
                </div>
                <div>
                    <h1 className="text-2xl my-5 text-black">Use Link</h1>
                    <p className="mb-2"><Link to="/">Home</Link></p>
                    <p className="mb-2"><Link to="/course">Classes</Link></p>
                    <p className="mb-2"><Link to="/teacher">Instructor</Link></p>
                    <p className="mb-2"><Link to="/login">Log In</Link></p>
                    <p className="mb-2"><Link to="/register">Join Now</Link></p>
                </div>
                <div>
                    <h1 className="text-2xl my-5 text-black">Contact</h1>
                    <span className='flex items-center gap-3 mb-2'>
                        <ImHome />
                        <p>32, Gulshan, Dhaka</p>
                    </span>
                    <span className='flex items-center gap-3 mb-2'>
                        <MdMarkEmailRead />
                        <p>edu@care.com</p>
                    </span>
                    <span className='flex items-center gap-3 mb-14'>
                        <BiPhoneCall />
                        <p>+123 99 00 99 88</p>
                    </span>
                    <span className='flex items-center'>
                        <input className="p-3 rounded-l-md bg-transparent border-gray-700 border" type="email" name="email" id="" placeholder='Email'/>
                        {/* <button className="px-4 py-3 text-xl text-red-500 rounded-r-md bg-sky-300">Submit</button> */}
                        <input className="bg-sky-300 p-3 border border-gray-700 rounded-r-md hover:bg-sky-400 duration-300 font-semibold" type="button" value="Submit" />
                    </span>

                </div>
            </div>
            <hr className='py-3 mt-8 w-full' />
            <p className="text-center py-3">©2023 Copyright all reserved by : eduCare</p>

        </div>
    );
};

export default Footer;