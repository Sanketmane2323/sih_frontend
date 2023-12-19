import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoutButton from "../../pages/logout";

function UpperNav() {
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Get the token from the cookie
    const cookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="));

    if (cookie) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    // Navigate to '/' to trigger a re-render
    navigate("/");
  }, [navigate]);

  // ... rest of your component ...

  // ... rest of your component ...

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <div className="flex items-center">
            <img
              src="./Images/National-Emblem.png"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Ministry of India
            </span>
          </div>
          <div className="justify-between flex items-center ">
            {visible ? (
              <>
                <Link
                  to="/login"
                  className="text-sm text-blue-500  dark:text-blue-500 hover:underline"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="text-sm mx-4 text-blue-500 dark:text-blue-500 hover:underline"
                >
                  SignUp
                </Link>
              </>
            ) : (
              <LogoutButton />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default UpperNav;
