import React, { useState } from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import testimony from "../../../Util/test-info.json";
import { sliderSettings } from "../../../Util/SliderSettings";
import "swiper/swiper.css";
import quote from "../images/bg-quotes.png";

const Testimonial = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const validateMail = () => {
    const regEx = /^[A-Za-z\._\-0-9]*[@]*[A-Za-z]*[\.][a-z]{3,3}$/;
    if (regEx.test(email)) {
      setMessage("Succesful");
    } else if (!regEx.test(email) && email !== "") {
      setMessage("Email is Not Valid");
    } else {
      setMessage("");
    }
  };
  return (
    <>
      <section className="t-wrapper">
        <div className="padding t-container">
          <img src={quote} alt="quote" className="quotes" />
          <Swiper {...sliderSettings}>
            {testimony?.map((data, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className="t-card">
                    <p className="secondaryText userDetail">{data.text}</p>
                    <div className="userProfile">
                      <img src={data.image} alt="avatar" />
                      <div>
                        <h3 className="secondaryText">{data.name}</h3>
                        <p className="secondaryText">{data.position}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <>
          <div className="getStarted">
            <h1 className="primaryText">Get early access today</h1>
            <p className="secondaryText">
              It only takes a minute to sign up and our free starter tier is
              extremely generous. If you have any questions, our support team
              would be happy to help you.
            </p>
            <form>
              <input
                placeholder="email@example.com"
                value={email}
                onChange={handleChange}
              />
              <button type="submit" className="button" onClick={validateMail}>
                Get Started For Free
              </button>
              <p className="message">{message}</p>
            </form>
          </div>
        </>
      </section>
    </>
  );
};
export default Testimonial;
