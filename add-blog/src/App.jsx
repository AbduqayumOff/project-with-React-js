import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layouts/navbar/Navbar";
import AddBlog from "./components/AddBlog/AddBlog";
import { ToastContainer } from "react-toastify";
import Greeting from "./components/Greeting/Greeting";
import NotFound from "./components/NotFound/NotFound";
import SignIn from "./components/SignIn/SignIn";
import { useSelector, useDispatch } from "react-redux";
import { signInWithGoogle } from "./store/auth/auth-actions";
import Home from "./components/Home/Home";

function App() {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.auth.isLogged);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(signInWithGoogle());
  }, [dispatch]);

  return (
    <BrowserRouter>
      {isLogged && user?.name && <Navbar />}
      <Routes>
        {isLogged && (
          <Route path="/">
            <Route index element={<Home />} />
            {user?.name && <Route path="add-blog" element={<AddBlog />} />}
            {user?.name && <Route path="test" element={<Greeting />} />}
            <Route path="/sign-in" element={<SignIn />} />
          </Route>
        )}

        {isLoading && "Loading..."}
        {!isLoading && <Route path="*" element={<NotFound />} />}
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
