import React, { useEffect } from "react";
import SlyderEffect from "../components/effects/SlyderEffect";
import Portal from "../components/Portal";
import "../styles/playground.css";
import ChatPlay from "../components/effects/ChatPlay";
// import Portal2 from "../components/Portal2";

function Playground() {
  return (
    <div className="playground">
      <Portal>
        <div className="chat-play-container">
          <ChatPlay />
        </div>
      </Portal>
    </div>
  );
}

export default Playground;
