export default function Hero() {
  return (
    <div className=" sm:flex  container justify-evenly mt-32 items-center  mx-auto mb-8">
      <div className=" max-h-96 flex flex-col ">
        <h2 className="container text-4xl text-[#3C4852]  font-bold mb-11 ">
          Building Viksit Bharat: Your Roadmap to a Developed India in 2047!
        </h2>
        <div className="max-w-lg font-semibold">
          <p>Education is one thing that no one can take away from you.</p>
          <p className="float-right">-Elin Nordegren</p>
        </div>
      </div>
      <div>
        <img
          className="max-h-[600px]"
          src="/Images/MainImg.svg"
          alt="India Flags"
        />
      </div>
    </div>
  );
}
