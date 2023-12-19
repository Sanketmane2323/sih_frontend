import React from "react";
import {Link} from "react-router-dom"

function UpperNav() {
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <div className="flex items-center">
            <img
              src="./Images/National-Emblem.png"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Ministry of India
            </span>
          </div>

          <div className="justify-between flex items-center ">
            {/* <a
              href="tel:5541251234"
              className=" sm:mr-6 text-sm  text-gray-500 dark:text-white hover:underline"
            >
              (+91) 022857
            </a> */}
            <Link
              to="/login"
              className="text-sm text-blue-500  dark:text-blue-500 hover:underline"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="text-sm mx-4 text-blue-500 dark:text-blue-500 hover:underline"
            >
              SignUp
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default UpperNav;
