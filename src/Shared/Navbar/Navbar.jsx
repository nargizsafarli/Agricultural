import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { SlBasket } from "react-icons/sl";
import { FcLike } from "react-icons/fc";
import { useSelector, useDispatch } from "react-redux";

import logo from "./assets/logo_2-х.png"
import nav from "./Navbar.module.css"
import { logout } from '../../redux/features/auth/authSlice';

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const basketItems = useSelector((state) => state.basket.basketItems);
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);

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
       <NavLink to='/wishlist'>
         <FcLike  />
         </NavLink>
         <span>{wishlistItems.length}</span>
         <NavLink to="/basket">
         <SlBasket />
         </NavLink>
         <span>{basketItems.length}</span>
         {user ? (
           <div className={nav.userActions}>
             <p onClick={() => navigate("/contact")} style={{ cursor: "pointer" }}>{user.user_metadata.name}</p>
             <button onClick={() => dispatch((logout()))}>Logout</button>
           </div>
         ) : (
           <p onClick={() => navigate("/contact")} style={{ cursor: "pointer" }}>Log in</p>
         )}
       </div>
    </div>
  )
}

export default Navbar
