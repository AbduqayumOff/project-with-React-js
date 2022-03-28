import { configureStore } from "@reduxjs/toolkit";
import { blogSlice } from "./blog/blog-slice";
import { authSlice } from "./auth/auth-slice";

const store = configureStore({
  reducer: { blog: blogSlice.reducer, auth: authSlice.reducer },
});

export default store;
