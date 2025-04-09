import { useEffect, useRef } from "react";
import "../../styles/effect.css";
import Portal from "../../components/Portal";

function Effect({ effect }) {
  const itemRef = useRef(null);

  return (
    <Portal>
      <div className="effect-container">
        <video
          className={effect === "on" ? "effect-video" : "effect-video-hidden"}
          autoPlay
          loop
          muted
          src="/videos/7020085_Black_White_3840x2160.mov"
          type="video/mp4"
        ></video>
      </div>
    </Portal>
  );
}

export default Effect;
