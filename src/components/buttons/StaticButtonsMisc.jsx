import React from "react";
import { miscButtons } from "../../utils/buttonsArrays";

function StaticButtonsMisc() {
  return (
    <div className="static-buttons">
      {miscButtons.map((button, index) => (
        <div className="about-static-button" key={index}>
          <img src={button?.imageUrl} alt={button?.frontText} />
          <p>{button?.frontText}</p>
        </div>
      ))}
    </div>
  );
}

export default StaticButtonsMisc;
