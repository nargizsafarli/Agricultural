import React, { useEffect } from 'react'
import about from "./About.module.css"
import lay from "./assets/page-title-layer (1).png"
import sec2Img  from "./assets/Слой-1.png"
import sec2Img1 from "./assets/Shape-4.png"
import sec3Img1 from "./assets/Vector-Smart-Object-9.png"
import sec3Img2 from "./assets/Vector-Smart-Object1.png"
import sec3Img3 from "./assets/Vector-Smart-Object2.png"
import sec3Img4 from "./assets/Vector-Smart-Object3.png"
import { IoShareSocialOutline } from "react-icons/io5";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import cardI1 from "./assets/Layer-715-397x456.png"
import cardI2 from "./assets/Layer-731-1.png"
import cardI3 from "./assets/Layer-731-2.png"
import cardI4 from "./assets/Layer-731-392x456.png"
import forthImg from "./assets/Rectangle-846.jpg"
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className={about.container}>
        <div className={about.frist}>
            <img src={lay} className={about.lay}/>
            <h2>FARMINA</h2>
        </div>
        <div className={about.second}>
           <div className={about.sec1} data-aos="fade-up">
             <p>About Farming</p>
             <h4>Awesome work with Agrarium Company</h4>
             <span>Spanish mackerel yellow weaver sixgill. Sandperch flyingfish yellowfin cutthroat trout grouper whitebait horsefish bullhead shark California smoothtongue, striped burrfish threadtail saber-toothed blenny Red Sandperch flyingfish yellowfin cutthroat trout grouper whitebait horsefish bullhead shark California smoothtongue, striped burrfish threadtail
             </span>
             <div className={about.sec3}>
             <img src={sec3Img1}/>
             <img src={sec3Img2}/>
             <img src={sec3Img3}/>
             <img src={sec3Img4}/>
           </div>
           </div>
           <div className={about.sec2} data-aos="fade-up">
             <img src={sec2Img1}/>
             <img src={sec2Img}/>
           </div>
          
        </div>
        <div className={about.third} data-aos="fade-up">
            <h2 data-aos="fade-up">Team Farmers</h2>
            <h1 data-aos="fade-up">Key people in Agrarium</h1>
            <div className={about.cardCon} data-aos="fade-up">
            <div className={about.card}>
              <div className={about.cardImg}>
                <img src={cardI1} className={about.cartImg}/>
                <div className={about.share}>
                <div className={about.shareIcon}><IoShareSocialOutline /></div> 
                <div className={about.shareSocial}>
                <AiOutlineTwitter />
                <FaFacebookF />
                <FaLinkedinIn />
                <FaInstagram />
                </div>
                </div>
              </div>
              <div className={about.cardName}>
                <p>ALEX BELINE</p>
                <span>Founder & owner</span>
              </div>
            </div>
            <div className={about.card}>
              <div className={about.cardImg}>
                <img src={cardI2} className={about.cartImg}/>
                <div className={about.share}>
                <div className={about.shareIcon}><IoShareSocialOutline /></div> 
                <div className={about.shareSocial}>
                <AiOutlineTwitter />
                <FaFacebookF />
                <FaLinkedinIn />
                <FaInstagram />
                </div>
                </div>
              </div>
              <div className={about.cardName}>
                <p>ALEX BELINE</p>
                <span>Founder & owner</span>
              </div>
            </div>
            
            <div className={about.card}>
              <div className={about.cardImg}>
                <img src={cardI3} className={about.cartImg}/>
                <div className={about.share}>
                <div className={about.shareIcon}><IoShareSocialOutline /></div> 
                <div className={about.shareSocial}>
                <AiOutlineTwitter />
                <FaFacebookF />
                <FaLinkedinIn />
                <FaInstagram />
                </div>
                </div>
              </div>
              <div className={about.cardName}>
                <p>ALEX BELINE</p>
                <span>Founder & owner</span>
              </div>
            </div>
            <div className={about.card}>
              <div className={about.cardImg}>
                <img src={cardI4} className={about.cartImg}/>
                <div className={about.share}>
                <div className={about.shareIcon}><IoShareSocialOutline /></div> 
                <div className={about.shareSocial}>
                <AiOutlineTwitter />
                <FaFacebookF />
                <FaLinkedinIn />
                <FaInstagram />
                </div>
                </div>
              </div>
              <div className={about.cardName}>
                <p>ALEX BELINE</p>
                <span>Founder & owner</span>
              </div>
            </div>
            </div>
            <div className={about.forth} data-aos="fade-up">
            </div>
        </div>

    </div>
  )
}

export default About