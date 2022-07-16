import React from 'react';
import Navbar from '../../component/navbar/Navbar';
import Sidebar from '../../component/sidebar/Sidebar';
import SearchContent from '../../component/searchcontent/SearchContent';
import './SearchPage.css';

function SearchPage() {
    return (
        <>
            <Navbar />
            <main className='searchPage'>
                <Sidebar />
                <SearchContent />
            </main>
        </>
    )
}

export default SearchPage