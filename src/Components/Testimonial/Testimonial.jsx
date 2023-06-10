import React from "react";
import "./Testimonial.css";
import { register } from "swiper/element/bundle";
import testimony from "../../../Util/testimonial.json";
import { sliderSettings } from "../../../Util/SliderSettings";
import "swiper/css";
const Testimonial = () => {
  return (
    <>
      <section className="t-wrapper">
        <div className="padding t-container">
          <swiper-container>
            {testimony.map((card, i) => {
              <swiper-slide key={i}>
                <div className="t-card">
                  <p>{card.test}</p>
                  <div className="userProfile">
                    <img src={card.image} alt="avatar" />
                    <div>
                      <h3>{card.name}</h3>
                      <p>{card.position}</p>
                    </div>
                  </div>
                </div>
              </swiper-slide>;
            })}
          </swiper-container>
        </div>
      </section>
    </>
  );
};
register();
export default Testimonial;
