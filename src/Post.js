import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import NearMeIcon from "@material-ui/icons/NearMe";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined";


function Post({profilePic, image, username, timestamp, message}) {
    return (
        <div className="post">
            <div className="post__top">
               <Avatar src={profilePic}
               className="post__avatar"
               /> 
               <div className="post__topInfo">
                   <h3>{username}</h3>
                   <p>Timestamp...</p>
               </div>
            </div>
            <div className="post__bottom">
                   <p>{message}</p>
            </div>

            <div className="post__image">
                <img src={image} alt= "imageoo"/>
            </div>
            <div className="post__options">

                <div className="post__option">
                    <ThumbUpIcon/>

                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineIcon/>

                    <p>Like</p>
                </div>
                <div className="post__option">
                    <NearMeIcon/>

                    <p>Like</p>
                </div>
                <div className="post__option">
                    <AccountCircleIcon/>
                    <ExpandMoreOutlined/>

                    <p>Like</p>
                </div>
            </div>

        </div>
    )
}

export default Post
