import React from 'react'
import './bloodInfo_Card.css'; 

const BloodInfo_Card = ({img,name, bloodGroup, Address, Mobile}) => {
    console.log(img);
  return (
      <div id='bloodInfo-card-body'>
      <img id='user-img' src={img} alt='hello' />
      <p id='donator-name'>Donator Name : {name}</p>
      <p id='blood-Group'>🩸BloodGroup : {bloodGroup}</p>
      <p id='address'>🗺️ Address : {Address}</p>
      <p id='mobile'>☎️ Mobile : {Mobile}</p>
    </div>
  )
}

export default BloodInfo_Card
