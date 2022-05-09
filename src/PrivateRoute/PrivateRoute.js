import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../Firebase/Firebase.init';
import Spinner from '../Spinner/Spinner';

const PrivateRoute = ({ children }) => {

    const [user, loading] = useAuthState(auth);

    let location = useLocation();
    if (loading) {
        <Spinner></Spinner>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }

    return children;


};

export default PrivateRoute;