import React, { useState } from 'react';

const LogoutButton = () => {
  // localStorage.removeItem('token')
  const [message, setMessage] = useState('');

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');

      if (!token) {
        setMessage('Token not found. Please log in.');
        return;
      }

      const response = await fetch('http://127.0.0.1:8000/auth/logout/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`,
        },
  
      });

      if (response.ok) {
        localStorage.removeItem('token');
        const data = await response.json();
        setMessage(data.detail);
      } else {
        setMessage('Logout failed');
      }
    } catch (error) {
      console.error('Error during logout:', error);
      setMessage('Error during logout');
    }
  };

  return (
    <div>
      {message && <p>{message}</p>}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LogoutButton;



