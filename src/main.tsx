import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { RootRoute } from "./routes/root";

import "./index.css";
import { MapExampleRoute } from "./routes/map-example";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRoute />,
    children: [
      {
        path: "/",
        // element: <HomeRoute />,
      },
      {
        path: "/about",
        // element: <AboutRoute />,
      },
      {
        path: "/map-example",
        element: <MapExampleRoute />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
