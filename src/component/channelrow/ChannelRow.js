import React from 'react';
import './ChannelRow.css';
import Avatar from '@mui/material/Avatar';
import VerifiedUserSharpIcon from '@mui/icons-material/VerifiedUserSharp';

function ChannelRow({ image, Channel, verified, subs, noOfVideos, description }) {

    return (
        <div className='channelRow'>
            <Avatar className='channelRow__logo' src={image} alt={Channel}></Avatar>
            <div className='channelRow__text'>
                <h4>{Channel} {verified && <VerifiedUserSharpIcon />}</h4>
                <p>{subs} subscribers . {noOfVideos} videos </p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow