import React, { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox, Text, useTexture, Decal } from "@react-three/drei";
import chroma from "chroma-js";
import { useThemeContext } from "../../context/ThemeProvider";
import { backendButtons } from "../../utils/buttonsArrays";
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
        setButtonFunction(imageUrl);
        setHover(true);
      }}
      onPointerOut={() => setHover(false)}
      onUpdate={(self) => self.geometry.computeBoundingBox()} // Recompute geometry
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
        fontSize={frontText.length <= 6 ? 0.15 : 0.12}
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

// AboutButtons Component
export default function RotatingButtonBackEnd() {
  const { theme } = useThemeContext();
  const { setButtonFunction } = useButtonContext();

  const buttons = backendButtons.map((element, i) => ({
    ...element,
    position: [
      -1.5 + (i % 5) * 0.7, // X position resets every 5 buttons
      0.4 - Math.floor(i / 5) * 0.4, // Y position decreases for every new row
      0, // Z position stays constant
    ],
  }));

  return (
    <Canvas
      camera={{ position: [0, 0, 14.5], fov: 5 }}
      gl={{ antialias: true, powerPreference: "high-performance" }}
    >
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
    </Canvas>
  );
}
