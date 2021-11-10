import React from 'react'
import './header.css'
import {Avatar} from '@material-ui/core'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import {NavLink}  from 'react-router-dom'
function Header() {
    return (
        <div className="header">
            
            <div className="header_left">
                <NavLink to='/'><h1>Enquiry</h1></NavLink>
            </div>
            <div className="header_right">

                <NotificationsIcon className="icon"/>
                <LanguageRoundedIcon className="icon"/>
                <SettingsIcon className="icon"/>
                <NavLink to='/Account' ><Avatar className="icon"/></NavLink>

            </div>
        </div>
    )
}

export default Header
