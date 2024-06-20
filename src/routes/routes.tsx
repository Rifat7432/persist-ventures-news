import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { appPaths } from "./app.routes";
import { routeGenerator } from "../utils/routes.genaerator";

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
]);
export default router;
