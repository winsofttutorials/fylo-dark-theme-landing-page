import React from "react";
import "./subscribe.css";
const Subscribe = () => {
  return (
    <>
      <div className="s-wrapper">
        <div className="getStarted">
          <h1 className="primaryText">Get early access today</h1>
          <p className="secondaryText">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
          <form>
            <input placeholder="email@example.com" />
            <button className="button">Get Started For Free</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
