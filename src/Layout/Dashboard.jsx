import React from 'react';

import { Outlet } from 'react-router-dom';
import Sidebar from '../Dashboard/SidBar';


const Dashboard = () => {
    return (
        <main className="grid grid-cols-dashboard-md">
            <Sidebar />
            <main className="md:absolute left-dashboard-md md:w-dashboard-body h-full bg-[#F3F3F3] ">
                <div className="w-[95%] px-3 mx-auto">
                    <Outlet />
                </div>
            </main>
        </main>
    );
};

export default Dashboard;