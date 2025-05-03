import React from 'react'
import Navbar from '../Shared/Navbar/Navbar'
import Product from '../Components/Product/Product'
import Pinfo from '../Components/PInfo/Pinfo'
import Footer from '../Shared/Footer/Footer'

function ProductPage() {
  return (
    <div>
    <Navbar/>
    <Pinfo/>
    <Product/>
    <Footer/>
    </div>
  )
}

export default ProductPage