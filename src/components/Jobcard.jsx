/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";


function Jobcard({icon, time, type, title, company, country, background}){
    return(
        <div className="jobcard">
            <div className="styledicon" style={{backgroundColor:background}}>
                <img src={icon}/>
            </div>

            <div className="timetype">
                <p>{time}</p>
                <span className="dot">.</span>
                <p>{type}</p>
            </div>

            <div className="details">
                <h3>{title}</h3>
                <p>{company}</p>
                <h5>{country}</h5>
            </div>
        </div>
    )
}

export default Jobcard