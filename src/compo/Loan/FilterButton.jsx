// import React from "react";

// const FilterButton = ({ loanItems }) => {
//   return (
//     <div className="flex items-center mt-4 mb-4 space-x-4">
//       {loanItems.map((val, index) => (
//         <button
//           key={index}
//           className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-300 ease-in-out"
//         >
//           {val}
//         </button>
//       ))}
//       <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded transition-colors duration-300 ease-in-out">
//         All
//       </button>
//     </div>
//   );
// };

// export default FilterButton;
import React from "react";
import { LoanData } from "./LoanData";

const FilterButton = ({ loanItems, filterItems, setItems }) => {
  return (
    <div className="flex justify-center mt-4 mb-4 space-x-4">
      {loanItems.map((val, index) => (
        <button
          key={index}
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-300 ease-in-out"
          onClick={() => filterItems(val)}
        >
          {val}
        </button>
      ))}
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded transition-colors duration-300 ease-in-out"
        onClick={() => setItems(LoanData)}
      >
        All
      </button>
    </div>
  );
};

export default FilterButton;
