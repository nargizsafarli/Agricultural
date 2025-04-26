import React from 'react'
import pinfoLogo from "./assets/page-title-layer.png"
import pinfo from "./PInfo.module.css"

function Pinfo() {
  return (
    <div className={pinfo.container}>
       <h1>SHOP PRODUCTS</h1>
        <img src={pinfoLogo} className={pinfo.img}/>
    </div>
  )
}

export default Pinfo