import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "flowbite";
import Home from "./pages/Home";
import Root from "./pages/Root";
import LoginForm from "./pages/LoginForm";
import Signup from "./pages/signup";
import LoanPage from "./pages/loanPage";
import JobPost from "./pages/jobPost";
import JobView from "./pages/jobView";
import UserProfile from "./userProfile";
import News from "./compo/News/News";
import BusinessNews from "./compo/News/BusinessNews";
import TechnologyNews from "./compo/News/TechnologyNews";
import AddBlog from "./compo/News/AddBlog";
import SubjectList from "./pages/SubjectList";
import LessonList from "./pages/lessonList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/studymaterial", element: <SubjectList /> },
      { path: "/subject/:id", element: <LessonList /> },
      { path: "/jobpost", element: <JobPost /> },
      { path: "/jobs", element: <JobView /> },
      { path: "/loan", element: <LoanPage /> },
      { path: "/user", element: <UserProfile /> },
      { path: "/login", element: <LoginForm /> },
      { path: "/signup", element: <Signup /> },
      { path: "/news", element: <News /> },
      { path: "/news/business", element: <BusinessNews /> },
      { path: "/news/technology", element: <TechnologyNews /> },
      { path: "/news/blogs", element: <AddBlog /> },

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
