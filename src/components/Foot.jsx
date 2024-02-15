import React from "react";
import { NavLink } from "react-router-dom";
const Foot = () => {
  const token = localStorage.getItem("token")
  const darkMode = localStorage.getItem("theme")
  return (
    <div className="footer w-100% bg-white text-slate-800 dark:bg-slate-900 dark:text-white pt-28">
      <div className="p-8 border-b dark:border-slate-400/20">
        <img
          width="200px"
          className="logo"
          height="100px"
          src={require(darkMode === "light" ? "../assets/Logo-dark.png" : "../assets/Logo.png")}
          alt="logo"
        />
        <ul className="flex flex-wrap gap-y-3 mt-4">
          <li className="inline-block text-inherit relative hover:text-mainColor">
            <NavLink className={({ isActive }) => `px-4 mb-5 ${isActive && "text-white bg-mainColor px-4 py-2 rounded"}`} to="/">
              Home
            </NavLink>
          </li>
          <li className="inline-block text-inherit relative hover:text-mainColor">
            <NavLink className={({ isActive }) => `px-4 mb-5 ${isActive && "text-white bg-mainColor px-4 py-2 rounded"}`} to="/contact">
              Contact us
            </NavLink>
          </li>
          <li className="inline-block text-inherit relative hover:text-mainColor">
            <NavLink className={({ isActive }) => `px-4 mb-5 ${isActive && "text-white bg-mainColor px-4 py-2 rounded"}`} to="/install">
              installation
            </NavLink>
          </li>
          {token && (
            <li className="inline-block text-inherit relative hover:text-mainColor">
              <NavLink className={({ isActive }) => `px-4 mb-5 ${isActive && "text-white bg-mainColor px-4 py-2 rounded"}`} to="/profile">
                profile
              </NavLink>
            </li>
          )}
        </ul>
      </div>
      <div className="p-8 flex items-center justify-between flex-col">
        <h3 className="mb-2 font-sans">&copy; Themepen, All rights reserved</h3>
        <ul className="flex gap-7">
            <li><NavLink className="text-slate-800 text-sm cursor-pointer" to="https://www.facebook.com/themepen/"><i class="fa-brands fa-facebook-f"></i></NavLink></li>
            <li><NavLink className="text-slate-800 text-sm cursor-pointer" to="https://www.instagram.com/themepen/"><i class="fa-brands fa-instagram"></i></NavLink></li>
            <li><NavLink className="text-slate-800 text-sm cursor-pointer" to="https://pin.it/3HNghSj5U"><i class="fa-brands fa-pinterest-p"></i></NavLink></li>
          </ul>
      </div>
    </div>
  );
};

export default Foot;
