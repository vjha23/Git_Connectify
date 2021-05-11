import React, { useEffect, useState } from 'react'
import '../Css/posts.css'
import { IconButton, Avatar } from '@material-ui/core';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import UserPosts from './UserPosts';
import { Link } from 'react-router-dom';

const ActivityScreen = ({ Icon, title }) => {
    return (
        <div className='activity__Item'>
            <Icon fontSize='large' />
            <Link to={'/upload'}><h3>{title}</h3></Link>

        </div>
    )
}

function PostScreen() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('/allpost', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
            .then(result => {
                console.log(result)
                setData(result.posts)
            })
        console.log(data)
    }, [])
    return (
        <div className='posts'>
            <div className='posts__container'>
                <div className='user__thoughts'>
                    <IconButton className='iconbutton'>
                        <Avatar fontSize='large' />
                    </IconButton>
                    <input placeholder="Whats's On your Mind?" />
                </div>
                <div className='activity__Container'>
                    <ActivityScreen Icon={VideoCallIcon} title={'Live Video'} />
                    <ActivityScreen Icon={PermMediaIcon} title={'Photo/Video'} />
                    <ActivityScreen Icon={InsertEmoticonIcon} title={'Feeling/Activity'} />
                </div>
            </div>
            {data.map((post) => (
                <UserPosts key={post.id} name={post.postedBy.name} caption={post.body} imageUrl={post.photo} />
            ))}
        </div>
    )
}

export default PostScreen
