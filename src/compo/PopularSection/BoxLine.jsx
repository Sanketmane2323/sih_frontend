import Box from "./Box";
import { Link } from "react-router-dom";

function BoxLine() {
  const property = {
    property1: {
      img1: "/Images/img2.svg",
      p1: "Loans",
    },
    property2: {
      img2: "/Images/img3.svg",
      p2: "JobPost",
    },
    property3: {
      img3: "/Images/img4.svg",
      p3: "News",
    },
    property4: {
      img4: "/Images/img5.svg",
      p4: "Resume Builder",
    },
    property5: {
      img5: "/Images/img6.svg",
      p5: "Research",
    },
    property6: {
      img6: "/Images/img7.svg",
      p6: "Research",
    },
    property7: {
      img7: "/Images/img8.svg",
      p7: "Research",
    },
    property8: {
      img8: "/Images/img9.svg",
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
          <Link to="/loan">
            <Box img={property.property1.img1} name={property.property1.p1} />
          </Link>
          <Link to="/jobpost ">
            <Box img={property.property2.img2} name={property.property2.p2} />
          </Link>
          <Box img={property.property6.img6} name={property.property3.p3} />
          <Box img={property.property8.img8} name={property.property4.p4} />
        </div>
        {/* <div className="flex flex-wrap  justify-center">
          <Box img={property.property5.img5} name={property.property5.p5} />
          <Box img={property.property6.img6} name={property.property6.p6} />
          <Box img={property.property7.img7} name={property.property7.p7} />
          <Box img={property.property8.img8} name={property.property8.p8} />
        </div> */}
      </div>
    </>
  );
}

export default BoxLine;
