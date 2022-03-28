import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBlogs } from "../../store/blog/blog-actions";

const Blogs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  const isLoading = useSelector((state) => state.blog.isLoading);
  const blogs = useSelector((state) => state.blog.blogs);

  const fetchData = () => {
    if (blogs.length > 0) {
      return blogs.map((item, index) => (
        <div className="col-3" key={index}>
          <div className="card mb-2">
            <div className="card-body">
              <img src={item.blog.imgURL} alt={item.blog.title} className="w-100"/>
              <h3>{item.blog.title}</h3>
              <p>{item.blog.description}</p>
            </div>
          </div>
        </div>
      ));
    }
    return <div>No data</div>;
  };

  return (
    <div className="container my-2">
      <h1>Blogs</h1>
      <div className="row">
        {isLoading && (
          <div className="col text-center">
            <span className="spinner-border spinner-border-sm text-dark" />
          </div>
        )}
        {!isLoading && fetchData()}
      </div>
    </div>
  );
};

export default Blogs;
