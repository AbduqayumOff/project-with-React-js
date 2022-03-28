import { toast } from "react-toastify";
import { blogActions } from "./blog-slice";

export const addNewBlog = (newBlog) => {
  return async (dispatch) => {
    try {
      dispatch(blogActions.loadingStart());
      const response = await fetch(
        "https://product-app-dc00f-default-rtdb.firebaseio.com/blogs.json",
        {
          method: "POST",
          body: JSON.stringify({
            blog: newBlog,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Error " + response.status);
      }
      toast.success("Qo'shildi 👌");
    } catch (err) {
      toast.error(err.message);
    }
    dispatch(blogActions.loadingFinish());
  };
};

export const fetchBlogs = () => {
  return async (dispatch) => {
    try {
      dispatch(blogActions.loadingStart());
      const response = await fetch(
        "https://product-app-dc00f-default-rtdb.firebaseio.com/blogs.json"
      );

      if (!response.ok) {
        throw new Error("Error " + response.status);
      }
      const data = await response.json();
      const blogsArray = [];
      for (const val in data) {
        blogsArray.unshift(data[val]);
      }
      dispatch(blogActions.fetchBlogs(blogsArray));
    } catch (err) {
      toast.error(err.message);
    }
    dispatch(blogActions.loadingFinish());
  };
};
