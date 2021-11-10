import React from 'react'
import './body.css'
import Message from './Message.js'
import PersonIcon from '@mui/icons-material/Person';

function Body() {
    return (
        <div className="body">
            {/* <h1>BODY</h1> */}
            <div className="body_head">
                <div className="detail">
                    <h2>Network</h2>
                    <strong>1-02-2017</strong>
                </div>
                <div className="person">
                    <PersonIcon/>
                    <h3>Rishabh</h3>
                </div>
                
            </div>
                <div className="body_message">
                    <Message/>
                </div>

        </div>
    )
}

export default Body
