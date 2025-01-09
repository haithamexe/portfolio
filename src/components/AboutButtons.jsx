import RotatingButtonBackEnd from "./buttons/RotatingButtonBackEnd";
import RotatingButtonFrontEnd from "./buttons/RotatingButtonFrontEnd";
import RotatingButtonMisc from "./buttons/RotatingButtonMisc";
import { MousePointerClick } from "lucide-react";
import { useState, useEffect } from "react";
import { useButtonContext } from "../context/ButtonProvider";

export default function AboutButtons() {
  const [loading, setLoading] = useState(true);
  const { clearButton, buttonPath } = useButtonContext();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <div className="section-buttons-front themed-element">
        <div className="section-header themed-element">
          <h1>Frontend Technologies:</h1>
          <MousePointerClick className="mouse-pointer" />
        </div>
        {!loading ? <RotatingButtonFrontEnd /> : null}
      </div>
      <div className="section-buttons-back themed-element">
        <div className="section-header themed-element">
          <h1>Backend Technologies:</h1>
          <MousePointerClick className="mouse-pointer" />
        </div>

        {!loading ? <RotatingButtonBackEnd /> : null}
      </div>
      <div className="section-buttons-used themed-element">
        <div className="section-header themed-element">
          <h1>Used Before:</h1>
          <MousePointerClick className="mouse-pointer" />
        </div>

        {!loading ? <RotatingButtonMisc /> : null}
      </div>
      <div className="about-button-img">
        {buttonPath?.length > 0 && (
          <img
            src={buttonPath}
            alt="Button"
            className="button-themed-element"
          />
        )}
      </div>
    </>
  );
}
