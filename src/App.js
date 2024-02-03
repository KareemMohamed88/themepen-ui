import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./screens/home";
import ProjectDetalis from "./screens/projectDetalis";
import Error from "./screens/404";
import Install from "./screens/Install";
import Contact from "./screens/contact";
import { Toaster } from "react-hot-toast";
import Login from "./screens/login";
import Registeration from "./screens/registeration";
import Nav from "./components/Nav";
import Profile from "./screens/profile";
import WishList from "./screens/wishList";
import UsersProfile from "./screens/usersProfile";
import Foot from "./components/Foot";

const App = () => {
  const token = localStorage.getItem("theme");
  const [darkMode, setDarkMode] = useState(token);
  return (
    <React.Fragment>
      <div className={`${darkMode === "light" ? "dark" : "light"} h-screen`}>
        <div className="dark:bg-darkBg">
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: {
                padding: "16px",
                borderRadius: "0",
                backgroundColor: darkMode === "light" ? "#222" : "#fff",
                color: darkMode === "light" ? "#fff" : "#222",
              },
            }}
          />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
                  <Home />
                </>
              }
            ></Route>
            <Route
              path="/install"
              element={
                <>
                  <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
                  <Install />
                </>
              }
            ></Route>
            <Route
              path="/contact"
              element={
                <>
                  <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
                  <Contact />
                </>
              }
            ></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signin" element={<Registeration />}></Route>
            <Route
              path="/Profile"
              element={
                <>
                  <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
                  <Profile />
                  <div className="h-12"></div>
                  <Foot/>
                </>
              }
            ></Route>
            <Route
              path="/WishList"
              element={
                <>
                  <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
                  <WishList />
                </>
              }
            ></Route>
            <Route
              path="/project-detalis/:id"
              element={
                <>
                  <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
                  <ProjectDetalis />
                </>
              }
            ></Route>
            <Route
              path="/user/profile/:id"
              element={
                <>
                  <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
                  <div className="h-28"></div>
                  <UsersProfile />
                </>
              }
            ></Route>

            <Route path="*" element={<Error />}></Route>
          </Routes>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
