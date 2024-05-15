import React from "react";
import './home.css'
import Section from "./section/page";
import Footer from "./footer/footer";
import Navbar from "./navbar/page";

const Home = () => {
  return (
      <div>
        <Navbar/>
        <Section />
        <Footer />
      </div>
  )
}

export default Home;