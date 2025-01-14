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

// RotatingButton Component
function RotatingButtonObject({ frontText, theme, imageUrl }) {
  const texture = useTexture(imageUrl);
  const [hover, setHover] = useState(false);
  const meshRef = useRef();
  const baseColor = theme === "dark" ? "#353535" : "#BCBBBB";
  // const randomPosition = () => {
  //   return [
  //     Math.random() * 1 - 2 * 0.2,
  //     Math.random() * 1 - 2 * 0.2,
  //     Math.random() * 1 - 2 * 0.2,
  //   ];
  // };

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
      smoothness={5}
      position={[0, 0, 0]}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      onClick={() => {
        setHover(true);
        setTimeout(() => {
          setHover(false);
        }, 620);
      }}
    >
      <meshBasicMaterial
        color={
          hover
            ? chroma(baseColor)
                .darken(theme === "dark" ? 0.4 : 0.9)
                .hex()
            : baseColor
        }
        transparent
      />

      <mesh position={[-0.13, 0, 0.17]}>
        <planeGeometry args={[0.24, 0.24]} />
        <meshBasicMaterial map={texture} transparent />
      </mesh>

      <Text
        position={[0, 0, 0.2]}
        fontSize={frontText.length <= 6 ? 0.15 : 0.1}
        fontWeight={"bold"}
        color={theme === "dark" ? "#ffffff" : "#000000"}
        anchorX="center"
        anchorY="middle"
        outlineColor={theme === "dark" ? "#000000" : "#ababab"}
        outlineWidth={0.01}
      >
        {frontText}
      </Text>
    </RoundedBox>
  );
}

// AboutButtons Component
export default function RotatingButton({ frontText, imageUrl, buttonPath }) {
  const { theme } = useThemeContext();

  return (
    <Canvas
      camera={{ position: [0, 0, 19], fov: 2 }}
      // gl={{ antialias: true, powerPreference: "high-performance" }}
    >
      <RotatingButtonObject
        frontText={frontText}
        imageUrl={buttonPath}
        theme={theme}
      />
    </Canvas>
  );
}
