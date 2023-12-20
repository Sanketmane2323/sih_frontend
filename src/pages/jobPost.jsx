import React, { useState } from 'react';

const JobPost = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    salary: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };       

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Job Created")
    const apiUrl = 'http://127.0.0.1:8000/grant/jobs/';
    const authToken = localStorage.getItem('token');
    console.log(localStorage);
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${authToken}`, 
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success, e.g., show a success message or redirect
        console.log('Data submitted successfully');
      } else {
        // Handle error, e.g., show an error message
        console.error('Failed to submit data, u must be logged in and only admin can upload jobs...');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
    }

  };

  return (
    <div className="p-10">
      <h1 className="text-lg">
        <center>Post Jobs</center>
      </h1>
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
            Title
          </label>
          <input
            type="text"
            id="small-input"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-white-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
            Description
          </label>
          <input
            type="text"
            id="large-input"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="block w-full p-4 text-white-900 border border-gray-300 rounded-lg bg-white-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
            Location
          </label>
          <input
            type="text"
            id="base-input"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
            Salary
          </label>
          <input
            type="text"
            id="salary"
            name="salary"
            value={formData.salary}
            onChange={handleInputChange}
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <br></br>
        <button
          type="submit"
         
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default JobPost;
