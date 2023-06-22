import React from 'react';
import { GiSpellBook } from 'react-icons/gi';
import { FaGraduationCap } from 'react-icons/fa';
import { MdOutlineReduceCapacity } from 'react-icons/md';
import { CgCalculator } from 'react-icons/cg';


const Analitiks = () => {
    return (
        <div className="bg-[#bfe8f7cf] mt-20 mb-20">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8 py-16">
                <div className="flex items-center gap-4 justify-center">
                    <div className="text-8xl text-gray-700">
                        <GiSpellBook />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-gray-500 mb-2">400</h1>
                        <p className="text-gray-500">ONLINE COURSES</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 justify-center">
                    <div className="text-8xl text-gray-700">
                        <FaGraduationCap />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-gray-500 mb-2">5,300</h1>
                        <p className="text-gray-500">STUDENTS ENROLLED</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 justify-center">
                    <div className="text-7xl text-gray-700">
                        <MdOutlineReduceCapacity />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-gray-500 mb-2">1,200</h1>
                        <p className="text-gray-500">EXPERTS INSTRUCTORS</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 justify-center">
                    <div className="text-7xl text-gray-700">
                        <CgCalculator />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-gray-500 mb-2">300</h1>
                        <p className="text-gray-500">HOURS CONTENT</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Analitiks;