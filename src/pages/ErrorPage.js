import React from 'react'
import "./ErrorPage.css"; 
import ErrorPic from "../resources/error.png"; 
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


const ErrorPage = () => {
  const navigator = useNavigate();
  return (
    <div id='error-page-body'>
       <h1 class='title title-1'>404</h1>
       <h2 class='title'>Page is not found!</h2>
       <img src={ErrorPic} alt='error-pic' id='error-pic'></img>
       <br></br>
       <Button variant="dark" id="btn-back" onClick={()=>navigator('/')}>🛖 Back Home</Button>
    </div>
  )
}

export default ErrorPage
