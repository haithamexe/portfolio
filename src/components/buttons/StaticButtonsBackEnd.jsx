import React from "react";
import { backendButtons } from "../../utils/buttonsArrays";
import { useButtonContext } from "../../context/ButtonProvider";

function StaticButtonsBackEnd() {
  const { setButtonFunction } = useButtonContext();

  return (
    <div className=" static-buttons themed-element">
      {backendButtons.map((button, index) => (
        <div
          onClick={() => {
            setButtonFunction(button.imageUrl);
          }}
          style={{ cursor: "pointer" }}
          className="about-static-button themed-element"
          key={index}
        >
          <img src={button?.imageUrl} alt={button?.frontText} loading="lazy" />
          <p>{button?.frontText}</p>
        </div>
      ))}
    </div>
  );
}

export default StaticButtonsBackEnd;
