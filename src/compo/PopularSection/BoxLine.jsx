import React from "react";
import Box from "./Box";

function BoxLine() {
  const property = {
    property1: {
      img1: "public/Images/img2.svg",
      p1: "Research",
    },
    property2: {
      img2: "public/Images/img3.svg",
      p2: "Research",
    },
    property3: {
      img3: "public/Images/img4.svg",
      p3: "Research",
    },
    property4: {
      img4: "public/Images/img5.svg",
      p4: "Research",
    },
    property5: {
      img5: "public/Images/img6.svg",
      p5: "Research",
    },
    property6: {
      img6: "public/Images/img7.svg",
      p6: "Research",
    },
    property7: {
      img7: "public/Images/img8.svg",
      p7: "Research",
    },
    property8: {
      img8: "public/Images/img9.svg",
      p8: "Research",
    },
  };

  return (
    <>
      <div className="flex flex-col mt-20">
        <h3 className="text-[ #3C4852] text-center font-medium text-2xl">
          Popular Goal
        </h3>
        <div className="flex flex-wrap  justify-center">
          <Box img={property.property1.img1} name={property.property1.p1} />
          <Box img={property.property2.img2} name={property.property2.p2} />
          <Box img={property.property3.img3} name={property.property3.p3} />
          <Box img={property.property4.img4} name={property.property4.p4} />
        </div>
        <div className="flex flex-wrap  justify-center">
          <Box img={property.property5.img5} name={property.property5.p5} />
          <Box img={property.property6.img6} name={property.property6.p6} />
          <Box img={property.property7.img7} name={property.property7.p7} />
          <Box img={property.property8.img8} name={property.property8.p8} />
        </div>
      </div>
    </>
  );
}

export default BoxLine;
