import React from 'react'
import './mail.css'
import { selectUserDescription, selectUserEmail, selectUserReference } from '../features/UserLoginSlice';
import { useSelector } from 'react-redux';

function Mail() {
    const email=useSelector(selectUserEmail);
    const description=useSelector(selectUserDescription);
    const reference=useSelector(selectUserReference);
    
    
    return (
        <div className="mail">
            <div className="mail_heading">
                <strong className="title">{reference}</strong>
                <h3>{email}</h3>
            </div>
            <div className="mail_desc">
               <p> {description}</p>
            </div>
            <h3>date</h3>
            
        </div>
    )
}

export default Mail
