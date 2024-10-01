import React, { useEffect, useState } from 'react'; 
import './InsertBloodInformation.css'; 
import { ToastContainer, toast } from 'react-toastify';


const server_url = "http://localhost:3001/Blood_Information"; 


const InsertBloodInformation = () => {
  const [bloodOwnerName,setBloodOwnerName] = useState();
  const [bloodGroup, setBloodGroup] = useState();
  const [address, setAddress] = useState(); 
  const [mobileNumber, setMobileNumber] = useState(); 

  // custom Method, 
  const onResetHandler=()=>{
    setBloodOwnerName("");
    setBloodGroup("");
    setAddress(""); 
    setMobileNumber("");
  }


  const onProtalHandler=()=>{
    window.location.href = "/bloodinfo";
  }

  // Insert-Data, 
  const generateUniqueId = () => Math.random().toString(36).substr(2, 5); 

  const InsertBloodInformation = async (url) =>{
    try{
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Name: bloodOwnerName,
          bloodGroup: bloodGroup,
          Address: address,
          Mobile: mobileNumber,
          id: generateUniqueId() 
          
        }),
      });
  
      if (response.ok) {
        toast.success("Successfully Registered");
        onResetHandler();
      } else {
        toast.error("Failed to Register");
      }
    }catch(err){
      toast.error(err); 
    }
  }

  const onInsertHandler=(e)=>{
    e.preventDefault(); 
    InsertBloodInformation(server_url); 
  }


  return (
    <div id='InsertBodyInformation-body'>
      <ToastContainer position="top-center"/>


      <div id='Insert-form-body'>
        <h1 id='Insert-Blood-Info-Title'>Insert Blood Information</h1>
        <form>
         
          <label>Blood Owner Name : </label>
          <input type="text" name="bloodOwnerName" 
              class="Input-Field" 
              onChange={(e)=> setBloodOwnerName(e.target.value)} 
              value={bloodOwnerName} required/>

          <label>Select Blood Group : </label>
          <select id='blood-Group' onChange={(e)=> setBloodGroup(e.target.value)} value={bloodGroup}>
            <option class="bloodName">AB+</option>
            <option class="bloodName">AB-</option>
            <option class="bloodName">A+</option>
            <option class="bloodName">A-</option>
            <option class="bloodName">B+</option>
            <option class="bloodName">B-</option>
            <option class="bloodName">o+</option>
            <option class="bloodName">o-</option>
          </select>

         <label>Donar Address : </label>
          <textarea type="text" name='address' 
              onChange={(e)=> setAddress(e.target.value)} 
              value={address} required/>

         <label>Mobile Number : </label>
          <input type='text' name="mobileNumber" 
              class="Input-Field" 
              onChange={(e)=> setMobileNumber(e.target.value)}
              value={mobileNumber} required/>

          <button id='btn-Insert' onClick={onInsertHandler}>Insert</button>
          <button id='btn-Reset' onClick={onResetHandler}>Reset</button>
          <button id='btn-Blood-Information' onClick={onProtalHandler}>Show All Blood Information </button>
      </form>
      </div>
      
      
    </div>
  )
}

export default InsertBloodInformation

