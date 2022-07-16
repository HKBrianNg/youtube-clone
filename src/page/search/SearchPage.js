import React from 'react';
import Navbar from '../../component/navbar/Navbar';
import Sidebar from '../../component/sidebar/Sidebar';
import SearchContent from '../../component/searchcontent/SearchContent';


function SearchPage() {
    return (
        <>
            <Navbar />
            <div className='searchPage'>
                <Sidebar />
                <SearchContent />
            </div>
        </>
    )
}

export default SearchPage