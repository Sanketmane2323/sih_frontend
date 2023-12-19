import React from "react";

function Box(props) {
  return (
    <div>
      <div className="main-box w-[300px] h-[320px] md:w-[350px] md:h-[360px] lg:w-[266px] lg:h-[280px] flex flex-col mx-5 mt-10 items-center justify-center bg-[#FFFFFF] border-gray-300 border border-solid rounded-[10px] hover:bg-[#F7F9FB] ">
        <img src={props.img} alt="img" />
        
        <h4 className="text-xl font-medium cursor-pointer mt-5 text-[#3C4852]">
          {props.name}
        </h4>
      </div>
    </div>
  );
}

export default Box;
