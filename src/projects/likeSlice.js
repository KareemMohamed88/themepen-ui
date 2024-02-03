import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likeProjects: localStorage.getItem("likedItems")
    ? JSON.parse(localStorage.getItem("likedItems"))
    : [],
  currentProject: null,
};

const likeSlice = createSlice({
  name: "likedItems",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    fetchSuccess: (state, action) => {
      state.loading = false;
      state.currentVideo = action.payload;
    },
    fetchFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    like: (state, action) => {
      state.likeProjects.push({id: action.payload});
      localStorage.setItem("likedItems", JSON.stringify(state.likeProjects));
    },
    desLike: (state, action) => {
      const nextLikedItem = state.likeProjects.filter(
        (cartItem) => cartItem._id !== action.payload._id
      );
      state.likeProjects = nextLikedItem;
      localStorage.setItem("likedItems", JSON.stringify(state.likeProjects));
    },
  },
});

export const { like, desLike } = likeSlice.actions;

export default likeSlice.reducer;
