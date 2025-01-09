import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  RoundedBox,
  Text,
  useTexture,
  useProgress,
  Html,
} from "@react-three/drei";
import chroma from "chroma-js";
import { useThemeContext } from "../../context/ThemeProvider";
import { frontendButtons } from "../../utils/buttonsArrays";
import { useButtonContext } from "../../context/ButtonProvider";

// RotatingButton Component
function RotatingButton({
  position = [0, 0, 0],
  frontText,
  theme,
  imageUrl,
  setButtonFunction,
}) {
  const texture = useTexture(imageUrl);
  const [hover, setHover] = useState(false);
  const meshRef = useRef();
  const baseColor = theme === "dark" ? "#404047" : "#93949e";

  useFrame(() => {
    if (hover) {
      const targetRotation = Math.PI * 2;
      const currentRotation = meshRef.current.rotation.y;
      if (Math.abs(targetRotation - currentRotation) > 0.01) {
        meshRef.current.rotation.y += (targetRotation - currentRotation) * 0.04;
      }
    } else if (meshRef.current.rotation.y > 0.01) {
      meshRef.current.rotation.y *= 0.9;
    }
  });

  return (
    <RoundedBox
      ref={meshRef}
      args={[0.6, 0.31, 0.1]}
      radius={0.15}
      position={position}
      onPointerOver={() => {
        setHover(true);
        setButtonFunction(imageUrl);
      }}
      onPointerOut={() => setHover(false)}
    >
      <meshBasicMaterial
        color={hover ? chroma(baseColor).darken(0.65).hex() : baseColor}
        transparent
      />

      <mesh position={[-0.13, 0, 0.11]}>
        <planeGeometry args={[0.24, 0.24]} />
        <meshBasicMaterial map={texture} transparent />
      </mesh>

      <Text
        position={[0, 0, 0.14]}
        fontSize={frontText.length <= 7 ? 0.155 : 0.11}
        {...(frontText.length <= 7 ? { letterSpacing: 0.02 } : {})}
        {...(frontText === "Three.js"
          ? { letterSpacing: 0.03, fontSize: 0.13 }
          : {})}
        fontWeight={"bold"}
        color={theme === "dark" ? "#ffffff" : "#000000"}
        anchorX="center"
        anchorY="middle"
        outlineColor={theme === "dark" ? "#000000" : "#ababab"}
        outlineWidth={0.021}
      >
        {frontText}
      </Text>
    </RoundedBox>
  );
}

function Loader() {
  const { progress } = useProgress();
  console.log(progress);
  return <Html center>{progress.toFixed(0)}% loaded</Html>; // Display loading progress
}

// AboutButtons Component
export default function RotatingButtonFrontEnd() {
  const { theme } = useThemeContext();
  const { setButtonFunction } = useButtonContext();

  const buttons = frontendButtons.map((element, i) => ({
    ...element,
    position: [
      -1.5 + (i % 5) * 0.7, // X position resets every 5 buttons
      0.26 - Math.floor(i / 5) * 0.4, // Y position decreases for every new row
      0, // Z position stays constant
    ],
  }));

  return (
    <Canvas
      camera={{ position: [0, 0, 11], fov: 5 }}
      gl={{ antialias: true, powerPreference: "high-performance" }}
    >
      <Suspense fallback={<Loader />}>
        {buttons.map((button, i) => (
          <RotatingButton
            key={i}
            position={button.position}
            frontText={button.frontText}
            imageUrl={button.imageUrl}
            theme={theme}
            setButtonFunction={setButtonFunction}
          />
        ))}
      </Suspense>
    </Canvas>
  );
}
