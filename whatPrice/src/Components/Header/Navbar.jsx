import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <header className="">
      <div className="nav-md flex md:hidden  justify-between items-center bg-neutral-800 px-4 py-2">
        <div className="logo flex items-center gap-4 text-white">
          <img
            width={40}
            className="rounded-3xl"
            src="https://static.vecteezy.com/system/resources/thumbnails/015/972/886/small/creative-wp-letter-with-circle-modern-wp-logo-design-for-business-vector.jpg"
            alt=""
          />
          <strong>WhatPrice</strong>
        </div>
        <div className="toggle-navbar" onClick={() => setIsVisible(!isVisible)}>
          <img
            width={30}
            src="./svgicons/toggler.svg"
            alt=""
            className="invert cursor-pointer"
          />
        </div>
      </div>
      {isVisible && (
        <nav
          style={{ display: "flex" }}
          className="navbar md:w-auto w-fit hidden md:flex flex-col md:flex-row justify-between items-start md:items-center bg-neutral-800 p-2 gap-2 absolute md:relative right-6 top-16 md:right-0 md:top-0 rounded-md md:rounded-none
          z-10
          "
        >
          <div className="nav-left flex flex-col md:flex-row justify-center gap-5 items-start md:items-center">
            <div className="logo">
              <img
                className="rounded-3xl"
                width={40}
                src="https://static.vecteezy.com/system/resources/thumbnails/015/972/886/small/creative-wp-letter-with-circle-modern-wp-logo-design-for-business-vector.jpg"
                alt=""
              />
            </div>
            <ul className="flex gap-2 flex-col md:flex-row justify-center items-start md:items-center">
              <li className="mx-3 flex flex-row md:flex-col items-center hover:scale-110 duration-200 gap-2">
                <img
                  width={18}
                  src="./svgicons/home.svg"
                  alt=""
                  className="invert"
                />
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block   text-md font-bold
                rounded-md duration-200 
                ${isActive ? "text-orange-500" : "text-white"}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="mx-3 flex flex-row md:flex-col items-center hover:scale-110 duration-200 gap-2">
                <img width={18} src="./svgicons/news.svg" alt="" />
                <NavLink
                  to="/News"
                  className={({ isActive }) =>
                    `block   text-md font-bold
                rounded-md duration-200 
                ${isActive ? "text-orange-500" : "text-white"}`
                  }
                >
                  News
                </NavLink>
              </li>
              <li className="mx-3 flex flex-row md:flex-col items-center hover:scale-110 duration-200 gap-2">
                <img width={18} src="./svgicons/contact.svg" alt="" />
                <NavLink
                  to="/Contact"
                  className={({ isActive }) =>
                    `block   text-md font-bold
                rounded-md duration-200 
                ${isActive ? "text-orange-500" : "text-white"}`
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="nav-right flex flex-col md:flex-row gap-4 items-center mr-5">
            <div className="text-white flex flex-col">
              <ul>
                <li className="hover:scale-110 duration-200 bg-blue-500 px-2 py-1 rounded-sm">
                  <NavLink
                    to="/Reviews"
                    className={({ isActive }) =>
                      `block   text-md font-bold
                ${isActive ? "text-orange-500" : "text-white"}`
                    }
                  >
                    Reviews
                  </NavLink>
                </li>
              </ul>
            </div>
            <input
              className="rounded-3xl p-1 outline-none text-center"
              type="search"
              name="search"
              id="search"
            />
          </div>
        </nav>
      )}
    </header>
  );
}
export default Navbar;
