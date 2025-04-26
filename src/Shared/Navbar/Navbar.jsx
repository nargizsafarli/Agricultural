import React from 'react'
import { NavLink } from 'react-router-dom'
import { SlBasket } from "react-icons/sl";
import { FcLike } from "react-icons/fc";
import logo from "./assets/logo_2-х.png"
import nav from "./Navbar.module.css"

function Navbar() {
  return (
    <div className={nav.container}>
       <img src={logo} className={nav.logo}/>
       <div className={nav.link}>
       <NavLink to="/" className={({ isActive }) => isActive ? `${nav.link} ${nav.active}` : nav.link}>Home</NavLink>
       <NavLink to="/product" className={({ isActive }) => isActive ? `${nav.link} ${nav.active}` : nav.link}>Product</NavLink>
         <NavLink to="/about" className={({ isActive }) => isActive ? `${nav.link} ${nav.active}` : nav.link}>About</NavLink> 
          <NavLink to="/contact" className={({ isActive }) => isActive ? `${nav.link} ${nav.active}` : nav.link}>Contact</NavLink>
        </div>
        <div className={nav.icons}> 
        <FcLike />
        <SlBasket />
        <p>Log in</p>
        </div>
    </div>

  )
}

export default Navbar