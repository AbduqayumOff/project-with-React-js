import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isLoading: false,
  isLogged: false,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    signIn(state, action) {
      state.isLogged = true;
      state.user = action.payload;
    },
    loadingStart(state) {
      state.isLoading = true;
    },
    loadingFinish(state) {
      state.isLoading = false;
    },

    logOut(state) {
      state.isLogged = false;
      state.user = null;
    },
  },
});

export const authActions = authSlice.actions;
