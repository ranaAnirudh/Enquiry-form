import React from 'react'
import '../App.css';   
import Sidebar from '../sidebar/Sidebar';
import Body from '../body/Body';


function Dashboard() {
    return (
        <div className="app_body">
          <Sidebar/>
          <Body/>
        </div>
    )
}

export default Dashboard
