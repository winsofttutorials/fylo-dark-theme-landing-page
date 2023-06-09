import React from "react";
import "./Hero.css";
import illustrator from "../../Components/images/illustration-intro.png";
const Hero = () => {
  return (
    <>
      <section className=" hero-wrapper">
        <div className="flexColCenter hr-container">
          <div className="image-position">
            <img src={illustrator} alt="illustrator" width={600} />
          </div>
          <h1 className="primaryText headerTitle">
            All your files in one secure location, accessible anywhere
          </h1>
          <p className="secondaryText subTitle">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, Share and collaborate with friends,
            family and co-workers
          </p>
          <button type="butoon" className="button">
            Get Started
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
