import { Outlet } from "react-router-dom";


const MainPage = () => {
    return (
        <div className="max-w-7xl mx-auto">
            
            <Outlet></Outlet>
        </div>
    );
};

export default MainPage;