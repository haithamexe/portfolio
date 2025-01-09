import RotatingButtonBackEnd from "./buttons/RotatingButtonBackEnd";
import RotatingButtonFrontEnd from "./buttons/RotatingButtonFrontEnd";
import RotatingButtonMisc from "./buttons/RotatingButtonMisc";
import { MousePointerClick } from "lucide-react";
import { useState, useEffect } from "react";
import { useButtonContext } from "../context/ButtonProvider";
import StaticButtonsBackEnd from "./buttons/StaticButtonsBackEnd";
import StaticButtonsFrontEnd from "./buttons/StaticButtonsFrontEnd";
import StaticButtonsMisc from "./buttons/StaticButtonsMisc";

export default function AboutButtons() {
  const { buttonPath } = useButtonContext();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 900) {
      setIsMobile(true);
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth <= 900) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });

    return () => {
      window.removeEventListener("resize", () => {
        if (window.innerWidth <= 900) {
          setIsMobile(true);
        } else {
          setIsMobile(false);
        }
      });
    };
  }, []);

  return (
    <>
      <div className="section-buttons-front themed-element">
        <div className="section-header themed-element">
          <h1>Frontend Technologies:</h1>
          <MousePointerClick className="mouse-pointer" />
        </div>
        {isMobile ? <StaticButtonsFrontEnd /> : <RotatingButtonFrontEnd />}
      </div>
      <div className="section-buttons-back themed-element">
        <div className="section-header themed-element">
          <h1>Backend Technologies:</h1>
          <MousePointerClick className="mouse-pointer" />
        </div>
        {isMobile ? <StaticButtonsBackEnd /> : <RotatingButtonBackEnd />}
      </div>
      <div className="section-buttons-used themed-element">
        <div className="section-header themed-element">
          <h1>Used Before:</h1>
          <MousePointerClick className="mouse-pointer" />
        </div>
        {isMobile ? <StaticButtonsMisc /> : <RotatingButtonMisc />}
      </div>
      {!isMobile && (
        <div className="about-button-img">
          {buttonPath?.length > 0 &&
            buttonPath.map((path, i) => (
              <img
                key={i}
                src={path}
                alt="Button"
                className="button-themed-element"
              />
            ))}
        </div>
      )}
    </>
  );
}
