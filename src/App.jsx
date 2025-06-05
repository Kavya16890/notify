import "./App.css";
import CreateNote from "./components/CreateNote";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateNote from "./components/UpdateNote";

function App() {
  return (
    <>
      <div className="p-10">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateNote />} />
          <Route path="/update/:id" element={<UpdateNote />} />
        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
