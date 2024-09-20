import React from 'react'
import "./ContactCard.css";

const ContactCard = ({name,Area, phone, email}) => {
  return (
    <div id='contact-card-body'>
        <h1 id='area-title'>Area : {Area}</h1>
        <h2 id='card-person-name'>Responsible Person : {name}</h2>
        <h2 id='card-phone'>Phone Number : {phone}</h2>
        <h2 id='card-email'>Email : {email}</h2>
    </div>
  )
}

export default ContactCard
