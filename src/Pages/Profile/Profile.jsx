import { Outlet } from "react-router-dom";
import {Helmet} from "react-helmet";


const Profile = () => {
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>R-Foodie|Profile</title>
            </Helmet>
            
            <Outlet></Outlet>
        </div>
    );
};

export default Profile;