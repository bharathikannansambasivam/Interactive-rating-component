import React, { createContext, useState } from "react";

export const RatingContext = createContext();

export const RatingProvider = ({ children }) => {
  const [rating, setRating] = useState(null);

  return (
    <RatingContext.Provider value={{ rating, setRating }}>
      {children}
    </RatingContext.Provider>
  );
};
