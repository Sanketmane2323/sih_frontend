import React, { useState, useEffect } from "react";

const JobView = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/grant/jobs/");
        const jobData = await response.json();

        // Fetch user details for each job if user is logged in
        const jobsWithUserDetails = await Promise.all(
          jobData.map(async (job) => {
            let userName = ""; // Default value if user is not logged in

            // Check if the authentication token is present in localStorage
            const authToken = localStorage.getItem("token");

            if (authToken) {
              try {
                const userResponse = await fetch(
                  `http://127.0.0.1:8000/auth/users/${job.posted_by}/`,
                  {
                    headers: {
                      Authorization: `Token ${authToken}`,
                    },
                  }
                );

                const userData = await userResponse.json();
                userName = userData.username; // Assuming user details contain a 'username' field
              } catch (error) {
                console.error("Error fetching user data:", error);
              }
            }

            return {
              ...job,
              userName,
            };
          })
        );

        setJobs(jobsWithUserDetails);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60"
            >
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                {job.title}
              </h2>
              <p className="leading-relaxed text-base mb-4">
                {job.description}
              </p>
              <p className="leading-relaxed text-base mb-4">
                <b>Location:</b> {job.location}
              </p>
              <p className="leading-relaxed text-base mb-4">
                <b>Salary:</b> {job.salary}
              </p>
              <p className="leading-relaxed text-base mb-4">
                <b>Posted By:</b> {job.userName}
              </p>
              <button className="flex mx-auto mt-4 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobView;
