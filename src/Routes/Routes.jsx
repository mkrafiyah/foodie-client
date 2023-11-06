import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Layout/MainPage";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import AllFood from "../Pages/AllFood/AllFood";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage></MainPage>,
      errorElement: <ErrorPage></ErrorPage>,
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
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/registration',
            element: <Registration></Registration>
        }
      ]
    },
  ]);



  export default router;