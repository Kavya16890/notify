import "./App.css";
import CreateNote from "./components/CreateNote";
import { Routes, Route } from "react-router-dom";
import UpdateNote from "./components/UpdateNote";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { useState } from "react";

function App() {
  return (
    <>
    <Navbar/>
      <div className="p-10"> 
        <Routes>
          <Route path="/" element={<CreateNote />} />
          <Route path="/about" element={<About />} />
          <Route path="/update/:id" element={<UpdateNote />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
