import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <div className="navbar bg-blue-300 shadow-sm"> {/* Navbar background blue */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
              <NavLink to='/' className="text-xl">Home</NavLink>
              </li>
              <li>
                <NavLink to='/about' className="text-xl">About</NavLink>
              </li>
              <li>
                <NavLink to='/todo' className="text-xl">To Do</NavLink>
              </li>
            </ul>
          </div>
          <NavLink to='/' className="btn btn-ghost text-2xl text-black">  {/* Text color white */}
            Knowledge
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
            <NavLink to='/' className="text-xl">Home</NavLink>
            </li>
            <li>
                <NavLink to='/about' className="text-xl">About</NavLink>
              </li>
            <li>
            <NavLink to='/todo' className="text-xl">To Do</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end text-xl">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button className="btn btn-primary text-xl">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;