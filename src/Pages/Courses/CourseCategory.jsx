import React from 'react';
import img1 from '../../assets/category/img1.jpeg'
import img2 from '../../assets/category/img2.jpeg'
import img3 from '../../assets/category/img3.jpeg'
import img4 from '../../assets/category/img4.jpeg'
import img5 from '../../assets/category/img5.jpeg'
import img6 from '../../assets/category/img6.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const CourseCategory = () => {
    AOS.init();

    return (
        <div className="max-w-[1040px] mx-auto px-3 mb-20">
            <div className="text-center mt-8">
                <h1 className="text-[#7bd5f6cf] font-bold">START LEARNING TODAY</h1>
                <h1 className="text-3xl font-bold my-4">Explore Our Best Course Category</h1>
                <div className="grid md:grid-cols-6 gap-6 mt-10">
                    <div className="text-center">
                        <img data-aos="zoom-in-up" className="w-full rounded-md md:h-[150px]" src={img1} alt="" />
                        <div className="text-center">
                            <h1 className="text-xl font-semibold mt-4">FootBall Zone</h1>
                            <p className="text-sm text-gray-600 mt-2 mb-5">100 course</p>
                            <hr />
                        </div>
                    </div>
                    <div>
                        <img data-aos="zoom-in-up" className="w-full rounded-md md:h-[150px]" src={img2} alt="" />
                        <div className="text-center">
                            <h1 className="text-xl font-semibold mt-4">Cricket</h1>
                            <p className="text-sm text-gray-600 mt-2 mb-5">100 course</p>
                            <hr />
                        </div>
                    </div>
                    <div>
                        <img data-aos="zoom-in-up" className="w-full rounded-md md:h-[150px]" src={img3} alt="" />
                        <div className="text-center">
                            <h1 className="text-xl font-semibold mt-4">Bascket Ball</h1>
                            <p className="text-sm text-gray-600 mt-2 mb-5">100 course</p>
                            <hr />
                        </div>
                    </div>
                    <div>
                        <img data-aos="zoom-in-up" className="w-full rounded-md md:h-[150px]" src={img4} alt="" />
                        <div className="text-center">
                            <h1 className="text-xl font-semibold mt-4">Vally Ball</h1>
                            <p className="text-sm text-gray-600 mt-2 mb-5">100 course</p>
                            <hr />
                        </div>
                    </div>
                    <div>
                        <img data-aos="zoom-in-up" className="w-full rounded-md md:h-[150px]" src={img5} alt="" />
                        <div className="text-center">
                            <h1 className="text-xl font-semibold mt-4">Hockey</h1>
                            <p className="text-sm text-gray-600 mt-2 mb-5">100 course</p>
                            <hr />
                        </div>
                    </div>
                    <div>
                        <img data-aos="zoom-in-up" className="w-full rounded-md md:h-[150px]" src={img6} alt="" />
                        <div className="text-center">
                            <h1 className="text-xl font-semibold mt-4">Rugvy</h1>
                            <p className="text-sm text-gray-600 mt-2 mb-5">100 course</p>
                            <hr />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default CourseCategory;