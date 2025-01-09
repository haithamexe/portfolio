import React from "react";
import { frontendButtons } from "../../utils/buttonsArrays";

function StaticButtonsFrontEnd() {
  return (
    <div className="static-buttons">
      {frontendButtons.map((button, index) => (
        <div className="about-static-button" key={index}>
          <img src={button?.imageUrl} alt={button?.frontText} />
          <p>{button?.frontText}</p>
        </div>
      ))}
    </div>
  );
}

export default StaticButtonsFrontEnd;
