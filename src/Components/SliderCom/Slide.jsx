import React from "react";
import { Carousel } from "react-bootstrap"; 
// import "bootstrap/dist/css/bootstrap.min.css";
import slideImg1 from "./assets/Rectangle-846.jpg"
import slideImg2 from "./assets/Rectangle-1007-min.png"
import slideImg3 from "./assets/ezgif.com-gif-maker.jpg"
import img1Logo1 from "./assets/1.png"
import slide3Logo3 from "./assets/3.png"
import slide2Logo2 from "./assets/4.png"
import "./Slide.css"
function Slide() {
  return (
    <Carousel 
    interval={3000}
    pause={false}
    //  indicators={false} controls={false}
    >
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={slideImg1}
          alt="First slide"
        />
        <Carousel.Caption >
          <img src={img1Logo1}/>
          <h3 className="fw-bolder">GET BLAYCKBERRY PACK WIDTH 50% OFF</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slideImg2}
          alt="Second slide"
        />
        <Carousel.Caption  >
        <img src={slide2Logo2}/>
          <h3 className="fw-bolder">ORGANIC STORE</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slideImg3}
          alt="Third slide"
        />
        <Carousel.Caption >
        <img src={slide3Logo3}/>
          <h3  className="fw-bolder">NATURAL HEALTH FOOD</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slide;