import React from 'react'
import "./HomePage.css"; 

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import headPicture from '../resources/blood-test.png';
import { useNavigate } from 'react-router-dom';
import NavBar from "../compoments/NavBar";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div id='home-Page-div'>
      <NavBar/>
      <Container id="container">
      <Row>
        <Col>
          <h1 id="heading-title">Donate Blood,<br></br> Safe Life, <br></br>Create Happiness..</h1>
          <Button variant="outline-light" id="search-Btn" onClick={()=> navigate('/bloodinfo')}>Search Blood 🩸</Button>
        </Col>
        <Col>
           <img src={headPicture} alt='Headpic' id='head-pic' />
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default HomePage
