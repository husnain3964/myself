import React from "react";
import "./about.css";
import theme from "../../assets/theme_pattern.svg";
function About() {
  return (
    <div id="about"  className="about">
      <div className="about-title">
        <h1>aboutme </h1>
        <img src={theme} alt="" />
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={theme} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              MERN Stack Developer with 1.4 years of training at SMIT,
              specializing in React, Node.js, Express, and MongoDB. Passionate
              about building scalable web applications and continuously
              improving through self-driven projects
            </p>
            <p>
              Passionate MERN Stack Developer with 1.4 years of training at
              SMIT, focused on creating scalable and efficient web applications
            </p>
            <p>
              Also completed MSc with good grades from University of Karachi,
              strengthening both technical and academic foundation
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              html css <hr style={{ width: "90%" }} />
            </div>
            <div className="about-skill">
              javascript <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              reactjs <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              nodejs <hr style={{ width: "65%" }} />
            </div>
            <div className="about-skill">
              Expressjs/mongodb <hr style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="about-acheivments">
        <div className="about-acheivment">
          <h1>1+</h1>
          <p>year of experince</p>{" "}
        </div>
        <hr />
        <div className="about-acheivment">
          <h1>15+</h1>
          <p>project</p>{" "}
        </div>
        <hr />
        {/* <div className="about-acheivment">
            <h1>10</h1>
            <p>happaty clinet</p>{" "}
          </div> */}
      </div>
    </div>
  );
}

export default About;
