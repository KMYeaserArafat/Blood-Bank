import React from 'react'
import { NavLink } from 'react-router-dom';
import "../compoments/NavBar.css"; 
import logo from "../resources/blood_Icon.png"; 

const NavBar = () => {
  return (
    <div>
        <div id='nav-div'>
            <h1 id='nav-title'>Blood Bank</h1>
            <img id="nav-logo" src={logo} alt="logo"></img>
            <nav id='nav-bar'>
                <NavLink to='/' className="Nav-link">Home</NavLink>
                <NavLink to='/bloodinfo' className="Nav-link">Blood Information</NavLink>
                <NavLink to='/contactPage' className={"Nav-link"}>Contact</NavLink>
                <NavLink to='/register' className={"Nav-link"}>Register</NavLink>
            </nav>
        </div>
    </div>
  )
}

export default NavBar
