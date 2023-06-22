import React from 'react';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Marquee from "react-fast-marquee";
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import ret1 from "../../assets/ret1.jpeg"
import ret2 from "../../assets/ret4.jpeg"
import ret3 from "../../assets/ret2.jpeg"
import ret4 from "../../assets/ret5.jpeg"
import ret5 from "../../assets/ret3.jpeg"




const StudentFeedBack = () => {
    return (
        <div>
            <h1 className="text-center text-2xl font-semibold border w-80 block mx-auto p-3 border-sky-300 rounded-md">Guardian Feedback</h1>
            <div className="max-w-[1240px] mx-auto my-10">
                <Marquee>
                    <div className="py-4 border px-4 rounded-md ml-96">
                        <img className="w-48 rounded-full h-48 block mx-auto" src={ret1} alt="" />
                        <div className="text-center">
                            <h1 className="text-lg font-semibold mt-4">Jhon Kery</h1>
                            <p className="text-center my-4">Excellent feedback! Great job, highly recommended. <br /> Thank you for your outstanding service and professionalism.</p>
                            <div className="text-orange-500 justify-center flex gap-2">
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarHalf />
                            </div>
                        </div>
                    </div>
                    <div className="py-4 border px-4 rounded-md ml-96">
                        <img className="w-48 rounded-full h-48 block mx-auto" src={ret3} alt="" />
                        <div className="text-center">
                            <h1 className="text-lg font-semibold mt-4">Lioney kiles</h1>
                            <p className="text-center my-4">Outstanding feedback! Impressive service, highly recommended. <br /> Kudos for your exceptional work and remarkable professionalism. Thank you!</p>
                            <div className="text-orange-500 justify-center flex gap-2">
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarHalf />
                            </div>
                        </div>
                    </div>
                    <div className="py-4 border px-4 rounded-md ml-96">
                        <img className="w-48 rounded-full h-48 block mx-auto" src={ret2} alt="" />
                        <div className="text-center">
                            <h1 className="text-lg font-semibold mt-4">Zusef Andry</h1>
                            <p className="text-center my-4">Fantastic feedback! Outstanding service, highly recommended. <br /> Thank you for your exceptional work and superb professionalism. Great job!</p>
                            <div className="text-orange-500 justify-center flex gap-2">
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarHalf />
                            </div>
                        </div>
                    </div>
                    <div className="py-4 border px-4 rounded-md ml-96">
                        <img className="w-48 rounded-full h-48 block mx-auto" src={ret5} alt="" />
                        <div className="text-center">
                            <h1 className="text-lg font-semibold mt-4">Waston Bormik</h1>
                            <p className="text-center my-4">Excellent feedback! Great job, highly recommended. <br /> Thank you for your outstanding service and professionalism.</p>
                            <div className="text-orange-500 justify-center flex gap-2">
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarHalf />
                            </div>
                        </div>
                    </div>
                    <div className="py-4 border px-4 rounded-md ml-96">
                        <img className="w-48 rounded-full h-48 block mx-auto" src={ret4} alt="" />
                        <div className="text-center">
                            <h1 className="text-lg font-semibold mt-4">Atlas Donal</h1>
                            <p className="text-center my-4">Excellent feedback! Great job, highly recommended. <br /> Thank you for your outstanding service and professionalism.</p>
                            <div className="text-orange-500 justify-center flex gap-2">
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarHalf />
                            </div>
                        </div>
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default StudentFeedBack;