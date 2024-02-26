import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./screens/Add";
import Detail from "./screens/Detail";
import Home from "./screens/Home";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
