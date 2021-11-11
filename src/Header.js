import React from 'react'
import './Header.css'
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import FlagIcon from "@material-ui/icons/Flag";
import Subscriptions from "@material-ui/icons/Subscriptions";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";

import VideoCall from "@material-ui/icons/VideoCall";
import Apps from "@material-ui/icons/Apps";
// import Avatar from "@material-ui/core/Avatar";
import {Avatar, IconButton}from "@material-ui/core";


function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="" alt="facebook-logo"/>
                <div className="header__input">
                    <SearchIcon/>
                    <input type="text" placeholder="S  earch Facebook"/>
                </div>
            </div>
            <div className="header__middle">

                <div className="header__option--active">
                    <HomeIcon fontSize="large"/>
                </div>

                <div className="header__option">
                    <FlagIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <Subscriptions fontSize="large"/>
                </div>
                <div className="header__option">
                    <StorefrontOutlinedIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon fontSize="large"/>
                </div>

                
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar />
                    <h4> Osinachi</h4>
                </div>

                <IconButton>
                    <AddIcon/>
                </IconButton>
                <IconButton>
                    <ForumIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon/>
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon/>
                </IconButton>
                
            </div>
            
        </div>
    )
}

export default Header
