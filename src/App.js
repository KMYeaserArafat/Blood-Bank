import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/HomePage";
import BloodInfoPage from "./pages/BloodInfoPage"; 
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage"; 
import RegisterPage from "./pages/RegisterPage"; 
import DataInformation_page1 from "./pages/DataInformation_page1";
import InsertBloodInformation from "./pages/InsertBloodInformation";
import InsertUserInformation from "./pages/InsertUserInformation";


function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/bloodinfo" element={<BloodInfoPage/>}/>
          <Route path="/contactPage" element={<ContactPage/>}/>
          <Route path="/login" element={<RegisterPage/>} />
          <Route path="/registration1" element={<DataInformation_page1/>} />
          <Route path="/InsertBloodInformation" element={<InsertBloodInformation/>}/>
          <Route path="/InsertUserInformation" element={<InsertUserInformation/>} />

          <Route path="*" element={<ErrorPage/>} />
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;