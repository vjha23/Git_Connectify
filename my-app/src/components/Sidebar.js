import React from 'react'
import '../Css/sidebar.css'
import SidebarComponent from './SidebarComponent'
import { Avatar } from '@material-ui/core';
import SecurityIcon from '@material-ui/icons/Security';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import MovieIcon from '@material-ui/icons/Movie';
import StarIcon from '@material-ui/icons/Star';
import EventIcon from '@material-ui/icons/Event';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import MessageIcon from '@material-ui/icons/Message';
function Sidebar() {
    return (
        <div className='sidebar'>
            <div>
                <SidebarComponent Icon={Avatar} title={'Vijay Jha'} />
                <SidebarComponent Icon={SecurityIcon} title={'Covid-19 Information Center'} />
                <SidebarComponent Icon={PeopleAltIcon} title={'Friends'} />
                <SidebarComponent Icon={BookmarkIcon} title={'Saved'} />
                <SidebarComponent Icon={MovieIcon} title={'Watch'} />
                <SidebarComponent Icon={StarIcon} title={'Favorites'} />
                <SidebarComponent Icon={EventIcon} title={'Events'} />
                <SidebarComponent Icon={GroupAddIcon} title={'Groups'} />
                <SidebarComponent Icon={MessageIcon} title={'Messages'} />

            </div>
        </div>
    )
}

export default Sidebar
