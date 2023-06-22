import React from 'react';
import imge from '../../assets/404.webp'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='bg-white w-full h-[100vh]'>
            <div>
                <img className='w-[600px] block mx-auto pt-24 md:h-[600px]' src={imge} alt="" />
                <button className="text-center block mx-auto bg-[#7bd5f6cf] px-6 py-3 rounded-md text-black"><Link to="/">Go to home</Link></button>
            </div>
            
        </div>
    );
};

export default Error;