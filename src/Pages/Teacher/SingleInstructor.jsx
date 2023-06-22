import React from 'react';
import { Fade, Zoom } from "react-awesome-reveal";

const SingleInstructor = ({ singleInstructor }) => {
    const { name, url, email, } = singleInstructor;
    return (
        <div>
            <div className='text-center border p-4 rounded-md shadow-md'>
                <Zoom>
                    <img data-aos="zoom-in-up" className="w-full h-96 rounded-t-md" src={url} alt="" />
                </Zoom>
                <h1 className="text-2xl font-bold my-2">{name}</h1>
                <p className="my-1 font-semibold">{email}</p>
            </div>
        </div>
    );
};

export default SingleInstructor;