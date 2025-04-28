import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import ProductPage from './Pages/ProductPage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import WishlistPage from './Pages/WishlistPage';


function App() {
  return (
    <div>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="product" element={<ProductPage/>} />
      <Route path="about" element={<AboutPage/>} />
      <Route path="contact" element={<ContactPage/>} />
      <Route path="wishlist" element={<WishlistPage/>}/>
    </Routes>
   </BrowserRouter>
    </div>
  )
}

export default App