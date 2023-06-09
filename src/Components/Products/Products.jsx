import React from "react";
import "./Products.css";
import arrow from "../images/icon-arrow.svg";
import illustration from "../images/illustration-stay-productive.png";
const Products = () => {
  return (
    <>
      <section className="p-wrapper">
        <div className="flexCol padding p-container">
          {/* left */}
          <div className="left-product">
            <div className="image-container">
              <img src={illustration} alt="illustration2" width={600} />
            </div>
          </div>
          {/* right */}
          <div className="productuction-info">
            <h2 className="primaryText">Stay productive, wherever you are</h2>
            <p className="secondaryText">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p className="secondaryText">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
            <span>
              See how Fylo works <img src={arrow} alt="arrowIcon" />
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
