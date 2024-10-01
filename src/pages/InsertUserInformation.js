import React from 'react'
import './InsertUserInformation.css';

const InsertUserInformation = () => {

  return (
    <div id="Insert-User-Info-Body">

      <form>
         <h1 id="Insert-User-Info-title">Insert User Information</h1>
         
         <label>Name : </label>
         <input type='text' name='name' />

         <label>Area : </label>
         <textarea name='area' />

         <label>Phone : </label>
         <input type="text" name='phone'/>

         <label>Email : </label>
         <input type='text' name='email' />

         <button id='btn-Reset'>Reset</button>
         <button id='btn-Insert'>Insert</button>
         <button id='btn-Contact'>Show All Contact</button>
      </form>
       
    </div>
  )
}

export default InsertUserInformation
