import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rating from "./components/Rating";
import Result from "./components/Result";
export const Context = React.createContext();
function App() {
  const [rating, setRating] = useState(null);

  return (
    <Context.Provider value={[rating, setRating]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Rating />}></Route>
          <Route path="/result" element={<Result />}></Route>
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
