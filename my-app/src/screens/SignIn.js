import React, { useState, useEffect } from 'react'
import '../Css/signIn.css'
import { Link, useHistory } from 'react-router-dom'




function SignIn(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let history = useHistory();

    const PostData = (e) => {
        e.preventDefault();
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {

            return
        }
        fetch("/signin", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                password,
                email
            })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    console.log(data.error);
                } else {
                    localStorage.setItem('jwt', data.token)
                    localStorage.setItem('user', JSON.stringify(data.user))
                    history.push('/')
                }
            })

    }



    return (

        <div className='signin_Container'>

            <div className='signInLeft'>
                <div className='imageContainer'>
                    <img src='https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8c29jaWFsfGVufDB8MXwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
                        alt='image'
                        className='imageSocial' />
                </div>
            </div>

            <div className='signIn_Right'>
                <div className='rightContainer'>
                    <div >
                        <h1 className='header_Title'>Connectify</h1>
                    </div>
                    <div className='formCard'>
                        <form onSubmit={PostData}>
                            <div className='formElement'>
                                <p>Email Address</p>
                                <input
                                    type='email'
                                    value={email}
                                    className='inputContainer'
                                    placeholder='Enter Email'
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div className='formElement2'>
                                <p>Password</p>
                                <input
                                    type='password'
                                    value={password}
                                    className='inputContainer'
                                    placeholder='Enter Password'
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>

                            <div>
                                <button className='buttonContainer'>Sign In</button>
                            </div>
                            <div className='signinfooter'>
                                <Link to='/signup'>
                                    <p className='register_footer'>Dont have Account? Register Here</p>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SignIn
