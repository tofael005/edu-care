import React from 'react';

const SingleCourse = ({ singleData }) => {
    const { class_image, class_name, instructor_name,
        avilable_seats, price, instructor_email } = singleData;
    return (
        <div className="border p-4 rounded-md shadow-md">
            <img data-aos="zoom-in-up" className="rounded-t-md" src={class_image} alt="" />
            <h1 className='text-center  md:text-left font-semibold my-3 text-2xl'>{class_name}</h1>
            <h1 className='font-semibold md:text-left text-center my-1 text-lg'>Name: {instructor_name}</h1>
            <p className=" md:text-left text-center ">Email: {instructor_email}</p>
            <p className="my-2 md:text-left text-center ">Available Seat: {avilable_seats}</p>
            <p className="mb-4 md:text-left text-center ">Price: ${price}</p>
            <button className="w-full text-center  bg-sky-300 text-black p-3 rounded-b-md">Book Now</button>
        </div>
    );
};

export default SingleCourse;