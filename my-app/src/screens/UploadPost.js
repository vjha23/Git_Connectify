import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import '../Css/upload.css'
import Loader from '../components/Loader'



function UploadPost() {
    const history = useHistory()
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [image, setImage] = useState('')
    const [url, setUrl] = useState('')
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        if (url) {
            fetch('/createpost', {
                method: 'post',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("jwt")
                },
                body: JSON.stringify({
                    title,
                    body,
                    pic: url
                })
            }).then(res => res.json())
                .then(data => {
                    if (data.error) {
                        console.log(data.error);
                    }
                    else {
                        history.push('/')
                    }
                })
        }
    })

    const postDetails = () => {
        setLoading(true)
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "insta-clone")
        data.append("cloud_name", "drd911jry")
        fetch("https://api.cloudinary.com/v1_1/drd911jry/image/upload", {
            method: "post",
            body: data
        })
            .then(res => res.json())
            .then(data => {
                setUrl(data.url)
                console.log(data.url);
            })
            .catch(err => {
                console.log(err);
            })
    }


    return (
        <div className="ui card cardStyle">
            <div className="content">
                <form className='ui form'>
                    <div className='field'>
                        <label>Title</label>
                        <input
                            type='text'
                            placeholder='title'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className='field'>
                        <label>Caption</label>
                        <input
                            type='text'
                            placeholder='body'
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                        />
                    </div>

                    <div className='field'>
                        <label>Upload Image</label>
                        <input type="file" onChange={(e) => setImage(e.target.files[0])} />

                    </div>



                </form>
                {loading ? <Loader /> : null}
                <button className='ui button primary' onClick={() => postDetails()}>Submit</button>



            </div>
        </div>
    )
}

export default UploadPost
