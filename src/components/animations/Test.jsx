import React, { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useMotionValueEvent,
} from "motion/react";

function Test() {
  const container = useRef(null);
  const target = useRef(null);

  const { scrollYProgress } = useScroll({});

  useEffect(() => {
    console.log(scrollYProgress);
    // console.log(typeof scrollYProgress);
    // console.log(parseFloat(scrollYProgress));
  }, [scrollYProgress]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
  });

  const cards = [
    {
      title: "Card 1",
    },
    {
      title: "Card 2",
    },
    {
      title: "Card 3",
    },
    {
      title: "Card 4",
    },
  ];

  return (
    <div
      className="main-test"
      style={{
        // height: "100vh",
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        background: "white",
        zIndex: 100,
        paddingTop: "200vh",
        paddingBottom: "200vh",
        // overflow: "auto",
      }}
    >
      {cards.map((card, index) => (
        <div
          className="stacked-card-container-test"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "sticky",
            height: "100vh",
            top: 0,
            left: 0,
          }}
          ref={container}
          key={index}
        >
          <motion.div
            className="stacked-card-test"
            style={{
              width: "1000px",
              height: "500px",
              background: "green",
              opacity: 0.4 + index * 0.2,
              position: "relative",
              top: -100 + index * 25 + "px",
              borderRadius: "15px",
            }}
            ref={target}
          >
            {card?.title}
          </motion.div>
        </div>
      ))}
    </div>
  );
}

export default Test;
