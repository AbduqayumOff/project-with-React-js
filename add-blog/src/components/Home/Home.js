import React, { Fragment } from "react";
import Blogs from "../Blogs/Blogs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const user = useSelector((state) => state.auth.user);

  const navigate = useNavigate();
  return <Fragment>{user?.name ? <Blogs /> : navigate("/sign-in")}</Fragment>;
};

export default Home;
