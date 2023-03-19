import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../Firebase/Firebase';

export const Privatepage = ({children}) => {
    const [user] = useAuthState(auth);
    let location = useLocation();
    if(user && user.uid){
       return children
    }
   return <Navigate to="/login" state={{ from: location }} replace></Navigate>
}
