import React from "react";
import { frontendButtons } from "../../utils/buttonsArrays";
import { useButtonContext } from "../../context/ButtonProvider";

function StaticButtonsFrontEnd() {
  const { setButtonFunction } = useButtonContext();
  return (
    <div className="static-buttons themed-element">
      {frontendButtons.map((button, index) => (
        <div
          onClick={() => {
            setButtonFunction(button.image);
          }}
          className="about-static-button themed-element"
          key={index}
          style={{ cursor: "pointer" }}
        >
          <img src={button.image} alt={button?.frontText} loading="lazy" />
          <p>{button?.frontText}</p>
        </div>
      ))}
    </div>
  );
}

export default StaticButtonsFrontEnd;
