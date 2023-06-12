import React from "react";
import "./App.css";

import Header from "../src/Components/Header/Header";
import Hero from "./Components/Hero/Hero";

import Products from "./Components/Products/Products";
import Services from "./Components/Services/Services";
// import Subscribe from "./Components/Subscribe/Subscribe";
import Testimonial from "./Components/Testimonial/Testimonial";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Hero />
        <Services />
        <Products />
        <Testimonial />

        <Footer />
      </div>
    </>
  );
};

export default App;
