import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_EXP = [
  {
    id: "1",
    date: "2025 - PRESENT",
    position: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    project_name: "ABC",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eveniet quo ducimus in velit veniam, laboriosam inventore amet aut nostrum?...",
    language: {
      language_name: ["Programming & Libraries:", "Data & Databases", "Machine Learning & AI"],
    },
  },
  {
    id: "2",
    date: "2024-2025",
    position: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    project_name: "ABC",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eveniet quo ducimus in velit veniam, laboriosam inventore amet aut nostrum?...",
    language: {
      language_name: ["Programming & Libraries:", "Data & Databases", "Machine Learning & AI"],
    },
  },
];

const experienceSlice = createSlice({
  name: "experience",
  initialState: DEFAULT_EXP,
  reducers: {
    addInitialItems: (store, action) => {
      return store;
    },
  },
});

export const experienceAction = experienceSlice.actions;
export default experienceSlice;
