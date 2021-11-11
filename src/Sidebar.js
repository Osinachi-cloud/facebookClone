import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import StorefrontIcon from "@material-ui/icons/Storefront";
import PeopleIcon from "@material-ui/icons/People";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import ChatIcon from "@material-ui/icons/Chat";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
function Sidebar( ) {
    return (
        <div className="sidebar">
            <SidebarRow src="./images/Osinachi1.png" title="Ogbodo Osinachi"/>
            <SidebarRow Icon={LocalHospitalIcon} title="friends"
            />
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
            <SidebarRow Icon={PeopleIcon} title="Friens"/>
            <SidebarRow Icon={ChatIcon} title="Messanger"/>
            <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
            <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
            <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace"/>

            
            <SidebarRow title=""/>

           

        </div>
    )
}

export default Sidebar
