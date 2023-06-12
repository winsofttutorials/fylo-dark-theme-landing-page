import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import testimony from "../../../Util/test.json";
import { sliderSettings } from "../../../Util/SliderSettings";
import "swiper/swiper.min.css";

const Testimonial = () => {
  return (
    <>
      <section className="t-wrapper">
        <div className="padding t-container">
          <Swiper {...sliderSettings}>
            {testimony.map((card, i) => {
              <SwiperSlide key={i}>
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
              </SwiperSlide>;
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
};
export default Testimonial;
