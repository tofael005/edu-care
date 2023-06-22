import React from 'react';
import NavBar from '../Header/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';

const Root = () => {
    return (
        <div>
            <NavBar />
            <div className=" md:min-h-[calc(100vh-100px)]">
                <Outlet />
            </div>
            <div className="bg-sky-100">
                <Footer />
            </div>
        </div>
    );
};

export default Root;

