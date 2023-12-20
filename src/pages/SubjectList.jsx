import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS
import { Link } from "react-router-dom";

const SubjectList = () => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("http://127.0.0.1:8000/api/subjects/") // Replace with your actual API endpoint
      .then((response) => response.json())
      .then((data) => setSubjects(data))
      .then((data) => console.log(data))

      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Subjects</h1>

      {subjects.map((subject) => (
        <Link to={`/subject/${subject.id}`} key={subject.id}>
          <div className="bg-white p-4 rounded-md shadow-md mt-4">
            <h2 className="text-lg font-bold mb-2">{subject.name}</h2>
            <p className="text-gray-600">{subject.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SubjectList;
