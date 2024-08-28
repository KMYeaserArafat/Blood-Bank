import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../compoments/Slide.css';


const Slide = ({picture1, picture2, picture3}) => {
  return (
    <div id="slide-show">
      <Carousel>
            <Carousel.Item>
              <img src={picture1} alt='picture1' width="500" height="250"></img>
              <h1>Donate Blood 🩸</h1>
            </Carousel.Item>
             
            <Carousel.Item>
              <img src={picture2} alt='picture2' width="500" height="250"></img>
              <h1>Save Life</h1>
            </Carousel.Item>
      
            <Carousel.Item>
              <img src={picture3} alt='picture3'width="500" height="250"></img>
              <h1>Create Happiness 😊</h1>
            </Carousel.Item>
         </Carousel>
    </div>
  )
}

export default Slide
