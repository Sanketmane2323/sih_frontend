import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const LessonList = () => {
  const [lessons, setLessons] = useState([]);

  const { id } = useParams();


  useEffect(() => {
    // Fetch data from the API
    fetch(`http://127.0.0.1:8000/api/lessons/${id}/`)  
      .then((response) => response.json())
      .then((data) => setLessons(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <div class="flex flex-wrap w-full">
          <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
              <div key={lessons.id} class="flex relative pb-12">
                <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    STEP {lessons.id}
                  </h2>
                  <p class="leading-relaxed">{lessons.title}</p>
                  <a href={lessons.url}>Lesson {lessons.id}</a>
                  <br></br>
                  <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Done
                  </button>
                </div>
              </div>

            <div class="flex relative">
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
              </div>
              <div class="flex-grow pl-4">
                <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  FINISH
                </h2>
                <p class="leading-relaxed">
                  Det Access to E-Books , Assesments etc.
                </p>
              </div>
            </div>
          </div>
          <h1>Hello</h1>
        </div>
      </div>
    </section>
  );
};

export default LessonList;
