import React from 'react'
import navlogo from '../../assets/logo.png';
import navprofile from '../../assets/nav-profile.png';
import './navbar.css';
const navbar=()=>{
  return (
    <>
       <div className="navbar">
        <img src={navlogo} className="nav-logo"alt="" />
        <img src={navprofile} className="nav-profile" alt="" />
       </div>
    </>
  )
}

export default navbar