import React from "react";

const LoanCard = ({ item }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {item.map((val) => (
        <div
          key={val.id}
          className="bg-white border border-gray-300 p-4 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-semibold">{val.title}</h2>
          <p className="text-gray-600">{val.description}</p>
          <a
            href={val.apply_src}
            className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Know More/Apply
          </a>
        </div>
      ))}
    </div>
  );
};

export default LoanCard;
