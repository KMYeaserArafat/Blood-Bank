import React, { useEffect, useState } from 'react'
import NavBar from '../compoments/NavBar'; 
import '../pages/RegisterPage.css'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const url = "http://localhost:3002/Users"; 

const RegisterPage = () => {
  const [user,setUser] = useState([]);
  const [userID, setUserID] = useState(); 
  const [password, setPassword] = useState(); 
  const [showPassword, setShowPassword] = useState(false); 
  const [isVisibleLoginForm, setVisibleLoginForm] = useState(true); 
  const [isVisibleRegistration, setVisibleRegistration] = useState(false); 

 

  // Data featching phrase,
  const featchData=async(url)=>{
    try{
      const response = await fetch(url); 
      const data = await response.json();
      setUser(data); 
      console.log(user);
    }
    catch(err){
       console.log(err.message)
    }
  }

 useEffect(()=>{
  featchData(url);
 }); 

  const onVisiblePasswordHandler=()=>{
    setShowPassword(!showPassword); 
  }

  const visibleHandler=()=>{
     setVisibleLoginForm(false); 
     setVisibleRegistration(true); 
  }

  const isVisibleRegistrationForm=()=>{
    setVisibleLoginForm(true); 
    setVisibleRegistration(false);
  }

  const userIdValue=(e)=>{
     setUserID(e.target.value); 
  }

  const passwordValue=(e)=>{
     setPassword(e.target.value); 
  }

  const loginHandler = (e) => {
    e.preventDefault();

    let userFound = false;

    for (let i = 0; i < user.length; i++) {
      if (userID === user[i].Email && password === user[i].Password) {
        toast.success("Successfully Login")
        userFound = true;
        setTimeout(() => {
         window.location.href = "/registration1";// Navigate to another page
        }, 2000);
        break; 
      }
    }
  
    if (!userFound) {
      toast.error("User Not Found!!");
    }
  };


  // REGISTRATION PART -> 
  // For Registration, 
  // Hook, 
  const [name, setName] = useState(); 
  const [email, setEmail] = useState(); 
  const [mobile, setMobile] = useState(); 
  const [userPassword, setUserPassword] = useState(); 
  const [confirmPassword, setConfirmPassword] = useState(); 


  // Step 1: Validation
  const generateUniqueId = () => Math.random().toString(36).substr(2, 5); 

const InsertData = async (url) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: generateUniqueId(), 
        name: name,
        Email: email,
        Mobile: mobile,
        Password: userPassword
      }),
    });

    if (response.ok) {
      toast.success("Successfully Registered");
      // Clear the form fields
      setName('');
      setEmail('');
      setMobile('');
      setUserPassword('');
      setConfirmPassword('');
    } else {
      toast.error("Failed to Register");
    }
  } catch (err) {
    toast.error("Registration Failed: " + err.message);
  }
};



  const onRegisterHandler = (e) => {
    e.preventDefault();
  
    // Define regular expressions
    const NameRule = /^[a-zA-Z]+$/;
    const EmailRule = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const MobileRule = /^[0-9]{11}$/;

  
    try {
      if (!NameRule.test(name)) {
        toast.error("Name is Invalid");
      } else if (!EmailRule.test(email)) {
        toast.error("Email is Invalid");
      } else if (!MobileRule.test(mobile)) {
        toast.error("Mobile Number is Invalid!");
      } else if (userPassword.length !== 8) {
        toast.error("Password must be at least 8 characters long");
      } else if (userPassword !== confirmPassword) {
        toast.error("Passwords do not match");
      } else {
        // Successfully Register, 
        InsertData(url); 
        window.location.href = "/register";
        setVisibleRegistration(false); 
        setVisibleLoginForm(true); 
      }
    } catch (err) {
      toast.error("An error occurred: " + err.message);
    }
  };
  
  
  
  

  return (
    <div id="register-page-body">
      <NavBar />
      <ToastContainer position="top-center"/>

      {isVisibleLoginForm && ( <form onSubmit={loginHandler} id='login-form'> 
         <h1 id='login-title'>Login </h1>
         <label id='label-user-Id'>Enter User ID : </label>
         <input type='text' name="userID" id='user-Id' value={userID} onChange={userIdValue} required />
         <label id='label-password'>Password : </label>
         <input type={showPassword? 'text' : 'password'} name='password' id='password' value={password} onChange={passwordValue} required />
         <div id='show-password-div'>
            <input type="checkbox" id="show-password" name="show-password" onChange={onVisiblePasswordHandler} />
            <label id='show-password-label'>Show Password</label>
         </div>
         <div id='registration-link'>
          <label id='new-register-link'>You haven't any Account?</label>
          <a href='#' id='visible-register' onClick={visibleHandler}>Register</a>
         </div>
         <button id='btn-login'>Login</button>  
      </form>)}
      
      {/* REGISTRATION  */}
      {isVisibleRegistration && ( 
        <form id='registration-form' onSubmit={onRegisterHandler}>
        <label id='registration-form-title'>Registration</label>

        <label id='label-name'>Enter your Name : </label>
        <input type='text' name="name" id='name-field' value={name} onChange={(e)=> setName(e.target.value)} required/>

        <label id='label-email'>Email : </label>
        <input type='text' name='email' id='email-field' value={email} onChange={(e)=> setEmail(e.target.value)} required/>

        <label id='label-mobile'>Mobile : </label>
        <input type='text' name='mobile' id="mobile" value={mobile} onChange={(e)=> setMobile(e.target.value)} required/>

        <label id='label-password'>Password</label>
        <input type='text' name='password' id='password' value={userPassword} onChange={(e)=> setUserPassword(e.target.value)} required/>

        <label id='label-confirm-password'> Confirm Password</label>
        <input type='password' name='confirm-password' id='confirm-password' value={confirmPassword} 
          onChange={(e)=>setConfirmPassword(e.target.value)} required/>

        <div id='login-visible-div'>
           <label id='login-link'>If you have already an account? </label>
           <a href='#' id='login-visible' onClick={isVisibleRegistrationForm}>Login</a>
        </div>
        <button id='btn-register'>Register</button>
      </form>)}
     
     
    </div>
  )
}

export default RegisterPage
