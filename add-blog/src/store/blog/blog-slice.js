import { createSlice } from "@reduxjs/toolkit";

const initialBlogState = {
  blogs: [],
  isLoading: false,
};

export const blogSlice = createSlice({
  name: "blog",
  initialState: initialBlogState,
  reducers: {
    loadingStart(state) {
      state.isLoading = true;
    },
    loadingFinish(state) {
      state.isLoading = false;
    },
    fetchBlogs(state, action) {
      state.blogs = action.payload;
    },
  },
});

export const blogActions = blogSlice.actions;
