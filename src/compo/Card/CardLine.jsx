import Card from "./Card";

function CardLine() {
  const property = {
    p1: {
      img1: "/Images/LiveClasses.svg",
      h1: "Resume Building",
      para1:
        "Build a resume that opens doors to opportunities using our Auto-generating Resume builder  to get employed",
    },
    p2: {
      img2: "/Images/Practice.svg",
      h2: "Practice and revise",
      para2:
        "Learning isn't just limited to classes with our practice section, mock tests and lecture notes shared as PDFs for your revision",
    },
    p3: {
      img3: "/Images/Learn.svg",
      h3: "Mentor Help ",
      para3:
        "Whether you're navigating your career, starting a new venture, or seeking personal growth – our mentors are here for you",
    },
  };
  return (
    <div className="flex flex-wrap justify-center mt-20">
      <Card
        img={property.p1.img1}
        heading={property.p1.h1}
        para={property.p1.para1}
      />
      <Card
        img={property.p2.img2}
        heading={property.p2.h2}
        para={property.p2.para2}
      />
      <Card
        img={property.p3.img3}
        heading={property.p3.h3}
        para={property.p3.para3}
      />
    </div>
  );
}

export default CardLine;
