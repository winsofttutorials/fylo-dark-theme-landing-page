import React from "react";
import "./Header.css";
import logo from "../../Components/images/logo.svg";
const Header = () => {
  return (
    <>
      <section className="Navbar">
        <nav className="flexCol padding">
          <img src={logo} alt="logo" width={100} className="logo" />
          <ul className="navLinks">
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">Team</a>
            </li>
            <li>
              <a href="/">Sign in</a>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Header;
