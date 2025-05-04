import React, { useEffect } from "react";
import "./Grow.css"
import AOS from "aos";
import "aos/dist/aos.css";

function Grow() {
    useEffect(() => {
      AOS.init({ duration: 1000 }); // animasiyanın müddəti 1000ms
    }, []);
  return (
    <div className="container mt-5 pb-5" >
      <div className="row p-1" >
        <div className=" col-lg-6 " data-aos="fade-up">
        <div className="growImg1">
          <div className="forAll">FOR ALL COSMETICS
          <div className="offer">30%</div>
          </div>
          <div  className="d-flex flex-column mt-5 pt-5 forAllText">
            <h3>We Grow Beauty</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking organic cosmetics.
            </p>
          </div>
          </div>
        </div>
        <div className=" col-lg-6"  data-aos="fade-up">
        <div className="growImg2">
          <div className="forAll">FOR ALL COSMETICS
          <div className="offer">30%</div>
          </div>
          <div className="d-flex flex-column mt-5 pt-5  forAllText">
            <h3>We Grow Beauty</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking organic cosmetics.
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grow;
