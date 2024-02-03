import React from "react";
import { NavLink } from "react-router-dom";
const Foot = () => {
  const token = localStorage.getItem("token")
  const darkMode = localStorage.getItem("theme")
  return (
    <div className="footer w-100% bg-white text-slate-800 dark:bg-slate-900 dark:text-white">
      <div className="p-8 border-b dark:border-slate-400/20">
        {darkMode === "light" ? (
          <img
            width="200px"
            src={"https://i.postimg.cc/8zDVjwR5/Logo-dark.png"}
            alt="logo"
          />) : (<img
            width="200px"
            src={"https://i.postimg.cc/kMxWJnqW/Logo-1.png"}
            alt="logo"
          />)}
        <ul className="mt-4">
          <li className="inline-block mr-4 text-inherit relative hover:text-mainColor">
            <NavLink className={({ isActive }) => isActive && "text-white bg-mainColor px-4 py-2 rounded"} to="/">
              Home
            </NavLink>
          </li>
          <li className="inline-block mr-4 text-inherit relative hover:text-mainColor">
            <NavLink className={({ isActive }) => isActive && "text-white bg-mainColor px-4 py-2 rounded"} to="/contact">
              Contact us
            </NavLink>
          </li>
          <li className="inline-block mr-4 text-inherit relative hover:text-mainColor">
            <NavLink className={({ isActive }) => isActive && "text-white bg-mainColor px-4 py-2 rounded"} to="/install">
              installation
            </NavLink>
          </li>
          {token && (
            <li className="inline-block mr-4 text-inherit relative hover:text-mainColor">
              <NavLink className={({ isActive }) => isActive && "text-mainColor"} to="/profile">
                profile
              </NavLink>
            </li>
          )}
        </ul>
      </div>
      <div className="p-8">
        <h3 className="mb-2 font-sans">&copy; Themepen, All rights reserved</h3>
      </div>
    </div>
  );
};

export default Foot;
