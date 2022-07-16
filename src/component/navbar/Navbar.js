import React, { useState } from 'react'
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import Avatar from '@mui/material/Avatar';
import brianng from '../../images/brianng.jpg';
import logo from '../../images/Youtubed.png';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    const [inputSearch, setInputSearch] = useState('');

    return (
        <div className='navbar'>
            <div className='navbar__left'>
                <MenuSharpIcon />
                <Link to='/'>
                    <img className='navbar__logo' src={logo} alt="" />
                </Link>
            </div>

            <div className='navbar__input'>
                <input type="text" placeholder='Search' onChange={e => setInputSearch(e.target.value)} value={inputSearch} />
                <Link to={`/search/${inputSearch}`}>
                    <SearchSharpIcon className='navbar__inputButton' />
                </Link>
            </div>

            <div className='navbar__icons'>
                <VideoCallSharpIcon className='navbar__icon' />
                <AppsSharpIcon className='navbar__icon' />
                <NotificationsSharpIcon className='navbar__icon' />
                <Avatar alt="Brian Ng" src={brianng} />
            </div>

        </div>
    )
}

export default Navbar