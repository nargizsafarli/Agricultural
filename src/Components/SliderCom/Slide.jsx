import React from "react";
import { Carousel } from "react-bootstrap"; 
import slideImg1 from "./assets/Rectangle-846.jpg"
import slideImg2 from "./assets/Rectangle-1007-min.png"
import slideImg3 from "./assets/ezgif.com-gif-maker.jpg"
import "./Slide.css"
import { useNavigate } from "react-router-dom";
function Slide() {
  const navigate=useNavigate()
  return (
    <Carousel 
    interval={3000}
    pause={false}
    >
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={slideImg1}
          alt="First slide"
        />
        <Carousel.Caption >
          <h3 className="fw-bolder">GET BLAYCKBERRY PACK WIDTH 50% OFF</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <button onClick={()=>{navigate("/product")}} className="get-button">GET PRODUCTS</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slideImg2}
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slideImg3}
          alt="Third slide"
        />
        <Carousel.Caption >
          <h3  className="fw-bolder">NATURAL HEALTH FOOD</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          <button onClick={()=>{navigate("/product")}} className="get-button">GET PRODUCTS</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slide;