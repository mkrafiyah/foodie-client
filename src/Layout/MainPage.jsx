import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import {Helmet} from "react-helmet";


const MainPage = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Helmet>
                <title>R-Foodie|Home</title>
            </Helmet>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainPage;