import React, { useEffect } from 'react'
import pinfoLogo from "./assets/page-title-layer.png"
import pinfo from "./PInfo.module.css"
import AOS from "aos";
import "aos/dist/aos.css";

function Pinfo() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);
  return (
    <div className={pinfo.container}>
       <h1 data-aos="zoom-in">SHOP PRODUCTS</h1>
        <img src={pinfoLogo} className={pinfo.img}/>
    </div>
  )
}

export default Pinfo