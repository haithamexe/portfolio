// import React, { useEffect } from "react";
// import SlyderEffect from "../components/effects/SlyderEffect";
// import Portal from "../components/Portal";
// import "../styles/playground.css";
// import ChatPlay from "../components/effects/ChatPlay";
// // import Portal2 from "../components/Portal2";

// function Playground() {
//   return (
//     <div className="playground">
//       <Portal>
//         <div className="chat-play-container">
//           <ChatPlay />
//         </div>
//       </Portal>
//     </div>
//   );
// }

// export default Playground;

import React from "react";

import { projects } from "../utils/projects";
import { useMediaContext } from "../context/MediaProvider";
import { useState } from "react";
import { useEffect } from "react";
import "../styles/playground.css";
import Portal from "../components/Portal";
import { CircleX, SquareArrowOutUpRight } from "lucide-react";
import StackedCards from "../components/animations/StackedCards";
import Test from "../components/animations/Test";
import HeaderScroll from "../components/animations/HeaderScroll";
import TextScramble from "../components/animations/TextScramble";

function Playground() {
  const [transform, setTransform] = useState({});
  const [cardClicked, setCardClicked] = useState("");
  const [card, setCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const { media } = useMediaContext();

  const handleMouseMove = (e, index) => {
    const card = e.currentTarget;
    const cardRect = card.getBoundingClientRect();
    const offsetX = e.clientX - cardRect.left;
    const offsetY = e.clientY - cardRect.top;

    const xRrotation =
      -40 * ((offsetY - cardRect.height / 2) / cardRect.height);
    const yRrotation = 40 * ((offsetX - cardRect.width / 2) / cardRect.width);

    setTransform((prev) => ({
      ...prev,
      [index]: {
        x: xRrotation,
        y: yRrotation,
      },
    }));
  };

  const handleMouseLeave = (index) => {
    setTransform((prev) => ({
      ...prev,
      [index]: {
        x: 0,
        y: 0,
      },
    }));
  };

  const totalElements = [
    {
      id: 1,
      title: "Stacked Cards",
      image: "https://placehold.co/1980x1080",
    },
    {
      id: 2,
      title: "Header",
      image: "https://placehold.co/1980x1080",
    },
    {
      id: 3,
      title: "Text Scramble",
      image: "https://placehold.co/1980x1080",
    },
    {
      id: 4,
      title: "Chat Play",
      image: "https://placehold.co/1980x1080",
    },
    {
      id: 5,
      title: "Chat Play",
      image: "https://placehold.co/1980x1080",
    },
    {
      id: 6,
      title: "Chat Play",
      image: "https://placehold.co/1980x1080",
    },
    {
      id: 7,
      title: "Chat Play",
      image: "https://placehold.co/1980x1080",
    },
    {
      id: 8,
      title: "Chat Play",
      image: "https://placehold.co/1980x1080",
    },
    {
      id: 9,
      title: "Chat Play",
      image: "https://placehold.co/1980x1080",
    },
    {
      id: 10,
      title: "Chat Play",
      image: "https://placehold.co/1980x1080",
    },
  ];

  useEffect(() => {
    if (cardClicked) {
      setCard(totalElements.find((item) => item?.id === cardClicked));
      console.log(cardClicked);
    } else {
      setCard(null);
    }
  }, [cardClicked]);

  return (
    <div className="playground">
      <div className="playground-cards-container themed-element">
        {totalElements.map((effect, index) => (
          <div
            key={effect.id}
            className={"playground-card themed-element"}
            style={{
              transform: `rotateX(${transform[index]?.x}deg) rotateY(${transform[index]?.y}deg)`,
              marginLeft: `${index % 7 === 0 ? "7rem" : "0"}`,
            }}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={() => handleMouseLeave(index)}
            onClick={() => setCardClicked(effect.id)}
          >
            <div className="playground-card-image-wrapper">
              {/* {effect?.video ? (
                <video
                  autoPlay
                  loop
                  muted
                  src={media[effect?.video]?.src || effect?.video}
                  alt={effect?.title}
                ></video>
              ) : (
                <img
                  src={media[effect?.image]?.src || effect?.image}
                  alt={effect?.title}
                  loading="eager"
                />
              )} */}
            </div>

            <div className="playground-card-info">
              <h2>{effect?.title}</h2>
            </div>
            {/* <p>Click to view</p> */}
            {/* <div className="playground-card-footer">
          </div> */}
          </div>
        ))}
      </div>
      <Portal>
        {card && (
          <div className="playground-effect-Preview">
            <div className="playground-effect-Preview-container themed-element">
              <div className="playground-effect-Preview-content-header">
                <h2>{card?.title}</h2>
                <CircleX
                  className="playground-effect-Preview-close themed-element"
                  onClick={() => setCardClicked("")}
                />
              </div>
              <div className="playground-effect-preview-content-body">
                {card?.title === "Stacked Cards" ? <StackedCards /> : null}
                {card?.title === "Header" ? <HeaderScroll /> : null}
                {card?.title === "Text Scramble" ? <TextScramble /> : null}
              </div>
            </div>
          </div>
        )}
      </Portal>
      {/* <Portal>
        <Test />
      </Portal> */}
    </div>
  );
}

export default Playground;
