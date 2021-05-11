import React, { useContext } from 'react'
import '../Css/navbar.css'
import SearchIcon from '@material-ui/icons/Search';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import { IconButton, Avatar } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import { Link, useHistory } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { UserContext } from '../App'

function Navbar() {
    const { state, dispatch } = useContext(UserContext)
    const history = useHistory()
    return (
        <div className='navbar'>
            <div className='navbar__Content'>
                <div className='nav__left'>
                    <EmojiPeopleIcon fontSize='large' />
                    <h2>Connectify</h2>
                </div>

                <div className='IconContainer'>
                    <div className='iconControl'>
                        <div>
                            <Link to='/'><HomeIcon style={{ fontSize: '35px' }} /></Link>
                        </div>
                        <div>
                            <PeopleAltIcon style={{ fontSize: '35px' }} />
                        </div>
                        <div>
                            <Link to='/profile'><PermMediaIcon style={{ fontSize: '35px' }} /></Link>
                        </div>
                        <div>
                            <Avatar />
                        </div>


                    </div>
                </div>

                <div className='navbar__InputContainer'>
                    <SearchIcon />
                    <input placeholder='Search Connectify' />
                </div>

                <div className='logoutContainer'>
                    <IconButton onClick={() => {
                        localStorage.clear()
                        dispatch({ type: "CLEAR" })
                        history.push('/signin')
                    }}>
                        <ExitToAppIcon style={{ fontSize: '70px !important' }} />
                    </IconButton>

                </div>
            </div>
        </div>
    )
}

export default Navbar
