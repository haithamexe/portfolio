import React from "react";
import { Canvas } from "@react-three/fiber";
import { Text, RoundedBox } from "@react-three/drei";
import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";

function Scene({
  baseColor = "#3182ce",
  hoverColor = "#4299e1",
  frontText = "Click Me",
  backText = "Rotated!",
  textColor = "#ffffff",
  imageUrl,
}) {
  const [hover, setHover] = useState(false);
  const meshRef = useRef();

  useFrame(() => {
    if (hover) {
      meshRef.current.rotation.y +=
        (Math.PI * 2 - meshRef.current.rotation.y) * 0.1;
    } else {
      meshRef.current.rotation.y *= 0.9;
    }
  });

  return (
    <RoundedBox
      ref={meshRef}
      // args={[2, 1, 0.9]} // Increased depth from 0.2 to 0.8
      args={[0.6, 0.4, 0.2]} // Increased depth from 0.2 to 0.8
      radius={0.2}
      smoothness={10}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <meshBasicMaterial color={hover ? hoverColor : baseColor} />
      <Text
        position={[0, 0, 0.2]} // Adjusted for new depth
        fontSize={0.1}
        color={textColor}
        anchorX="center"
        anchorY="middle"
      >
        {frontText}
      </Text>
    </RoundedBox>
  );
}

const RotatingButton = ({
  baseColor,
  hoverColor,
  frontText,
  backText,
  textColor,
  imageUrl,
}) => {
  return (
    <div className="rotating-button">
      <Canvas
        camera={{
          position: [0, 0, 5], // Slightly offset camera to show depth better
          fov: 10,
        }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Scene
          baseColor={baseColor}
          hoverColor={hoverColor}
          frontText={frontText}
          backText={backText}
          textColor={textColor}
          imageUrl={imageUrl}
        />
      </Canvas>
    </div>
  );
};

export default RotatingButton;
