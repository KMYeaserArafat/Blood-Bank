import React from 'react'; 
import './Btn_Data_Card.css'; 
import {Card,Button} from 'react-bootstrap';
 

const Btn_Data_Crud = ({title,description,photo,btnName,onBtnHandle}) => {
  
  const btnHandler=()=>{
     onBtnHandle(); 
  }
  
  return (
    <div className="card-body">
      <Card id='total-card'>
      <Card.Img variant="top" src={photo} id='card-img' />
      <Card.Body>
        <Card.Title id="card-title">{title}</Card.Title>
        <Card.Text id="card-description">{description}</Card.Text>
        <Button variant="primary" id="btn-card" onClick={btnHandler}>{btnName}</Button>
      </Card.Body>
      </Card>
      </div>
  )
}

export default Btn_Data_Crud
