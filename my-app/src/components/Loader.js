import React from 'react'

function Loader() {
    return (
        <div>
            <div className='ui segment'>
                <div className='ui active dimmer'>
                    <div className='ui small text loader'>Loading</div>
                </div>
            </div>
        </div>
    )
}

export default Loader
