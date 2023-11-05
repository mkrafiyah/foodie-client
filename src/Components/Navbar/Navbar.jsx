import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar bg-amber-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li>
                            <NavLink to='/allFood'><a>All Food Items</a></NavLink>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Blog</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-3xl italic ml-0 mb-3">
                <img className="w-[60px] h-[60px] border-amber-950 rounded-full gap-0" src="https://i.ibb.co/hXzSvkN/R.jpg" alt="" />
                    Foodie</a>
                    
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li tabIndex={0}>
                        <details>
                            <summary><NavLink to='/allFood'>All Food Items</NavLink></summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><NavLink to='/blog'><a>Blog</a></NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-ghost btn-sm">Login</a>
            </div>
        </div>
    );
};

export default Navbar;