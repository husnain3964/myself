import React from "react";
import "./footer.css";
import footerLogo from "../../assets/h2.png";
import userIcon from "../../assets/user_icon.svg";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img width={"100px"}   src={footerLogo} alt="" />
          <p>
            I'm a MERN stack developer from , SMIT with year of training experince
            
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={userIcon} alt="" />
            <input type="email" placeholder="enter your email" id="" />
          </div>
          <div className="footer-subscribe">subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">c 2025  Muhammad Husnain. All right reserved.  </p>
        <div className="footer-bottom-right">
            <p>Term of services</p>
            <p>Privacy Policy</p>
            <p>Connect with me  </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
