import React from "react";

function Card(props) {
  return (
    <div>
      <div className="max-w-sm bg-white border mt-5 lg:ml-3 md:ml-3 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={props.img} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="my-2 text-2xl font-bold tracking-tight text-[#3C4852] dark:text-white">
              {props.heading}
            </h5>
          </a>
          <p className="my-3 text-[16px] text-[#3C4852] font-[400px] dark:text-gray-400">
            {props.para}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
