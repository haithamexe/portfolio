import React from "react";
import { miscButtons } from "../../utils/buttonsArrays";
import { useButtonContext } from "../../context/ButtonProvider";

function StaticButtonsMisc() {
  const { setButtonFunction } = useButtonContext();
  return (
    <div className="static-buttons themed-element">
      {miscButtons.map((button, index) => (
        <div
          onClick={() => {
            setButtonFunction(button.image);
          }}
          style={{ cursor: "pointer" }}
          className="about-static-button themed-element"
          key={index}
        >
          <img src={button.image} alt={button?.frontText} loading="lazy" />
          <p>{button?.frontText}</p>
        </div>
      ))}
    </div>
  );
}

export default StaticButtonsMisc;
