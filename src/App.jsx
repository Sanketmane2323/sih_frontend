import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "flowbite";
import Home from "./pages/Home";

import Research from "./pages/Research";
import Root from "./pages/Root";
import LoginForm from "./pages/LoginForm";
import Signup from "./pages/signup";
import JobView from "./pages/jobView";
import LoanPage from "./pages/loanPage";
import StudyMaterial from "./pages/StudyMaterial";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/studymaterial", element: <StudyMaterial /> },
      { path: "/jobs", element: <JobView /> },
      { path: "/loan", element: <LoanPage /> },
      { path: "/research", element: <Research /> },
      { path: "/login", element: <LoginForm /> },
      { path: "/signup", element: <Signup /> },
      
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
