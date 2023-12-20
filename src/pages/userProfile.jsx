import React, { useState, useEffect } from 'react';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Retrieve the token from local storage
        const token = localStorage.getItem('token'); // Replace 'yourTokenKey' with the actual key you used to store the token
        const userid = localStorage.getItem('id');
        const response = await fetch(`http://127.0.0.1:8000/profile/personal/${userid}/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`, // Include the token in the Authorization header
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect will run once when the component mounts

  



  return (
    <div>
      {userData  ? (
        <div class="p-16">
        <div class="p-8 bg-white shadow mt-24">
          <div class="grid grid-cols-1 md:grid-cols-3">
            <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
              <div>
                <p class="font-bold text-gray-700 text-xl">22</p>
                <p class="text-gray-400">Courses</p>
              </div>
              <div>
                   <p class="font-bold text-gray-700 text-xl">10</p>
                <p class="text-gray-400">Assesments</p>
              </div>
                  <div>
                   <p class="font-bold text-gray-700 text-xl">89</p>
                <p class="text-gray-400">Comments</p>
              </div>
            </div>
            <div class="relative">
              <div class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
        <svg xmlns="https://picsum.photos/200" class="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
              </div>
            </div>
        
            <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
        <button
          class="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
        >
          Resume
        </button>
            <button
          class="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
        >
          Jobs 
        </button>
            </div>
          </div>
        
          <div class="mt-20 text-center border-b pb-12">
            <h1 class="text-4xl font-medium text-gray-700">{userData.first_name} {userData.last_name}, <span class="font-light text-gray-500">27</span></h1>
            <p class="font-light text-gray-600 mt-3">Bucharest, Romania</p>
        
            <p class="mt-8 text-gray-500">{userData.contact}</p>
            <p class="mt-2 text-gray-500">University of Computer Science</p>
          </div>
        
          <div class="mt-12 flex flex-col justify-center">
            <p class="text-gray-600 text-center font-light lg:px-16">{userData.about}</p>
            {/*  */}
        
          </div>
        
        </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserProfile;


