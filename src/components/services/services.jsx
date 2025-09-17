import React from 'react'
import "./services.css"
import thme from "../../assets/theme_pattern.svg"
import services_data from '../../assets/services_data.js'
function Services() {
  return (
   <div id='services'  className="services">
    <div className="services-title">
        <h1>my services</h1>
        <img src={thme} alt="" />
    </div>
    <div className="service-container">
      {services_data &&
          services_data.map((service , index)=>{
          return(
            <div className="service_format"  key={index}>
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className="services-readmore">
                <img src="aeroicon" alt="" />
              </div>
            </div>
          )
        })
      }
    </div>
   </div>
  )
}

export default Services