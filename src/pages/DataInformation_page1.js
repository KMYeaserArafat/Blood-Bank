import React from 'react'
import '../pages/DataInformation_page1.css'
import NavBar2 from '../compoments/NavBar2'
import Btn_Data_Crud from '../compoments/Btn_Data_Crud'
import Blood_Card_Picture from '../resources/bloodCardBackground.jpg';
import ContactInformationLogo from '../resources/contact_Information_logo.png';  

const onBtnBlood=()=>{
   alert("btn clicked-1"); 
}

const onBtnContactInformation=()=>{
  alert("btn clicked-2")
}

const DataInformation_page1 = () => {
  return (
    <div id='data-formation-page-body'>
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
    </div>
  )
}

export default DataInformation_page1
