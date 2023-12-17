import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "flowbite";
import Home from "./pages/Home";
import StudyMaterial from "./pages/StudyMaterial";
import Employment from "./pages/Employment";
import Loan from "./pages/Loan";
import Research from "./pages/Research";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/studymaterial", element: <StudyMaterial /> },
      { path: "/employment", element: <Employment /> },
      { path: "/loan", element: <Loan /> },
      { path: "/research", element: <Research /> },
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
