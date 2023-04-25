import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Header = () => {

  const {user,logOut} = useContext(AuthContext);
  const handleLogOut = () =>{
    logOut()
    .then(()=>{})
    .catch(error =>{
      console.log(error);
    })
  }

  return (
    <div>
      <div className="navbar bg--white  ">
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
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-screen"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="hover:text-indigo-600 normal-case font-semibold cursor-pointer text-xl">daisyUI</Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="flex gap-5 px-1 font-semibold">
            <li className="hover:text-indigo-600">
              <Link to="/">Home</Link>
            </li>
            {
              user && <li className="hover:text-indigo-600">
              <Link to="/profile">Your Profile</Link>
            </li>
            }
            <li className="hover:text-indigo-600">
              <Link to="/order">Orders</Link>
            </li>
            <li className="hover:text-indigo-600">
              <Link to="/login">Login</Link>
            </li>
            <li className="hover:text-indigo-600">
              <Link to="/register">Register</Link>
            </li>
            {
              user ? <>
              <span>{user.email}</span>
              <button onClick={handleLogOut} class="btn btn-active btn-accent">Logout</button>
              </>
              :
              <>
              <Link to="/login">Login</Link>
              </>
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
