import "./App.css";
import React, { useEffect } from "react";
import CreateNote from "./components/CreateNote";
import { Routes, Route, useLocation } from "react-router-dom";
import UpdateNote from "./components/UpdateNote";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const location = useLocation();

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved === "true";
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    if (darkMode) {
      document.body.style.backgroundColor = "#27272a";
      document.body.style.color = "#fff";
    } else {
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "black";
    }
  }, [darkMode]);

  const hideNavbar = ["/login", "/signup"];
  return (
    <>
      {!hideNavbar.includes(location.pathname) && (
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      )}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<CreateNote darkMode={darkMode} />} />
        <Route path="/about" element={<About />} />
        <Route path="/update/:id" element={<UpdateNote />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
