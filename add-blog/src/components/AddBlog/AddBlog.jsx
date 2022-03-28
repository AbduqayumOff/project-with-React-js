import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNewBlog } from "../../store/blog/blog-actions";

const AddBlog = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.blog.isLoading);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBlog = {
      title: event.target.title.value,
      imgURL: event.target.imgURL.value,
      description: event.target.description.value,
    };
    dispatch(addNewBlog(newBlog));
    event.target.reset();
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-6 offset-3">
          <h2>Add a new blog</h2>
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    required={true}
                    type="text"
                    className="form-control"
                    id="title"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="imgURL" className="form-label">
                    Img URL
                  </label>
                  <input
                    required={true}
                    type="text"
                    className="form-control"
                    id="imgURL"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    required={true}
                    type="text"
                    className="form-control"
                    id="description"
                  />
                </div>
                <button
                  disabled={isLoading}
                  type="submit"
                  className="btn btn-primary"
                >
                  {isLoading && (
                    <span className="spinner-border spinner-border-sm text-light" />
                  )}
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
