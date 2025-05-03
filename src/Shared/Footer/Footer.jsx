import React from 'react'
import { FaTwitter, FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import footer from "./Footer.module.css";
import logo from "./assets/Logo_2-х (1).png"

function Footer() {
  return (
    <div className={footer.contain}>
      <div className={footer.top}>
        <p className={footer.title}>Do you want to work with Agrarium?</p>
        <span className={footer.desc}>
          Arctic char, steelhead sprat sea lamprey grunion. Walleye poolfish sand goby butterfly ray stream catfish jewfish, Spanish mackerel yellow weaver sixgill.
        </span>
      </div>

      <div className={footer.bottom}>
        <div className={footer.column}>
          <img src={logo} alt="Agrarium" className={footer.logo} />
          <p className={footer.text}>
            Wrasse climbing gourami amur pike Arctic char, steelhead sprat sea lamprey grunion.
          </p>
          <div className={footer.socials}>
            <FaTwitter />
            <FaFacebookF />
            <FaYoutube />
            <FaInstagram />
          </div>
        </div>

        <div className={footer.column}>
          <h4 className={footer.columnTitle}>Contact Info</h4>
          <p>523 Sylvan Ave, 5th Floor Mountain View, CA 94041 USA</p>
          <p>+1 234 719 8948</p>
          <p>+1 987 654 3210</p>
          <p>support@agrarium.com</p>
        </div>

        <div className={footer.column}>
          <h4 className={footer.columnTitle}>Main Menu</h4>
          <ul className={footer.menu}>
            <li>About Us</li>
            <li>Services</li>
            <li>Our Projects</li>
            <li>Meet Farmers</li>
            <li>Latest News</li>
            <li>Documentation</li>
          </ul>
        </div>
      </div>

      <div className={footer.bottomBar}>
        <p>2021 Agrarium. All Rights Reserved by Artureanec</p>
        <div>
          <span>Privacy Policy</span> | <span>Terms and Conditions</span>
        </div>
      </div>
    </div>
  )
}

export default Footer;
