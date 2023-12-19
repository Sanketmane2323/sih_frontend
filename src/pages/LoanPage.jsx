import React, { useState, useEffect } from "react";
import Search from "../compo/Search";

function LoanPage() {
  console.log(localStorage);
  const [schemes, setSchemes] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/scheme/loans/");
        const data = await response.json();
        setSchemes(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (query) => {
    const lowercasedQuery = query.toLowerCase();
    const filtered = schemes.filter(
      (scheme) =>
        scheme.title.toLowerCase().includes(lowercasedQuery) ||
        scheme.description.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredSchemes(filtered);
  };

  return (
    <>
      <div className="mt-10">
        <div className="px-20">
          <Search onClick={handleSearch} />
        </div>
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="-my-8 divide-y-2 divide-gray-100">
              {schemes.map((scheme) => (
                <div
                  key={scheme.id}
                  className="py-8 flex flex-wrap md:flex-nowrap"
                >
                  <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <span className="font-semibold title-font text-gray-700">
                      {scheme.category}
                    </span>
                    <span className="mt-1 text-gray-500 text-sm">
                      12 Jun 2019
                    </span>
                  </div>
                  <div className="md:flex-grow">
                    <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                      {scheme.title}
                    </h2>
                    <p className="leading-relaxed">{scheme.description}</p>
                    <a
                      href={scheme.apply_src}
                      className="text-indigo-500 inline-flex items-center mt-4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
              ))}
            </div>
          </div>
        </section>
      </div>
    </>

  );
}

export default LoanPage;
