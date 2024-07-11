import React from "react";
import "./Hero.css";
//import hero_image from "../Assets/hero_image.png";
//import pexels-olly-3769148 from "../Assets/pexels-olly-3769148.jpg"
import front from "../Assets/front.png"
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={front} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
