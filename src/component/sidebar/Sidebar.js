import React from 'react'
import './Sidebar.css';
import SidebarRow from '../sidebarrow/SidebarRow';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import SubscriptionsSharpIcon from '@mui/icons-material/SubscriptionsSharp';
import WhatshotSharpIcon from '@mui/icons-material/WhatshotSharp';
import VideoLibrarySharpIcon from '@mui/icons-material/VideoLibrarySharp';
import HistorySharpIcon from '@mui/icons-material/HistorySharp';
import OndemandVideoSharpIcon from '@mui/icons-material/OndemandVideoSharp';
import WatchLaterSharpIcon from '@mui/icons-material/WatchLaterSharp';
import ThumbUpSharpIcon from '@mui/icons-material/ThumbUpSharp';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';


function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarRow selected Icon={HomeSharpIcon} title="Home" />
            <SidebarRow Icon={WhatshotSharpIcon} title="Trending" />
            <SidebarRow Icon={SubscriptionsSharpIcon} title="Subscription" />
            <hr />
            <SidebarRow Icon={VideoLibrarySharpIcon} title="Library" />
            <SidebarRow Icon={HistorySharpIcon} title="History" />
            <SidebarRow Icon={OndemandVideoSharpIcon} title="Your videos" />
            <SidebarRow Icon={WatchLaterSharpIcon} title="Watch Later" />
            <SidebarRow Icon={ThumbUpSharpIcon} title="Liked videos" />
            <SidebarRow Icon={ExpandMoreSharpIcon} title="Show more" />
            <hr />
        </div>
    )
}

export default Sidebar