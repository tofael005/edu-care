import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../Pages/Home/Loader';
import { useAuth } from '../Pages/auth/AuthProvider';


const Private = ({ children }) => {
    const { loading, user } = useAuth()
    const location = useLocation();
    if (loading) {
        return <Loader/>
    }
    if (user) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default Private;