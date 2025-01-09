import { createContext, useEffect, useState, useContext } from "react";

export const ButtonContext = createContext();

export const useButtonContext = () => {
  return useContext(ButtonContext);
};

export const ButtonProvider = ({ children }) => {
  const [buttonPath, setButton] = useState([]);

  const setButtonFunction = (buttonImagePath) => {
    if (buttonPath.includes(buttonImagePath)) {
      return;
    }
    if (buttonPath.length > 11) {
      setButton([...buttonPath.slice(0, 10), buttonImagePath]);
    }
    setButton((prev) => [buttonImagePath, ...prev]);
  };

  const clearButton = () => {
    setButton("");
  };

  return (
    <ButtonContext.Provider
      value={{ buttonPath, setButtonFunction, clearButton }}
    >
      {children}
    </ButtonContext.Provider>
  );
};
