import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import myStore from "./store/index.js";

// Components
import App from "./App.jsx";
import Home from "./routes/Home.jsx";
import AllProject from "./components/AllProject.jsx";
import ProjectDetails from "./components/ProjectDetails.jsx";
import ExperienceDetails from "./components/ExperienceDetails.jsx";
import SpinnerImage from "./components/SpinnerImage.jsx";
import NotFound from "./components/NotFound.jsx";
import WritingDetails from "./components/WritingDetails.jsx";

// Router
const router = createBrowserRouter([
  {
    path: "/", // main layout
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "project-list", element: <AllProject /> },
      { path: "spinner", element: <SpinnerImage /> },
      { path: "project/:id", element: <ProjectDetails /> },
      { path: "experience/:id", element: <ExperienceDetails /> },
      { path: "/writing/:id", element: <WritingDetails /> },
    ],
  },
  { path: "*", element: <NotFound /> }, // catch-all
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={myStore}>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </Provider>
  </StrictMode>
);