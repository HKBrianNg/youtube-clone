import React from 'react';
import Navbar from '../../component/navbar/Navbar';
import HomeContent from '../../component/homecontent/HomeContent';
import Sidebar from '../../component/sidebar/Sidebar';
import './HomePage.css';

function HomePage() {
    return (
        <>
            <Navbar />
            <main className='homePage'>
                <Sidebar />
                <HomeContent />
            </main>
        </>
    )
}

export default HomePage