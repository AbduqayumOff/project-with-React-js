import { Navigate, useRoutes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Works from "../pages/works/Work";
import Blog from "../pages/blog/Blog";
import Contact from "../pages/contact/Contact";

const AppPath = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/works", element: <Works /> },
    { path: "/blog", element: <Blog /> },
    { path: "/contact", element: <Contact /> },
    { path: "*", element: <Navigate to="/" /> },
  ]);
};

export default AppPath;
