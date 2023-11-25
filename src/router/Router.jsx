import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/Home";
import Introduce from "../pages/introduce/Introduce";
import Write from "../pages/write/Write";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/introduce", element: <Introduce /> },
      { path: "/write", element: <Write /> },
    ],
  },
]);

export default router;
