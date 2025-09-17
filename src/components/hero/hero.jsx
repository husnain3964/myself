import React from "react";
import "./hero.css";
import hp from "../../assets/hp.jpeg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume from "../../assets/resume/husnainResume.pdf"
function Hero() {
  return (
    <div  id="home"  className="hero" >
      <img className="h" src={hp} alt="" />
      <h1>  <span>  I'm Husnain </span> , Mern stack developer </h1>
      <p>
        
        Passionate MERN Stack Developer crafting dynamic and scalable web
        solutions
      </p>
      <div className="hero-action">
        <div className="hero-connect">    <AnchorLink className="anchor-link" offset={50} href="#contact">   connect with me  </AnchorLink> </div>
        <div className="hero-resume"><a href={resume} target="blank" > my resume </a> </div>
      </div>
    </div>
  );
}

export default Hero;
