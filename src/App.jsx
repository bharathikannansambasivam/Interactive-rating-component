import { useState } from "react";
import Rating from "./component/Rating";
import About from "./component/Greeting";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Rating />} />
        <Route path="/about" element={<About />} />

        <Route path="/about/:rating" element={<About />} />
        <Route path="/home" element={<Rating />} />
      </Routes>
    </div>
  );
}

export default App;
