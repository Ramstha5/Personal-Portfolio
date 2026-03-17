import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import myStore from "./store/index.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import AllProject from "./components/AllProject.jsx";
import Home from "./routes/Home.jsx";
import NotFound from "./components/NotFound.jsx";
import SpinnerImage from "./components/SpinnerImage.jsx";

// Router setup with SEO-ready 404
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // layout with BottomMenu + Outlet
    children: [
      { index: true, element: <Home /> },
      { path: "project-list", element: <AllProject /> },
      { path: "spinner", element: <SpinnerImage /> },

    ],
  },
  {
    path: "*", // root-level catch-all for unknown URLs
    element: <NotFound />,
  },
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