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
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/app", element: <App /> },
      { path: "/project-list", element: <AllProject /> },
      { path: "*", element: <NotFound /> },
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
