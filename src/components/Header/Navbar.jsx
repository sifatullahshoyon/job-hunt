import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-indigo-50">
      <div className="container mx-auto py-14">
        <div className="navbar font-manrope">
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
                className="menu menu-sm dropdown-content bg-white shadow mt-3 z-[1] p-2 w-52"
              >
                <li>
                  <a className="text-lg">Home</a>
                </li>
                <li>
                  <a className="text-lg">Statistics</a>
                </li>
                <li>
                  <a className="text-lg">Applied Jobs</a>
                </li>
                <li>
                  <a className="text-lg">Blog</a>
                </li>
              </ul>
            </div>
            <a className="text-4xl font-manrope font-bold text-black">JobHunt</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a className="text-lg">Home</a>
              </li>
              <li>
                <a className="text-lg">Statistics</a>
              </li>
              <li >
                  <summary className="text-lg">Applied Jobs</summary> 
              </li>
              <li>
                <a className="text-lg">Blog</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn-primary">Star Applying</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
