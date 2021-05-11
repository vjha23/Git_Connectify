import React, { useState, useEffect } from 'react'
import '../Css/userPost.css'
import { IconButton, Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

function UserPosts({ name, caption, imageUrl }) {

    return (

        <div className='userPosts'>
            <div className='userScreen'>
                <div>
                    <div className='userDetail'>
                        <IconButton>
                            <Avatar />
                        </IconButton>

                        <div>
                            <h3>{name}</h3>
                        </div>
                    </div>
                    <div className='captions'>
                        <h5>{caption}</h5>
                    </div>

                </div>
                <div className='imageContainer'>
                    <div >
                        <img src={imageUrl} alt='image' className='userImage' />
                    </div>
                </div>
                <div className='likesContainer'>
                    <div className='likeInfo'>
                        <div className='likes1'><p>168 Likes</p></div>
                        <div className='likes1'><p>57 comments</p></div>
                    </div>
                    <div className='commentSection'>
                        <IconButton>
                            <ThumbUpIcon fontSize='large' />
                        </IconButton>
                        <div className='comment'>
                            <input placeholder='Write a comment... ' />
                        </div>
                        <div>
                            <IconButton>
                                <button className='buttonPost'>Post</button>
                            </IconButton>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserPosts
