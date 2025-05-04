import React, { useEffect } from 'react'
import stat from './ContactStat.module.css'  
import logo from "./assets/page-title-icon.png"
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import homeImg from "./assets/Vector-Smart-Object-8.png"
import lay from "./assets/page-title-layer (1).png"
import AOS from "aos";
import "aos/dist/aos.css";

function ContactStatic() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // animasiyanın müddəti 1000ms
  }, []);
  return (
    <div className={stat.container}>
        <div className={stat.first} >
            <img data-aos="fade-up" src={logo} className={stat.imgLogo}/>
            <h1 data-aos="fade-up">Contact Us</h1>
            <img src={lay} className={stat.lay}/>
        </div>
        <div className={stat.second}>
          <div className={stat.left} data-aos="fade-up">
            <p>Conatct Info</p>
            <h2>Get in Touch</h2>
            <span>Saw shark flat loach snakehead; salmon, sábalo snipefish skipjack
            tuna. Roanoke bass lefteye flounder, barreleye, algae eater zebra pleco</span>
            <div className={stat.info} data-aos="fade-up">
                <div className={stat.infoo}>
                <CiLocationOn />
                <div className={stat.infoDetail}>
                <h2>We Are Here</h2>
                <span>523 Sylvan Ave, 5th Floor Mountain
                View, CA 94041 USA</span>
                </div>
                </div>
                <div className={stat.infoo}>
                <LuPhoneCall />
                <div className={stat.infoDetail}>    
                <span>+1 234 719 8948</span>
                <span>+1 987 654 3210</span>
                </div>
                </div>
                <div className={stat.infoo}>
                <MdOutlineEmail/>
                <div className={stat.infoDetail}>
                <span>support@agrarium.com</span>
                </div>
                </div>
            </div>
          </div>
          <div className={stat.right}>
            <img data-aos="fade-up" src={homeImg}/>
          </div>
        </div>
    </div>
  )
}

export default ContactStatic