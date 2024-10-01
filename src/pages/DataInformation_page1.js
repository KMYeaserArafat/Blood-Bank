import React from 'react'
import '../pages/DataInformation_page1.css'
import NavBar2 from '../compoments/NavBar2'
import Btn_Data_Crud from '../compoments/Btn_Data_Crud'
import Blood_Card_Picture from '../resources/bloodCardBackground.jpg';
import ContactInformationLogo from '../resources/contact_Information_logo.png';  
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import login_error from '../resources/login_error.png'; 
import Button from 'react-bootstrap/Button'; 

const DataInformation_page1 = () => {
  
  const navigate = useNavigate(); 
  const location = useLocation(); 
  const stateLoginInfo = location.state; 



  const onBtnBlood=()=>{
   navigate('/InsertBloodInformation');
 }
 
 const onBtnContactInformation=()=>{
   navigate('/InsertUserInformation'); 
 }

 const onLoginBtnHandler=()=>{
     navigate('/login'); 
 }

 const onHomeBtnHandler=()=>{
    navigate('/'); 
 }

  return (
    <div id='data-formation-page-body'>
      {!stateLoginInfo?.profileName ? 
      (<div>
        <h1 id='login-failed-message'>Please login Your Account at first, Thanks</h1>
        <img src={login_error} id='login-error-pic' />
        <Button id="btn-login" onClick={onLoginBtnHandler}>🔐 Login Account</Button>
        <Button id="btn-Registration" onClick={onHomeBtnHandler}>🏠︎ Home </Button>
      </div>
      ) :(
        <>
         <NavBar2/>
         <div id="card-organize">
          <div id="Card-1">
            <Btn_Data_Crud photo={Blood_Card_Picture} 
                         title="Blood Information" description={"Donate your blood save life"}
                         btnName={"Click Here"} 
                         onBtnHandle={onBtnBlood}/>
          </div>
  
          <div id="Card-2">
            <Btn_Data_Crud photo={ContactInformationLogo} 
                         title={"Contact Information"} 
                         description={"Contact people, Save life"}
                         btnName={"Click Here"} 
                         onBtnHandle={onBtnContactInformation}/>
          </div>
         
         </div>
        </>
      )
      }


   </div>
  )
}

export default DataInformation_page1
