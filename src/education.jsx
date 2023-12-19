import React, { useState, useEffect } from "react";

const Education = () => {
  const [educationData, setEducationData] = useState(null);

  useEffect(() => {
    const fetchEducationData = async () => {
      try {
        // Retrieve the token from local storage
        const token = localStorage.getItem("token"); // Replace 'yourTokenKey' with the actual key you used to store the token

        const response = await fetch(
          "http://127.0.0.1:8000/profile/education/",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${token}`, // Include the token in the Authorization header
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setEducationData(data);
      } catch (error) {
        console.error("Error fetching education data:", error);
      }
    };

    fetchEducationData();
  }, []); // Empty dependency array means this effect will run once when the component mounts

  return (
    <section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        <div class="-my-8 divide-y-2 divide-gray-100">
          {educationData && educationData.length > 0 ? (
            educationData.map((education) => (
              <div key={education.id}>
                <div class="py-8 flex flex-wrap md:flex-nowrap">
                  <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <span class="font-semibold title-font text-gray-700">
                      Education{" "}
                    </span>
                  </div>
                  <div class="md:flex-grow">
                    <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                      Institution: {education.institution}
                    </h2>
                    <p class="leading-relaxed">Degree: {education.degree}</p>
                    <p class="leading-relaxed">
                      Start Date: {education.start_date}
                    </p>
                    <p class="leading-relaxed">
                      End Date: {education.end_date}
                    </p>
                    <a class="text-indigo-500 inline-flex items-center mt-4">
                      Learn More
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        stroke-linecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No education data available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Education;
