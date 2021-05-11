import React from 'react'
import '../Css/sidebar.css'


function SidebarComponent({ Icon, title }) {
    return (
        <div className='sidebarOption'>
            <Icon />
            <div className='sidebartitle'>
                <h3>{title}</h3>
            </div>
        </div>
    )
}

export default SidebarComponent
