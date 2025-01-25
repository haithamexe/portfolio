import React, { useEffect } from "react";
import { useThemeContext } from "../../context/ThemeProvider";
import "../../index.css";

function TextScramble() {
  const { theme } = useThemeContext();
  const letters = "ABCDEFGHIJKRSTUVWXYZabcdefghistuvwxyz012389!@#$%*-+";

  const textEffect = (e) => {
    let iteration = 0;

    const interval = setInterval(() => {
      e.target.innerText = e.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return e.target.getAttribute("data-text")[index];
          }
          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");

      if (iteration > 9) {
        clearInterval(interval);
        e.target.innerText = e.target.getAttribute("data-text");
      }

      iteration += 1 / 3;
    }, 30);
  };

  useEffect(() => {
    const items = document.querySelectorAll(".text-scramble-item");
    items.forEach((item) => {
      textEffect({ target: item });
    });
  }, []);

  return (
    <div
      className="text-scramble-wrapper"
      style={{
        fontSize: "4rem",
        fontWeight: 700,
        color: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "25px",
        height: "100%",
        width: "100%",
        overflow: "hidden",
        paddingBottom: "10vh",
        overflow: "auto",
        fontFamily: "DirtyLine",
        color: theme === "light" ? "black" : "white",
      }}
    >
      <div
        className="text-scramble-item-no"
        onMouseEnter={textEffect}
        style={{
          cursor: "pointer",
        }}
        data-text="HeLLo WorlD!"
      >
        Hello World!
      </div>
      <div
        className="text-scramble-item"
        onMouseEnter={textEffect}
        style={{
          cursor: "pointer",
          fontFamily: "monospace",
        }}
        data-text="Try Hovering Us"
      >
        Try Hovering Us
      </div>
      <div
        className="text-scramble-item"
        onMouseEnter={textEffect}
        style={{
          cursor: "pointer",
        }}
        data-text="Lorem Ipsum"
      >
        Lorem Ipsum
      </div>
    </div>
  );
}

export default TextScramble;
