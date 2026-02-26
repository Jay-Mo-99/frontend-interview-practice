import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Offset from "./pages/Offset";
import Cursor from "./pages/Cursor";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offset" element={<Offset />} />
        <Route path="/cursor" element={<Cursor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
