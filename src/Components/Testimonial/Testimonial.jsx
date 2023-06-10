import React from "react";
import "./Testimonial.css";
import { sliderSettings } from "../../../Util/SliderSettings";
import "swiper/css";
import testimony from "../../../Util/testimonial.json";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
const Testimonial = () => {
  return (
    <>
      <section className="t-wrapper">
        <h2>hi</h2>
        <h2>hi</h2>
        <Swiper>
          {testimony.map((card, i) => {
            <SwiperSlide key={i}>
              <div className="s-card">
                <p>{card.test}</p>
                <div className="userProfile">
                  <img src={card.img} alt="avatar" />
                  <div>
                    <h3>{card.name}</h3>
                    <p>{card.position}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>;
          })}
        </Swiper>
      </section>
    </>
  );
};

export default Testimonial;
