import React from 'react'
import './sidebar.css'
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Mail from './Mail'
import { useSelector } from 'react-redux';
import { selectUserDescription, selectUserEmail, selectUserReference } from '../features/UserLoginSlice';


function Sidebar() {

    const email=useSelector(selectUserEmail);
    const description=useSelector(selectUserDescription);
    const reference=useSelector(selectUserReference);
    let mail;
    // const [state, setstate] = useState([]);
    if(email && description && reference){
        
        mail=<div className="sidebar_body"><Mail/></div>
        // setstate({mail:mail,...state});
    }

    return (
        <div className="sidebar">
            {/* <h1>SideBar</h1> */}
            <div className="sidebar_head">
                <h2 className="head_left">Mails</h2>
                <div className="head_right">
                    <SortIcon className="icon"/>
                    <FilterAltIcon className="icon"/>
                </div>
            </div>
            <div className="input_body">
                <input className="input"/>
                <SearchIcon className="icon"/>
            </div>
            
            <hr/>
            {mail}
        </div>
    )
}

export default Sidebar
