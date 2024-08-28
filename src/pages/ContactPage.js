import React, {useState} from 'react'; 
import './ContactPage.css'; 
import NavBar from "../compoments/NavBar"; 
import contact_logo from '../resources/contact-information.png'; 
import ContactInfoData from "../dataBase/contactInfo.json";
import ContactCard from '../compoments/ContactCard';
import Search from '../compoments/Search';


const ContactPage = () => {
  const [contactData,setContactData] = useState(ContactInfoData); 

  const onSearchHandler = (searchTerm) => {
    const trimmedTerm = searchTerm.trim().toLowerCase();
    if (trimmedTerm ==='') {
      setContactData(ContactInfoData);
    } else {
      const filteredData = ContactInfoData.filter(contact => 
        contact.Area.toLowerCase().includes(trimmedTerm)
      );
      setContactData(filteredData);
    }
  }


  return (
    <div id="page-body">
      <NavBar/>
      <div id='heading-div'>
          <img src={contact_logo} alt='contact-logo' id='contact-logo'></img>
          <h1 id='title'>Contact Information </h1>
      </div>
      <Search onSearchHandler={onSearchHandler} searchTitle={"Search Area "}/>
      <br></br>
      {contactData.map((cData)=> { 
        return ( <ContactCard name={cData.name} Area={cData.Area} phone={cData.phone} email={cData.email} />)

      })}

      
    </div>
  )
}

export default ContactPage
