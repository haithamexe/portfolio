import React from "react";
import { backendButtons } from "../../utils/buttonsArrays";

function StaticButtonsBackEnd() {
  return (
    <div className=" static-buttons ">
      {backendButtons.map((button, index) => (
        <div className="about-static-button" key={index}>
          <img src={button?.imageUrl} alt={button?.frontText} />
          <p>{button?.frontText}</p>
        </div>
      ))}
    </div>
  );
}

export default StaticButtonsBackEnd;
