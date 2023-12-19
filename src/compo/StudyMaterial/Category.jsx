import React from "react";
import Box from "./Box";

function Category() {
  const name = [
    "Role Based Roadmaps",
    "Skill Based Roadmaps",
    "Subjects",
    "Creativity",
  ];

  return (
    <div className="flex flex-row justify-center pb-20">
      <div className="m-4">
        <div>
          <Box name={name[0]} />
        </div>
        <div>
          <Box name={name[1]} />
        </div>
        <div>
          <Box name={name[1]} />
        </div>
      </div>
      <div className="m-4">
        <div>
          <Box name={name[2]} />
        </div>
        <div>
          <Box name={name[3]} />
        </div>
        <div>
          <Box name={name[3]} />
        </div>
      </div>
    </div>
  );
}

export default Category;
