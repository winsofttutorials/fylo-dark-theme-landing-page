import React from "react";
import "./Services.css";

import data from "../../../Util/data.json";
const Services = () => {
  return (
    <>
      <div className="s-wrapper">
        <div className="padding s-container">
          {data.map((item, i) => {
            return (
              <div className="serviceInfo" key={i} uuid={i}>
                <div className="serviceCard">
                  <img src={item.image} alt="image" />
                  <h2 className="primaryText">{item.title}</h2>
                  <p className="secondaryText">{item.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
