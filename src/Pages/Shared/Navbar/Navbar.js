import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const Navbar = () => {
  const {user, signOutUser} = useContext(AuthContext);
  const handleLogout = () => {
    signOutUser()
    .then( () => {
        toast.success('Logout successful')
    })
    .catch( error => console.error(error))
}
    const navItems = 
        <React.Fragment>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/media">Media</Link></li>
            {
              user?.uid? <>
              <li><Link to="/message">Message</Link></li>
            <li><Link to="about">About</Link></li>
            <li><Link onClick={handleLogout} to="/">Logout</Link></li>
        <span className='mt-3 font-bold text-rose-500'>{user?.displayName}</span>
              </>
              :
            <li><Link to="/signIn">Sign In</Link></li>
            }
            
        </React.Fragment>
    
  return (
    <div className="navbar bg-slate-200 font-semibold sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={1}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
           {navItems}
          </ul>
        </div>
        <Link className="btn btn-ghost font-bold  normal-case lg:text-2xl text-xl" to="/">postPad</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
