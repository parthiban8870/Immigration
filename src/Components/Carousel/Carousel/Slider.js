import {Carousel,Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import img1 from '../Carousel/images/img1.jpg'
import img2 from '../Carousel/images/img2.jpg'
import img3 from '../Carousel/images/img3.jpg'
import './Slider.css'

function UncontrolledExample() {
  return (
    
    <Carousel className='carousel'>
      <Carousel.Item>
        <Image src={img1} fluid style={{ width: '100%', height: '100vh' }}></Image>
        <Carousel.Caption>
          <h3 style={{color:''}}>Study Abroad</h3>
          <p>"Why just dream? Make it true with us"</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={img2} fluid style={{ width: '100%', height: '100vh' }}></Image>
        <Carousel.Caption>
          <h3 style={{color:'rgb(177, 151, 3)'}}>Step on to your Future</h3>
          <p>"The reality of TRAVELLING as a couple</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={img3} fluid style={{ width: '100%', height: '100vh' }}></Image>
        <Carousel.Caption>
          <h3 style={{color:'rgb(197, 169, 8)'}}>Start your Happy Journey</h3>
          <p>
            "The Journey Of Thousand Miles begins with a SINGLE--STEP"
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
  );
}

export default UncontrolledExample;