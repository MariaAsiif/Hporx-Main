import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MainWrapper from '../components/Admin/Layout/MainWrapper';

const AuthProvider = () => {


    const RequireAuth = ({ children }) => {
        const token = useSelector((state) => state.userAuth.loginInfo.token);
        let location = useLocation();
        if (token !== null) {
            return <Navigate to="/adminsignin" state={{ from: location }} replace />;
        }
        return children;
    };
    return (
        <RequireAuth>
            <MainWrapper />
        </RequireAuth>
    )
}

export default AuthProvider