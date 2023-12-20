import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  // localStorage.removeItem('token')
  const [message, setMessage] = useState("");

  const handleLogout = async () => {
    try {
      // Get the token from the cookie
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        .split("=")[1];

      if (!token) {
        setMessage("Token not found. Please log in.");
        return;
      }

      const response = await fetch("http://127.0.0.1:8000/auth/logout/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      });

      if (response.ok) {
        // Remove the token from the cookie
        document.cookie =
          "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

        navigate("/");

        const data = await response.json();
        setMessage(data.detail);
      } else {
        setMessage("Logout failed");
      }
    } catch (error) {
      console.error("Error during logout:", error);
      setMessage("Error during logout");
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
