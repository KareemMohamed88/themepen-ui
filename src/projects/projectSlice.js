import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: null,
};

export const projectsFetch = createAsyncThunk(
  "projects/projectsFetch",
  async () => {
    try {
      const response = await axios.get(
        "https://v2-server.onrender.com/projects"
      );
      return response.data;
    } catch (err) {
     console.log(err)
    }
  }
);

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
  extraReducers: {
    [projectsFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [projectsFetch.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [projectsFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export default projectSlice.reducer;
