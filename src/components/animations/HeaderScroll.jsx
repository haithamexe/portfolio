import React, { useRef, useState } from "react";
import {
  motion,
  useTransform,
  useMotionValue,
  useScroll,
  useMotionValueEvent,
  useSpring,
} from "framer-motion";
import { useThemeContext } from "../../context/ThemeProvider";

function HeaderScroll() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    container: container,
  });
  const { theme } = useThemeContext();
  const [hovered, setHovered] = useState("");

  const width = useSpring(
    useTransform(scrollYProgress, [0, 0.08], [800, 2000]),
    {
      stiffness: 500,
      damping: 20,
    }
  );
  // useTransform(scrollYProgress, [0, 0.08], [800, 1500]);
  const padding = useSpring(useTransform(scrollYProgress, [0, 0.15], [20, 0]));

  const borderRadius = useTransform(scrollYProgress, [0, 0.1], [50, 0]);
  const elementPadding = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 10]),
    {
      stiffness: 500,
      damping: 10,
    }
  );
  const paddingTop = useTransform(scrollYProgress, [0, 0.1], [0, 0]);
  const paddingBottom = useTransform(scrollYProgress, [0, 0.1], [0, 0]);

  return (
    <motion.div
      className="header-scroll-wrapper"
      style={{
        height: "100%",
        width: "100%",
        overflow: "auto",
        position: "relative",
        padding: padding,
        flexGrow: 1,
      }}
      ref={container}
    >
      <motion.div
        className="header-scroll-head"
        style={{
          position: "sticky",
          top: 0,
          left: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px 0",
          gap: "25px",
          borderRadius: borderRadius,
          margin: "0 auto",
          width: width,
          maxWidth: "100%",
          border: `2px solid ${theme === "light" ? "black" : "white"}`,
          background: theme === "light" ? "#f5f5f5" : "#1a1a1a",
        }}
      >
        <motion.h1
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            cursor: "pointer",
            padding: elementPadding,
            paddingBottom: paddingBottom,
            paddingTop: paddingTop,
          }}
        >
          Home
        </motion.h1>
        <motion.h1
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            cursor: "pointer",
            padding: elementPadding,
            paddingBottom: paddingBottom,
            paddingTop: paddingTop,
          }}
        >
          About
        </motion.h1>
        <motion.h1
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            cursor: "pointer",
            padding: elementPadding,
            paddingBottom: paddingBottom,
            paddingTop: paddingTop,
          }}
        >
          Projects
        </motion.h1>
        <motion.h1
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            cursor: "pointer",
            padding: elementPadding,
            paddingBottom: paddingBottom,
            paddingTop: paddingTop,
          }}
        >
          Contact
        </motion.h1>
        <motion.h1
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            cursor: "pointer",
            padding: elementPadding,
            paddingBottom: paddingBottom,
            paddingTop: paddingTop,
          }}
        >
          Resume
        </motion.h1>
      </motion.div>
      <div
        className="header-scroll-content"
        style={{
          height: "200vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
          paddingBottom: "200px",
        }}
      >
        <p
          style={{
            fontSize: "5rem",
            lineHeight: "1.5",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Scroll Me
        </p>
        <p
          style={{
            fontSize: "3rem",
            // lineHeight: "1.1",
            textAlign: "center",
            fontWeight: 400,
          }}
        >
          Boingggggggg!!
        </p>
      </div>
    </motion.div>
  );
}

export default HeaderScroll;
