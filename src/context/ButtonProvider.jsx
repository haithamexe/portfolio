import { createContext, useEffect, useState, useContext } from "react";

export const ButtonContext = createContext();

export const useButtonContext = () => {
  return useContext(ButtonContext);
};

export const ButtonProvider = ({ children }) => {
  const [buttonPath, setButton] = useState("");

  const setButtonFunction = (buttonImagePath) => {
    setButton(buttonImagePath);
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
