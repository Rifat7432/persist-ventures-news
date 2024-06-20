import BlogPage from "../pages/Blog/BlogPage";
import DetailPage from "../pages/Detail/DetailPage";
import HomePage from "../pages/Home/HomePage";

// create route and nav items
export const appPaths = [
  {
    index: true,
    element: <HomePage></HomePage>,
  },
  {
    name: "Home",
    path: "/",
    element: <HomePage></HomePage>,
  },
  {
    name: "Detail",
    path: "detail/:newsId",
    element: <DetailPage></DetailPage>,
  },
  {
    name: "Blog",
    path: "blog",
    element: <BlogPage></BlogPage>,
  },
];
