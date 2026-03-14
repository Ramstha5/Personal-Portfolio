// import { createSlice } from "@reduxjs/toolkit";

// const DEFAULT_PRO = [
//   {
//     id: "1",
//     writing_image: "images/writing.png",
//     date: "2023",
//     title: "Integrating Algolia Search with WordPress Multisite",
//   },
//   {
//     id: "2",
//     writing_image: "images/writing.png",
//     date: "2025",
//     title: "Integrating Algolia Search with WordPress Multisite",
//   },
// ];

// const writingSlice = createSlice({
//   name: "writing",
//   initialState: DEFAULT_PRO,
//   reducers: {
//     addInitialItems: (store, action) => {
//       return store;
//     },
//   },
// });
// export const writingAction = writingSlice.actions;
// export default writingSlice;


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch writing data from Django API
export const fetchWriting = createAsyncThunk(
  "writing/fetchWriting",
  async () => {
    const response = await fetch("https://beby.pythonanywhere.com/api/writing/"); // Django API endpoint
    const data = await response.json();
    return data;
  }
);

const writingSlice = createSlice({
  name: "writing",
  initialState: [], // Start empty
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWriting.fulfilled, (state, action) => {
      return action.payload; // Replace state with fetched data
    });
  },
});

export const writingAction = writingSlice.actions;
export default writingSlice;