import React from "react";
import "flowbite";
import Navbar from "./compo/Navbar/Navbar";
import Hero from "./compo/Hero/Hero";
import BoxLine from "./compo/PopularSection/BoxLine";
import CardLine from "./compo/Card/CardLine";
import Join from "./compo/Join/Join";
import Footer from "./compo/Footer/Footer";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <BoxLine/>
      <CardLine/>
      <Join/>
      <Footer/>
    </>
  );
}

export default App;
