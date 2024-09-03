import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from '../../public/RealEstate_Residance01.png'

const NavBar = () => {

    const navLinks = (
      <>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/properties"}>Properties</NavLink>
        </li>
        <li>
          <NavLink to={"/blog"}>Blog</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/faq"}>FAQ</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact Us</NavLink>
        </li>
      </>
    );
    return (
      <div className="navbar bg-[#175151]">
        <div className="navbar-start flex items-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl ">
            <img className="h-full" src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white font-bold">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end space-x-5">
          <Link to={"/login"}>
            <button className="btn bg-yellow-300 border-none px-6 py-2 text-[#175151] font-bold">
              Login
            </button>
          </Link>
          <Link>
            <button className="btn  bg-yellow-300 border-none px-6 py-2 text-[#175151] font-bold">
              Logout
            </button>
          </Link>
        </div>
      </div>
    );
};

export default NavBar;