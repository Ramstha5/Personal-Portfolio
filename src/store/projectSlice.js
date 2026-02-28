import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_PRO = [
  {
    id: "1",
    year: "2025",
    project_image: "images/project1.jpg",
    title: "Food Ordering System",
    description:
"Developed a data-driven Online Food Ordering System analyzing user behavior and order patterns. Collected and cleaned transactional data, applied exploratory data analysis (EDA) to identify trends, and built predictive models to optimize menu recommendations. Focused on creating insightful visualizations and actionable data insights.",
    made: "Upstatement",
    language: {
      language_name: ["Programming & Libraries:", "Data & Databases", "DS & ML"],
    },
    link: "abc.com",
  },
  {
    id: "2",
    year: "2025",
    project_image: "images/project1.jpg",
    title: "Food Ordering System",
    description:
     "Developed a data-driven Online Food Ordering System analyzing user behavior and order patterns. Collected and cleaned transactional data, applied exploratory data analysis (EDA) to identify trends, and built predictive models to optimize menu recommendations. Focused on creating insightful visualizations and actionable data insights.",
    made: "Upstatement",
    language: {
      language_name: ["Programming & Libraries:", "Data & Databases", "DS & ML"],
    },
    link: "abc.com",
  },
  {
    id: "3",
    year: "2025",
    project_image: "images/project1.jpg",
    title: "Food Ordering System",
    description:
     "Developed a data-driven Online Food Ordering System analyzing user behavior and order patterns. Collected and cleaned transactional data, applied exploratory data analysis (EDA) to identify trends, and built predictive models to optimize menu recommendations. Focused on creating insightful visualizations and actionable data insights.",
    made: "Upstatement",
    language: {
      language_name: ["Programming & Libraries:", "Data & Databases", "DS & ML"],
    },
    link: "abc.com",
  },
  {
    id: "4",
    year: "2025",
    project_image: "images/project1.jpg",
    title: "Food Ordering System",
    description:
     "Developed a data-driven Online Food Ordering System analyzing user behavior and order patterns. Collected and cleaned transactional data, applied exploratory data analysis (EDA) to identify trends, and built predictive models to optimize menu recommendations. Focused on creating insightful visualizations and actionable data insights.",
    made: "Upstatement",
    language: {
      language_name: ["Programming & Libraries:", "DS & ML"],
    },
    link: "abc.com",
  },
  {
    id: "5",
    year: "2025",
    project_image: "images/project1.jpg",
    title: "Food Ordering System",
    description:
     "Developed a data-driven Online Food Ordering System analyzing user behavior and order patterns. Collected and cleaned transactional data, applied exploratory data analysis (EDA) to identify trends, and built predictive models to optimize menu recommendations. Focused on creating insightful visualizations and actionable data insights.",
    made: "Upstatement",
    language: {
      language_name: ["Programming & Libraries:", "DS & ML"],
    },
    link: "abc.com",
  },
  {
    id: "6",
    year: "2025",
    project_image: "images/project1.jpg",
    title: "Food Ordering System",
    description:
     "Developed a data-driven Online Food Ordering System analyzing user behavior and order patterns. Collected and cleaned transactional data, applied exploratory data analysis (EDA) to identify trends, and built predictive models to optimize menu recommendations. Focused on creating insightful visualizations and actionable data insights.",
    made: "Upstatement",
    language: {
      language_name: ["Programming & Libraries:", "DS & ML"],
    },
    link: "abc.com",
  },
  {
    id: "7",
    year: "2025",
    project_image: "images/project1.jpg",
    title: "Food Ordering System",
    description:
     "Developed a data-driven Online Food Ordering System analyzing user behavior and order patterns. Collected and cleaned transactional data, applied exploratory data analysis (EDA) to identify trends, and built predictive models to optimize menu recommendations. Focused on creating insightful visualizations and actionable data insights.",
    made: "Upstatement",
    language: {
      language_name: ["Programming & Libraries:", "Data & Databases", "DS & ML"],
    },
    link: "abc.com",
  },
  {
    id: "8",
    year: "2025",
    project_image: "images/project1.jpg",
    title: "Food Ordering System",
    description:
     "Developed a data-driven Online Food Ordering System analyzing user behavior and order patterns. Collected and cleaned transactional data, applied exploratory data analysis (EDA) to identify trends, and built predictive models to optimize menu recommendations. Focused on creating insightful visualizations and actionable data insights.",
    made: "Upstatement",
    language: {
      language_name: ["Programming & Libraries:", "Data & Databases", "DS & ML"],
    },
    link: "abc.com",
  },
  
];

const projectSlice = createSlice({
  name: "project",
  initialState: DEFAULT_PRO,
  reducers: {
    addInitialItems: (store, action) => {
      return store;
    },
  },
});
export const projectAction = projectSlice.actions;
export default projectSlice;
