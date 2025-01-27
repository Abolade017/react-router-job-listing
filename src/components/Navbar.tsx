//@ts-ignore
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className=" py-20 flex justify-between items-center">
        <div>
          {" "}
          <img src="/images/logo.svg" alt="navbar-logo" />
        </div>
        <div>
          <nav className="flex space-x-10 items-center">
            <ul className="flex space-x-6">
              <NavLink to="/">
                {" "}
                <li className=" text-lg">Home</li>
              </NavLink>

              <NavLink to="/about">
                {" "}
                <li className=" text-lg">About</li>
              </NavLink>
              <NavLink to="/products">
                {" "}
                <li className=" text-lg">Products</li>
              </NavLink>
              <NavLink to="/contact">
                {" "}
                <li className=" text-lg">Contact</li>
              </NavLink>
              <NavLink to="/jobs">
                {" "}
                <li className=" text-lg">Jobs</li>
              </NavLink>
            </ul>
            <button
              onClick={() => navigate("/about")}
              className="text-dark-grayish-blue rounded-3xl outline outline-very-dark-blue px-2 h-9 w-32 "
            >
              Get Started
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
