import React from "react";
// import Navbar from '../compo/Navbar/Navbar'
import BoxLine from "../compo/PopularSection/BoxLine";
import Hero from "../compo/Hero/Hero";
import CardLine from "../compo/Card/CardLine";
import Join from "../compo/Join/Join";
import Footer from "../compo/Footer/Footer";
import LogoutButton from "./logout";

function Home() {
  return (
    <div>
      <Hero />
      <BoxLine />
      <CardLine />
      <Join />
      
      <Footer />
    </div>
  );
}

export default Home;
