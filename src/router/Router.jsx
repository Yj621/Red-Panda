import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/Home";
import Introduce from "../pages/introduce/Introduce";
import Detail from "../pages/detail/Detail";
import Write from "../pages/write/Write";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/introduce", element: <Introduce /> },
      { path: "detail/:id", element: <Detail /> },
      { path: "/write", element: <Write /> },
    ],
  },
]);

export default router;
