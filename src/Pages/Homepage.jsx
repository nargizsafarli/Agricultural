import React from 'react'
import Navbar from '../Shared/Navbar/Navbar'
import Grow from "../Components/GrowBeauty/Grow"
import Slide from "../Components/SliderCom/Slide"
import Footer from '../Shared/Footer/Footer'

function Homepage() {
  return (
    <div>
        <Navbar/>
        <Slide/>
        <Grow/>
        <Footer/>
    </div>
  )
}

export default Homepage