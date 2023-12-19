import React from "react";
import Box from "./Box";

function BoxArrange() {
  const names = {
    RbasedRoadmaps: [
      "Frontend",
      "Backend",
      "Devops",
      "Full stack",
      "Android",
      "Blockchain",
      "C++",
      "Flutter",
      "React-Native",
    ],
    SbasedRoadmaps: [
      "Computer Science",
      "React",
      "Python",
      "Javascript",
      "Java",
      "Spring-Boot",
      "Rust",
      "Docker",
      "MongoDB",
    ],
    Subject: [
      "Maths",
      "English",
      "Science",
      "Hindi",
      "Marathi",
      "Physics",
      "Chemistry",
      "Biology",
      "Accounts",
    ],
    CreativeField: [
      "Photography",
      "Illustrator",
      "Video Editing",
      "Fashion Designing",
      "Graphic Designing",
      "After Effects",
      "Painter",
    ],
  };

  return (
    <div className="flex justify-center pb-20 ">
      <div className="flex flex-col mx-3">
        <Box />
        <Box />
        <Box />
      </div>
      <div className="flex flex-col mx-3">
        <Box />
        <Box />
        <Box />
      </div>
      <div className="flex flex-col mx-3">
        <Box />
        <Box />
        <Box />
      </div>
    </div>
  );
}

export default BoxArrange;
