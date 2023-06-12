import React from "react";
import "./Footer.css";
import phone from "../images/icon-phone.svg";
import email from "../images/icon-email.svg";
import flogo from "../images/logo.svg";
import locator from "../images/icon-location.svg";

const Footer = () => {
  return (
    <>
      <div className="f-wrapper">
        <div className="padding f-container">
          <img src={flogo} alt="logo" className="flogo" />
          <div className="ft-links">
            <div className="left-footer">
              <div>
                <p className="address">
                  <img src={locator} alt="location" />
                  lorelglejaklaeikaljkd
                  gnregrmvnknklerngklnklnvkngrkelgnklnkflnkfn
                </p>
              </div>
              <div>
                <a href="/">
                  <img src={phone} />
                  +1-543-123-4567
                </a>
                <a href="/">
                  <img src={email} /> example@fylo.com
                </a>
              </div>
            </div>
            <div className="right-footer">
              <>
                <ul>
                  <li>
                    <a href="/">About Us</a>
                  </li>
                  <li>
                    <a href="/">Jobs</a>
                  </li>
                  <li>
                    <a href="/">Press</a>
                  </li>
                  <li>
                    <a href="/">Blog</a>
                  </li>
                </ul>
              </>
              <>
                <ul>
                  <li>
                    <a href="/">Contact Us</a>
                  </li>
                  <li>
                    <a href="/">Terms</a>
                  </li>
                  <li>
                    <a href="/">Privacy</a>
                  </li>
                </ul>
              </>
              <div className="socials">
                <span>
                  <i className="fab fa-facebook-f"></i>
                </span>
                <span>
                  <i className="fab fa-twitter"></i>
                </span>
                <span>
                  <i className="fab fa-instagram"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
