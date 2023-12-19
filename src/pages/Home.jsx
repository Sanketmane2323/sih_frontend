import React from "react";
import BoxLine from "../compo/PopularSection/BoxLine";
import Hero from "../compo/Hero/Hero";
import CardLine from "../compo/Card/CardLine";
import Join from "../compo/Join/Join";
import Footer from "../compo/Footer/Footer";
import YourComponent from "../compo/YourComponent";

function Home() {
  return (
    <div>
      <Hero />
      <BoxLine />
      <CardLine />
      <Join />
      <YourComponent/>
      <Footer />
    </div>
  );
}

export default Home;
