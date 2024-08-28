import React, { useState,useEffect } from 'react'
import NavBar from "../compoments/NavBar";
import './BloodInfoPage.css'; 
import SlideBar from '../compoments/Slide'; 
import Search from '../compoments/Search'; 
import BloodInfo_Card from '../compoments/BloodInfo_Card';
import pic from "../resources/user.png";


// Pictures, 
import picture1 from '../resources/slidePicture1.png'; 
import picture2 from '../resources/slidePicture2.png'; 
import picture3 from '../resources/slidePicture3.png'; 



const BloodInfoPage = () => {
  const [bloodInfo,setBloodInfo] = useState([]);
  const [isLoading,setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  const url = "http://localhost:3001/Blood_Information"; 
  
  const FeatchData = async(url)=>{
     setLoading(true); 
     try{
      const response = await fetch(url); 
      const data = await response.json();
      setBloodInfo(data); 
      setLoading(false); 
      setError(null); 
      console.log(data); 
     }catch(err){
      setError(err.message); 
      setLoading(false); 
     }
  }

  useEffect(()=>{
    setTimeout(()=>{
      FeatchData(url);
    },1000)

  },[])
  
  const loadingMessage = <h1 id="Loading_Message">Data is Loading...</h1>
  const errorMessage = <h1 id="Error_Message">{error}</h1>  

  const onSearchHandler = (searchData) => {
    const trimData = searchData.trim().toLowerCase(); 
    if(trimData===''){
      FeatchData(url); 
    }else{
      const filterSearchData = bloodInfo.filter(bloodData=> bloodData.bloodGroup.toLowerCase().includes(trimData)); 

      setBloodInfo(filterSearchData); 
    }
  }
  

  return (
    <div id="blood-info-page-body">
      <NavBar/>
      <SlideBar picture1={picture1} picture2={picture2} picture3={picture3}/>
      <Search onSearchHandler={onSearchHandler} searchTitle={"Search Blood"}/>
      {isLoading && loadingMessage}
      {error && errorMessage}
      {bloodInfo.map((data)=> (
        <BloodInfo_Card img={pic} name={data.Name} bloodGroup={data.bloodGroup} Address={data.Address} Mobile={data.Mobile}/>))}
    </div>
  )
}

export default BloodInfoPage
