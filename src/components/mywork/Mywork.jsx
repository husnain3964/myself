import React from 'react'
import "./myWork.css"
import theme  from "../../assets/theme_pattern.svg"
import mywork_data from '../../assets/mywork_data.js'
import aeroIcon from "../../assets/arrow_icon.svg"
function Mywork() {
  return (
<div   id='work'  className="mywork">
    <div className="mywork-title">
        <h1>My Project</h1>
        <img src={theme} alt="" />
    </div>
    <div className="mywork-container">
        {mywork_data.map((data , index)=>(
          (
            <a  href={data.href}  target='blank' >
           <img  width={"430px"}  height={"250px"}  src={data.w_img} key={index}  alt="img" />
            <p>{data.w_name}</p>
          </a>
          )
        ))}
        </div>
        <div className="mywork-showmore">
          <p>Show more</p>
          <img  src={aeroIcon} alt="" />
        </div>
    </div>

  )
}

export default Mywork