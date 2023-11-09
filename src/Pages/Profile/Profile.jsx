import { Outlet } from "react-router-dom";


const Profile = () => {
    return (
        <div className="min-h-screen">
            
            <Outlet></Outlet>
        </div>
    );
};

export default Profile;