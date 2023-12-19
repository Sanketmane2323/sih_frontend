import React from "react";

function Box(props) {
  return (
    <div className="mt-1 mb-3">
      <a
        href="#"
        class="block max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 class="mb-2 text-normal font-medium  text-[#3C4852] dark:text-white">
          {props.name}
        </h5>
      </a>
    </div>
  );
}

export default Box;
