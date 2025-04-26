import React from 'react'
import Navbar from '../Shared/Navbar/Navbar'
import Grow from "../Components/GrowBeauty/Grow"
import Slide from "../Components/SliderCom/Slide"

function Homepage() {
  return (
    <div>
        <Navbar/>
        <Slide/>
        <Grow/>
    </div>
  )
}

export default Homepage