import { createContext, useEffect, useState, useContext } from "react";

const ThemeContext = createContext();

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const localTheme = localStorage.getItem("theme");
    return localTheme || "dark";
  });

  const [effect, setEffect] = useState("on");

  // useEffect(() => {
  //   const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  //   const handelChange = (e) => {
  //     setTheme(e.matches ? "dark" : "light");
  //   };

  //   mediaQuery.addEventListener("change", handelChange);
  //   setTheme(mediaQuery.matches ? "dark" : "light");

  //   const localTheme = localStorage.getItem("theme");
  //   if (localTheme) {
  //     setTheme(localTheme);
  //   }
  // }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  const toggleEffect = () => {
    setEffect((prevEffect) => {
      const newEffect = prevEffect === "on" ? "off" : "on";
      return newEffect;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, effect, toggleEffect }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
