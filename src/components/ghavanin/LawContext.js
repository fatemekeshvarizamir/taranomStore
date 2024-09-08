// LawContext.js
import React, { createContext, useContext, useState } from 'react';

const LawContext = createContext();

export const useLaw = () => useContext(LawContext);

export const LawProvider = ({ children }) => {
  const [lawChecked, setLawChecked] = useState(false);

  return (
    <LawContext.Provider value={{ lawChecked, setLawChecked }}>
      {children}
    </LawContext.Provider>
  );
};
