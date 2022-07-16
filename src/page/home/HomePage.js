import React from 'react';
import Navbar from '../../component/navbar/Navbar';
import HomeContent from '../../component/homecontent/HomeContent';
import Sidebar from '../../component/sidebar/Sidebar';
import './HomePage.css';

function HomePage() {
    return (
        <>
            <Navbar />
            <div className='homePage'>
                <Sidebar />
                <HomeContent />
            </div>
        </>
    )
}

export default HomePage