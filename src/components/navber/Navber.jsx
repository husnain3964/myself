import React, { useState  , useRef  } from "react";
import "./navber.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import h from "../../assets/h.png";
import menu_open from  "../../assets/menu_open.svg";
import menu_close from  "../../assets/menu_close.svg";
import underline from "../../assets/nav_underline.svg";
 
function Navber() {
  const [menu, setMenu] = useState("home");
  const menuref =useRef()


const openMenu =()=>{
  menuref.current.style.right="0px";
}

const closeMenu =()=>{
  menuref.current.style.right="-350px";
}

  return (
    <div className="navber">
      <img className="img" src={h} alt="" />
      <img className="nav-mob-open" onClick={openMenu} src={menu_open} alt="" />

      <ul ref={menuref}  className="nav-menu">
        <img src={menu_close}   onClick={closeMenu} className="nav-mob-close" alt="" />
        <li>
          
          <AnchorLink className="anchor-link" offset={50} href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
          <p onClick={() => setMenu("aboutMe")}>About me</p></AnchorLink>
          {menu === "aboutMe" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={30} href="#services">
          <p onClick={() => setMenu("services")}>Services</p></AnchorLink>
          {menu === "services" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={30} href="#work">
          <p onClick={() => setMenu("portfolio")}>Portfolio</p></AnchorLink>
          {menu === "portfolio" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
          <p onClick={() => setMenu("contact")}>contact</p></AnchorLink>
          {menu === "contact" ? <img src={underline} alt="" /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">    <AnchorLink className="anchor-link" offset={50} href="#contact">   connect with me  </AnchorLink></div>
    </div>
  );
}

export default Navber;
