import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { BsBoxArrowInUpLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import bnr1 from "../assets/bnner/bnr2.jpg"
import bnr2 from "../assets/bnner/bnr1.jpg"
import bnr3 from "../assets/bnner/bnr4.jpg"
import bnr4 from "../assets/bnner/bnr3.avif"

const Banner = () => {

    return (
        <div className='mt-[68px]'>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="relative">
                        <img className="w-full h-[90vh]" src={bnr1} alt="" />
                        <div className="absolute px-3 text-center top-0 left-0 w-full h-full text-white bg-black/70">
                            <h1 className="md:mt-44 mt-36 font-bold">WELCOME TO Edu <span className='text-red-500'>CARE</span></h1>
                            <h1 className="text-3xl md:text-5xl text-center mt-2 font-bold"><Typewriter
                                options={{
                                    strings: ['Embrace the Power of Sports!', 'Sports Academy'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            /></h1>
                            <p className="text-center mt-4">The creation of a sports academy aims to provide a comprehensive platform for athletes to enhance their skills and reach their full.</p>
                            <button className="md:flex flex gap-3 items-center text-xl my-6 border-2 border-sky-300 p-3 rounded-md hover:bg-sky-400 duration-300 ml-[25%] md:ml-[45%]"><BsBoxArrowInUpLeft /><Link to="/classes">Explore Classes</Link></button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img className="w-full h-[90vh]" src={bnr2} alt="" />
                        <div className="absolute px-3 text-center top-0 left-0 w-full h-full text-white bg-black/70">
                            <h1 className="md:mt-44 mt-36 font-bold">WELCOME TO Edu <span className='text-red-500'>CARE</span></h1>
                            <h1 className="text-3xl md:text-5xl text-center mt-2 font-bold"><Typewriter
                                options={{
                                    strings: ['Embrace the Power of Sports!', 'Sports Academy'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            /></h1>
                            <p className="text-center mt-4">The creation of a sports academy aims to provide a comprehensive platform for athletes to enhance their skills and reach their full.</p>
                            <button className="md:flex flex gap-3 items-center text-xl my-6 border-2 border-sky-300 p-3 rounded-md hover:bg-sky-400 duration-300 ml-[25%] md:ml-[45%]"><BsBoxArrowInUpLeft /><Link to="/course">Explore Classes</Link></button>                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img className="w-full h-[90vh]" src={bnr3} alt="" />
                        <div className="absolute px-3 text-center top-0 left-0 w-full h-full text-white bg-black/70">
                            <h1 className="md:mt-44 mt-36 font-bold">WELCOME TO Edu <span className='text-red-500'>CARE</span></h1>
                            <h1 className="text-3xl md:text-5xl text-center mt-2 font-bold"><Typewriter
                                options={{
                                    strings: ['Embrace the Power of Sports!', 'Sports Academy'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            /></h1>
                            <p className="text-center mt-4">The creation of a sports academy aims to provide a comprehensive platform for athletes to enhance their skills and reach their full.</p>
                            <button className="md:flex flex gap-3 items-center text-xl my-6 border-2 border-sky-300 p-3 rounded-md hover:bg-sky-400 duration-300 ml-[25%] md:ml-[45%]"><BsBoxArrowInUpLeft /><Link to="/course">Explore Classes</Link></button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img className="w-full h-[90vh]" src={bnr4} alt="" />
                        <div className="absolute px-3 text-center top-0 left-0 w-full h-full text-white bg-black/50">
                            <h1 className="md:mt-44 mt-36 font-bold">WELCOME TO Edu <span className='text-red-500'>CARE</span></h1>
                            <h1 className="text-3xl md:text-5xl text-center mt-2 font-bold"><Typewriter
                                options={{
                                    strings: ['Embrace the Power of Sports!', 'Sports Academy'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            /></h1>
                            <p className="text-center mt-4">The creation of a sports academy aims to provide a comprehensive platform for athletes to enhance their skills and reach their full.</p>
                            <button className="md:flex flex gap-3 items-center text-xl my-6 border-2 border-sky-300 p-3 rounded-md hover:bg-sky-400 duration-300 ml-[25%] md:ml-[45%]"><BsBoxArrowInUpLeft /><Link to="/course">Explore Classes</Link></button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;