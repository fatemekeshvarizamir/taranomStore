// LawContext.js
import React, { createContext, useState, useContext } from 'react';

const LawContext = createContext();

export function useLaw() {
  return useContext(LawContext);
}

export function LawProvider({ children }) {
  const [lawChecked, setLawChecked] = useState(false);

  return (
    <LawContext.Provider value={{ lawChecked, setLawChecked }}>
      {children}
    </LawContext.Provider>
  );
}
