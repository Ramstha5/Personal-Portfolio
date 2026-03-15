import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import myStore from "./store/index.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllProject from "./components/AllProject.jsx";
import Home from "./routes/Home.jsx";
import NotFound from "./components/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // layout with BottomMenu + Outlet
    children: [
      { index: true, element: <Home /> },          // default "/" route
      { path: "project-list", element: <AllProject /> },
      { path: "*", element: <NotFound /> },       // catch-all 404 page
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={myStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);