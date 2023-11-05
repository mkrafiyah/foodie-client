import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Layout/MainPage";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import AllFood from "../Pages/AllFood/AllFood";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage></MainPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        },
        {
            path: '/allFood',
            element: <AllFood></AllFood>
        }
      ]
    },
  ]);



  export default router;