import React, { useState } from 'react'
import '../Css/signup.css'
import { Link } from 'react-router-dom'

function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmedPassword, setConfirmedPassword] = useState('')
    return (
        <div className='signup_Container'>
            <div className='signUpLeft'>
                <div className='signup_imageContainer'>
                    <img src='https://images.unsplash.com/photo-1519408469771-2586093c3f14?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHRlY2glMjB3YWxsYXBhcGVyfGVufDB8MXwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                        alt='image'
                        className='signup_image' />
                </div>
            </div>

            <div className='signUp_Right'>
                <div className='signup_rightContainer'>
                    <div >
                        <h1 className='header_Title'>Connectify</h1>
                    </div>
                    <div className='signup_formCard'>
                        <form>
                            <div className='signup_formElement'>
                                <p>Enter Name</p>
                                <input
                                    type='text'
                                    value={name}
                                    className='inputContainer'
                                    placeholder='Enter Name'
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div className='signup_formElement'>
                                <p>Email Address</p>
                                <input
                                    type='email'
                                    value={email}
                                    className='inputContainer'
                                    placeholder='Enter Email'
                                    onChange={(e) => setEmail(e.target.value)}
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
                                />
                            </div>

                            <div className='formElement2'>
                                <p>Confirmed Password</p>
                                <input
                                    type='Re-enter Password'
                                    value={confirmedPassword}
                                    className='inputContainer'
                                    placeholder='Enter Confirmed Password'
                                    onChange={(e) => setConfirmedPassword(e.target.value)}
                                />
                            </div>

                            <div>
                                <button className='signup_buttonContainer'>Sign In</button>
                            </div>
                            <div className='signupfooter'>
                                <Link to='/signin'>
                                    <p className='signin_footer'>Already have Account? Sign In Here</p>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp

