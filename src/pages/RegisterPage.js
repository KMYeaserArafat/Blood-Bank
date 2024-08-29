import React, { useState } from 'react'
import NavBar from '../compoments/NavBar'; 
import '../pages/RegisterPage.css'; 

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false); 
  const [isVisibleLoginForm, setVisibleLoginForm] = useState(true); 
  const [isVisibleRegistration, setVisibleRegistration] = useState(false); 

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

  return (
    <div id="register-page-body">
      <NavBar />
      {isVisibleLoginForm && ( <form id='login-form'> 
         <h1 id='login-title'>Login </h1>
         <label id='label-user-Id'>Enter User ID : </label>
         <input type='text' name="userID" id='user-Id' required />
         <label id='label-password'>Password : </label>
         <input type={showPassword? 'text' : 'password'} name='password' id='password' required />
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

      {isVisibleRegistration && ( 
        <form id='registration-form'>
        <label id='registration-form-title'>Registration</label>
        <label id='label-name'>Enter your Name : </label>
        <input type='text' name="name" id='name-field' />
        <label id='label-email'>Email : </label>
        <input type='text' name='email' id='email-field' />
        <label id='label-mobile'>Mobile : </label>
        <input type='text' name='mobile' id="mobile" />
        <label id='label-password'>Password</label>
        <input type='text' name='password' id='password' />
        <label id='label-confirm-password'> Confirm Password</label>
        <input type='password' name='confirm-password' id='confirm-password' />
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
