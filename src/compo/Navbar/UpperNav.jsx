import { Link } from "react-router-dom";
import LogoutButton from "../../pages/logout";
import { useUserStore } from "../../store/user";
import { useEffect } from "react";

function UpperNav() {
  const { user } = useUserStore();

  useEffect(() => {}, [user]);

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
            <span className="self-center text-2xl text-[#3C4852]  font-semibold whitespace-nowrap dark:text-white">
              Ministry of India
            </span>
          </div>
          <div className="justify-between flex items-center ">
            {user == null ? (
              <>
                <Link
                  to="/login"
                  className="text-sm text-[#08BD80]   dark:text-blue-500 hover:underline"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="text-sm mx-4 text-[#08BD80] dark:text-blue-500 hover:underline"
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
