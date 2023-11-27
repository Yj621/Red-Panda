import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/Home";
import Introduce from "../pages/introduce/Introduce";
import Detail from "../pages/detail/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/introduce", element: <Introduce /> },
      { path: "detail/:id", element: <Detail /> },
    ],
  },
]);

export default router;
