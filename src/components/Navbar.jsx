import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved === "true";
    console.log(saved);
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
  return (
    <div className="">
      <nav className="shadow-lg py-5 bg-zin">
        <ul className="flex items-center gap-2">
          <h1 className="text-2xl ml-3">Notify</h1>
          <Link to={"/"} className="ml-3">
            Home
          </Link>
          <Link to={"/about"} className="ml-3">
            About
          </Link>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-2 py-1 rounded bg-blue-500 hover:bg-blue-600 transition-all text-white justify-end"
          >
            {darkMode ? 'Enable Light Mode' : 'Enable Dark Mode'}
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
