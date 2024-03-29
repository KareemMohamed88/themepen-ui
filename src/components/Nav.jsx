import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useSelector } from 'react-redux'
import NavLinks from "./NavLinks";
const Nav = ({ darkMode, setDarkMode }) => {
  useEffect(() => {
    AOS.init()
  }, [])
  const wishList = useSelector((state) => state.wishList)
  const [mobileMenuIsActive, setMobileMenuIsActive] = useState(false);
  const [color, setColor] = useState(false);
  const buttonStyles = "px-7 py-3 bg-mainColor text-white font-bold text-sm rounded-md"
  const token = localStorage.getItem("token")

  const handleOpenMobileMenu = () => {
    setMobileMenuIsActive((current) => !current);
  };

  const handleColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", handleColor);


  const handleLogOut = () => {
    localStorage.removeItem("token")
    window.location.reload()
  };

  return (
    <React.Fragment>
      <div
        className={
          color
            ? "bar change-bar bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100"
            : "bar bg-transparent text-black dark:text-white"
        }
      >
         <NavLinks/>
        <div className="border-b border-slate-200/20 desktop-nav w-100% items-center justify-between h-24 px-8" data-aos="fade-down">
          <NavLink
            to="/"
            className="text-xl flex items-center text-inherit font-bold"
          >
            <img
              width="200px"
              height="100px"
              className="logo"
              src={require(darkMode === "light" ? "../assets/Logo-dark.png" : "../assets/Logo.png")}
              alt="logo"
            />
          </NavLink>
          <nav>
            <ul>
              <li className="inline-block mx-4 text-inherit relative hover:text-mainColor">
                <NavLink className={({ isActive }) => isActive && "text-white bg-mainColor px-4 py-2 rounded"} to="/">
                  Home
                </NavLink>
              </li>
              <li className="inline-block mx-4 text-inherit relative hover:text-mainColor">
                <NavLink className={({ isActive }) => isActive && "text-white bg-mainColor px-4 py-2 rounded"} to="/contact">
                  Contact us
                </NavLink>
              </li>
              <li className="inline-block mx-4 text-inherit relative hover:text-mainColor">
                <NavLink className={({ isActive }) => isActive && "text-white bg-mainColor px-4 py-2 rounded"} to="/install">
                  installation
                </NavLink>
              </li>
              {token && (
                <li className="inline-block mx-4 text-inherit relative hover:text-mainColor">
                  <NavLink className={({ isActive }) => isActive && "text-white bg-mainColor px-4 py-2 rounded"} to="/profile">
                    profile
                  </NavLink>
                </li>
              )}
            </ul>
          </nav>
          <div className="flex items-center gap-x-5">
            {token && (
              <a href="/WishList" className="relative flex items-center gap-x-2">
                <i className="fa-solid fa-face-grin-hearts text-red-500 text-xl"></i>
                <small>{wishList.wishListItems.length}</small>
              </a>
            )}
            <button role="button" id={darkMode} onClick={() => {
              localStorage.setItem("theme", darkMode === "light" ? "dark" : "light")
              setDarkMode(darkMode === "light" ? "dark" : "light")
            }} >
              {darkMode === "light" ? <><i class="fa-solid fa-sun mr-3"></i> Light mode</> : <><i class="fa-solid fa-moon mr-3"></i> Dark mode</>}
            </button>
            {token ? <button role="button" id="logout" onClick={handleLogOut} className={buttonStyles}>Sign out</button> :
              <React.Fragment>
                <a className={buttonStyles} href="/login">Login</a>
                <a className={buttonStyles} href="/signin">signin</a>
              </React.Fragment>}
          </div>
        </div>
      </div>
      <div
        className={
          color
            ? "bar change-bar bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100"
            : "bar bg-transparent text-black dark:text-white"
        }
      >
        <NavLinks/>
        <div className="mobile-nav w-100% px-6 h-24 bg-transparent items-center justify-between" data-aos="fade-down">
          <NavLink
            to="/"
            className="text-xl flex items-center text-inherit font-bold"
          >

            <img
              width="200px"
              className="logo"
              height="100px"
              src={require(darkMode === "light" ? "../assets/Logo-dark.png" : "../assets/Logo.png")}
              alt="logo"
            />
          </NavLink>
          <div className="flex items-center gap-x-5">
            {token && (
              <a href="/WishList" className="relative flex items-center gap-x-2">
                <i className="fa-solid fa-face-grin-hearts text-red-500 text-xl"></i>
                <small>{wishList.wishListItems.length}</small>
              </a>
            )}
            <button role="menuActive" id="menuActive" className={darkMode === "light" ? `text-white ${color && "text-inherit"}` : `text-black ${color && "text-inherit"}`} onClick={handleOpenMobileMenu}>
              <ion-icon name="grid-sharp"></ion-icon>
            </button>
          </div>
        </div>
      </div>
      <div
        className={
          mobileMenuIsActive
            ? " md:hidden menu top-20 z-[1000]"
            : "-top-100% menu md:hidden"
        }
      >
        <nav>
          <ul>
            <li className="my-7 py-3 w-full">
              <NavLink className={(({ isActive }) => `text-slate-900 dark:text-white w-full border-l-8 pl-4 py-3 ${isActive && "border-mainColor"}`)} to={"/"}>Home</NavLink>
            </li>
            <li className="my-7 py-3 w-full">
              <NavLink className={(({ isActive }) => `text-slate-900 dark:text-white w-full border-l-8 pl-4 py-3 ${isActive && "border-mainColor"}`)} to={"/contact"}>Contact us</NavLink>
            </li>
            <li className="my-7 py-3 w-full">
              <NavLink className={(({ isActive }) => `text-slate-900 dark:text-white w-full border-l-8 pl-4 py-3 ${isActive && "border-mainColor"}`)} to={"/install"}>Installation</NavLink>
            </li>
            <li className="my-7 py-3 w-full">
              <NavLink className={(({ isActive }) => `text-slate-900 dark:text-white w-full border-l-8 pl-4 py-3 ${isActive && "border-mainColor"}`)} to={"/profile"}>Profile</NavLink>
            </li>
            <li className="flex flex-col items-start gap-5 p-3">
              <button role="button" id="changeTheme" onClick={() => {
                localStorage.setItem("theme", darkMode === "light" ? "dark" : "light")
                setDarkMode(darkMode === "light" ? "dark" : "light")
              }}>
                {darkMode === "light" ? <div className="text-white"><i class="fa-solid fa-sun mr-3"></i> Light mode</div> : <><i class="fa-solid fa-moon mr-3"></i> Dark mode</>}
              </button>
              {token ? <button role="button" id="logout" onClick={handleLogOut} className={buttonStyles}>Sign out</button> :
                <React.Fragment>
                  <a className={buttonStyles} href="/login">Login</a>
                  <a className={buttonStyles} href="/signin">signin</a>
                </React.Fragment>}
            </li>
          </ul>
        </nav>
      </div>
      <div className="h-28 md:h-40"></div>
    </React.Fragment>
  );
};

export default Nav;
