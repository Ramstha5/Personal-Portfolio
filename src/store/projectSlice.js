
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch data from Django API
export const fetchProjects = createAsyncThunk(
  "project/fetchProjects",
  async () => {
    const response = await fetch("https://beby.pythonanywhere.com/api/projects/"); // Django API endpoint
    const data = await response.json();
    return data;
  }
);

const projectSlice = createSlice({
  name: "project",
  initialState: [], // Start empty
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProjects.fulfilled, (state, action) => {
      return action.payload; // Replace state with fetched data
    });
  },
});

export const projectAction = projectSlice.actions;
export default projectSlice;