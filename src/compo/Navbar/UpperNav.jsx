import React from "react";

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
            <a
              href="http://127.0.0.1:8000/user_login/"
              className="text-sm  text-blue-500 dark:text-blue-500 hover:underline"
            >
              Login
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default UpperNav;
