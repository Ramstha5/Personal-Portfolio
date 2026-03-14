
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch data from Django API
export const fetchExperience = createAsyncThunk(
  "experience/fetchExperience",
  async () => {
    const response = await fetch("https://beby.pythonanywhere.com/api/experience/");
    const data = await response.json();
    return data;
  }
);

const experienceSlice = createSlice({
  name: "experience",
  initialState: [], // start empty
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchExperience.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const experienceAction = experienceSlice.actions;
export default experienceSlice;