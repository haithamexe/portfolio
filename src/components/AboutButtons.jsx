import { MousePointerClick } from "lucide-react";
import { useButtonContext } from "../context/ButtonProvider";
import StaticButtonsBackEnd from "./buttons/StaticButtonsBackEnd";
import StaticButtonsFrontEnd from "./buttons/StaticButtonsFrontEnd";
import StaticButtonsMisc from "./buttons/StaticButtonsMisc";
import RotatingButton from "./buttons/RotaingButton";

export default function AboutButtons() {
  const { buttonPath } = useButtonContext();

  return (
    <>
      <div className="section-buttons-front themed-element">
        <div className="section-header themed-element">
          <h1>Frontend Technologies:</h1>
          <MousePointerClick className="mouse-pointer" />
        </div>
        <StaticButtonsFrontEnd />
      </div>
      <div className="section-buttons-back themed-element">
        <div className="section-header themed-element">
          <h1>Backend Technologies:</h1>
          <MousePointerClick className="mouse-pointer" />
        </div>
        <StaticButtonsBackEnd />
      </div>
      <div className="section-buttons-used themed-element">
        <div className="section-header themed-element">
          <h1>Used Before:</h1>
          <MousePointerClick className="mouse-pointer" />
        </div>
        <StaticButtonsMisc />
      </div>
      {buttonPath.length > 0 && (
        <div className="about-button-effect themed-element">
          <RotatingButton
            buttonPath={buttonPath}
            frontText={buttonPath.toString()?.split("/")[2].split(".")[0]}
          />
        </div>
      )}
    </>
  );
}
