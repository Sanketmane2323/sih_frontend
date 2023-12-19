import React from "react";
import { Link } from "react-router-dom";

function Join() {
  return (
    <div className="flex items-center mt-10 justify-around ">
      <div className="flex flex-col items-center mt-7  ">
        <div>
          <h2 className=" text-xl font-medium text-[#3C4852] md:text-4xl lg:text-4xl 2xl:text-4xl xl:text-4xl">
            Start learning with Studify
          </h2>
        </div>
        <div>
          <h3 className="w-full lg:w-[420px] py-0 px-5 text-center  text-xl font-thin  leading-[150%] my-3 ">
            Get unlimited access to structured courses & doubt clearing
            sessions.
          </h3>
        </div>
        <Link to="/signup">
          <button
            type="button"
            class="text-white bg-[#08BD80] dark:bg-blue-500  font-bold rounded-lg text-md px-6 py-3 text-center"
          >
            Start Learning
          </button>
        </Link>
      </div>
      <div>
        <img className="pl-3" src="/Images/join.svg" alt="Join us" />
      </div>
    </div>
  );
}

export default Join;
