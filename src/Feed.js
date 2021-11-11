import React from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'

function Feed() {
    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender  />
            <Post
            profilePic= "./images/Osinachi1.png" 
            image="./images/youtube.png"
            username="Osinachi"
            timestamp="timestamp"
            message="this is great"
            
            
            />
            <Post/>
            <Post/>


        </div>
    )
}

export default Feed
