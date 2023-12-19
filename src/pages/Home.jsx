import React from "react";
// import Navbar from '../compo/Navbar/Navbar'
import BoxLine from "../compo/PopularSection/BoxLine";
import Hero from "../compo/Hero/Hero";
import CardLine from "../compo/Card/CardLine";
import Join from "../compo/Join/Join";
import Footer from "../compo/Footer/Footer";

function Home() {
  return (
    <div>
      {/* <Navbar/> */}
      <Hero />

      <BoxLine />
      <CardLine />
      {/* <Testimonial /> */}
      <Join />
      <Footer />
    </div>
  );
}

export default Home;

//   <Navbar />
//   <Hero />
//   <BoxLine />
//   <CardLine />
//   <Join />
//   <Footer />
