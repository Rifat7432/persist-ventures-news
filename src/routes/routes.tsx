import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { appPaths } from "./app.routes";
import { routeGenerator } from "../utils/routes.genaerator";
import NotFound from "../pages/NotFound/NotFound";

//all  routs
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/",
    element: <App />,
    children: routeGenerator(appPaths),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default router;
