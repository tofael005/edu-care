import React from 'react';
import { Link } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";
import useAuthorization from '../../hooks/useAuthorization';

const CourseCard = ({ singleCard, seletedClass }) => {
    const { class_name, class_image, instructor_name, instructor_email, avilable_seats, price, enroll, status } = singleCard;
    const { role } = useAuthorization()
    return (
        <div className="rounded-md p-4 shadow-md md:text-left text-center border">
            <Fade cascade>
                <img data-aos="zoom-in-up" className="rounded-md" src={class_image} alt="" />
                <h1 className="text-xl text-gray-700 mt-5 mb-2">Class Name: <span className="font-bold">{class_name}</span></h1>
                <p className="text-xl text-gray-700">Instructor Name: <span className="font-bold">{instructor_name}</span></p>
                <p className="text-gray-700 my-2">Email: <span className="font-bold">{instructor_email}</span></p>
                <p className="text-gray-700">Available Seat: <span className="text-black font-bold">{avilable_seats}</span></p>
                <p className="text-gray-700 my-2">Course Price: $ <span className="font-bold">{price}</span></p>
                <p className="text-gray-700 mb-3">Enroll: <span className="font-bold">{enroll}</span> students</p>
                {/* <p className="text-gray-700 my-2">Status: <span className="text-green-700 font-semibold">{status}</span></p> */}
                <button onClick={() => seletedClass(classes)} disabled={avilable_seats === 0 || role === 'admin' || role === 'instructor'} className="bg-sky-300 w-full p-3 rounded-b font-bold hover:bg-sky-600 duration-300 text-black "><Link>Enroll  Now!</Link></button>
            </Fade>
        </div>
    );
};

export default CourseCard;