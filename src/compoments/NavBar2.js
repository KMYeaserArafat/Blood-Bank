import React from 'react'
import logo from "../resources/blood_Icon.png";
import './NavBar.css'; 
import { NavLink } from 'react-router-dom';
import Profile from '../compoments/Profile';

const NavBar2 = () => {
  return (
    <div>
       <div>
        <div id='nav-div'>
            <h1 id='nav-title'>Blood Bank</h1>
            <img id="nav-logo" src={logo} alt="logo"></img>
            <nav id='nav-bar'>
                <NavLink to='/' className="Nav-link">Home</NavLink>
                <NavLink to='/login' className={"Nav-link"}>Logout</NavLink>
                <Profile/>
            </nav>
        </div> 
    </div>
    </div>
  )
}

export default NavBar2
