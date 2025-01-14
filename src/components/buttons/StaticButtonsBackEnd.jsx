import React from "react";
import { backendButtons } from "../../utils/buttonsArrays";
import { useButtonContext } from "../../context/ButtonProvider";
import { useMediaContext } from "../../context/MediaProvider";

function StaticButtonsBackEnd() {
  const { setButtonFunction } = useButtonContext();
  const { media } = useMediaContext();

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
          <img
            src={media[button.image]?.src}
            alt={button?.frontText}
            loading="lazy"
          />
          <p>{button?.frontText}</p>
        </div>
      ))}
    </div>
  );
}

export default StaticButtonsBackEnd;
