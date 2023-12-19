import React, { useState, useEffect } from "react";

const WorkExperienceInfo = () => {
  const [workExperienceData, setWorkExperienceData] = useState([]);

  useEffect(() => {
    const fetchWorkExperienceData = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await fetch("http://127.0.0.1:8000/profile/workexp/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setWorkExperienceData(data);
      } catch (error) {
        console.error("Error fetching work experience data:", error);
      }
    };

    fetchWorkExperienceData();
  }, []);

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
          {workExperienceData.length > 0 ? (
            workExperienceData.map((experience) => (
              <div key={experience.id}>
                <div className="py-8 flex flex-wrap md:flex-nowrap">
                  <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <span className="font-semibold title-font text-gray-700">
                      Work Experience
                    </span>
                    <span className="text-sm text-gray-500">12 Jun 2019</span>
                  </div>
                  <div className="md:flex-grow">
                    <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                      Company: {experience.company}
                    </h2>
                    <p className="leading-relaxed">
                      Position: {experience.position}
                    </p>
                    <p className="leading-relaxed">
                      Start Date: {experience.start_date}
                    </p>
                    <p className="leading-relaxed">
                      End Date: {experience.end_date}
                    </p>
                    <p className="leading-relaxed">
                      Description: {experience.description}
                    </p>
                    <a className="text-indigo-500 inline-flex items-center mt-4">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
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
            <p>No work experience data available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceInfo;
