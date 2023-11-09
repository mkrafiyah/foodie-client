import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Layout/MainPage";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import AllFood from "../Pages/AllFood/AllFood";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import SingleFood from "../Pages/SingleFood/SingleFood";
import PurchaseFood from "../Pages/PurchaseFood/PurchaseFood";
import MyOrder from "../Pages/MyOrder/MyOrder";
import MyAddFood from "../Pages/MyAddFood/MyAddFood";
import Profile from "../Pages/Profile/Profile";
import NewAddedFoods from "../Pages/NewAddedFoods/NewAddedFoods";
import UpdateFoods from "../Pages/UpdateFoods/UpdateFoods";
import PrivateRout from "../Pages/PrivateRout/PrivateRout";

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
            path: '/allFoods',
            element: <AllFood></AllFood>,
            loader: ()=>fetch('https://restaurent-server-lime.vercel.app/allFoodsCount')
        },
        {
            path: '/allFoods/:Name',
            element: <PrivateRout><SingleFood></SingleFood></PrivateRout>
        },
        {
           path: '/allFoods/:Name/foodDetail/:id',
           element: <PurchaseFood></PurchaseFood>
        },
        
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/registration',
            element: <Registration></Registration>
        },
        {
                path: '/profile',
                element: <Profile></Profile>,
                children: [
                    {
                        path: '/profile/myOrder',
                        element: <MyOrder></MyOrder>
                    },
                    {
                        path:  '/profile/myAddFood',
                        element: <MyAddFood></MyAddFood>
                    },
                    {
                        path: '/profile/newAdded',
                        element: <NewAddedFoods></NewAddedFoods>
                    },
                    {
                
                        path: '/profile/newAdded/update/:id',
                        element: <UpdateFoods></UpdateFoods>
                     }
                    
                ]
            },
           
       
      ]
      
    },

  ]);



  export default router;