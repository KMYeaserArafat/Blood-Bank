import React, {useState} from 'react'
import { useLocation } from 'react-router-dom'
import './Profile.css'; 

const Profile = () => {

  const [visibleProfileData, setVisibleProfileData] = useState(false); 
  const location = useLocation(); 
  const profileState = location.state; 

  const MouseEnter=()=>{
    setVisibleProfileData(true); 
  }

  const MouseLeave=()=>{
   setVisibleProfileData(false); 
  }

  return (
    <div id='profile-Data-Div'>
       <h2 onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} id="profile-title">Welcome, {profileState?.profileName}</h2>
       {visibleProfileData && 
         <div id='profile-Data'>
            <h1 id='profile-Email'>Email  : {profileState?.profileEmail} </h1>
            <h1 id='profile-Mobile'>Mobile : {profileState?.profileMobile}</h1>
         </div>
       }
    </div>
  )
}

export default Profile
