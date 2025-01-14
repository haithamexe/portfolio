import React from "react";
import { frontendButtons } from "../../utils/buttonsArrays";
import { useButtonContext } from "../../context/ButtonProvider";
import { useMediaContext } from "../../context/MediaProvider";

function StaticButtonsFrontEnd() {
  const { setButtonFunction } = useButtonContext();
  const { media } = useMediaContext();
  return (
    <div className="static-buttons themed-element">
      {frontendButtons.map((button, index) => (
        <div
          onClick={() => {
            setButtonFunction(button.imageUrl);
          }}
          className="about-static-button themed-element"
          key={index}
          style={{ cursor: "pointer" }}
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

export default StaticButtonsFrontEnd;
