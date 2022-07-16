import React from 'react';
import { Outlet } from 'react-router-dom';
import './AuthPage.css';

function AuthPage() {
    return (
        <div className='auth'>
            you are in auth page
            <Outlet />
        </div>
    )
}

export default AuthPage;