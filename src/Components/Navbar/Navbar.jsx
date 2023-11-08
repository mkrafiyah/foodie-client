import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import {FaUser} from 'react-icons/fa';

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then(()=>console.log('loged out'))
        .catch(error=>console.error(error))
    }
    return (
        <div className="navbar bg-amber-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a><NavLink to='/'>Home</NavLink></a></li>
                        <li><a><NavLink to='/allFoods'>All Food Items</NavLink></a></li>
                        <li><a><NavLink to='/blog'>Blog</NavLink></a></li>
                        {
                           user?.email? <>
                           <NavLink to='/profile'>Profile</NavLink>
                           <ul >
                                <li><a>My added food items</a></li>
                                <NavLink to='/profile/myAddFood'>
                                <li><a>Add a food item</a></li>
                                </NavLink>
                                
                                <NavLink to='/profile/myOrder'><li><a>My ordered food items</a></li></NavLink>
                            </ul>
                           </> :
                          <NavLink to='/login'>
                          <a className="btn btn-ghost btn-sm">Login</a>
                           </NavLink>
                        }
                        
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-3xl italic ml-0 mb-3">
                <img className="w-[60px] h-[60px] border-amber-950 rounded-full gap-0" src="https://i.ibb.co/hXzSvkN/R.jpg" alt="" />
                    Foodie</a>
                    
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a><NavLink to='/'>Home</NavLink></a></li>
                    <li><a><NavLink to='/allFoods'>All Food Items</NavLink></a></li>
                    <li><a><NavLink to='/blog'>Blog</NavLink></a></li>
                    
                    
                    <li tabIndex={0}>
                    {
                                user?.email? <>
                        <details>
                           
                                <summary><NavLink to='/profile'>Profile</NavLink></summary>
                            <ul className="p-2 w-[200px]">
                                <li><a>My added food items</a></li>
                                <NavLink to='/profile/myAddFood'>
                                <li><a>Add a food item</a></li>
                                </NavLink>
                                <NavLink to='/profile/myOrder'><li><a>My ordered food items</a></li></NavLink>
                            </ul>
                            </details>
                                </> 
                                : 
                                   <p> <FaUser></FaUser></p>
                            }
                             </li>
                            
                       
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                    <span>{user.email}</span>
                    <a onClick={handleLogOut} className="btn btn-sm">Sign Out</a>
                    </> :
                    <NavLink to='/login'>
                    <a className="btn btn-ghost btn-sm">Login</a>
               </NavLink>

                }
             </div>
        </div>
    );
};

export default Navbar;