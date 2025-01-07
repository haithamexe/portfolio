import React from "react";
import { Canvas } from "@react-three/fiber";
import { Text, RoundedBox, Decal, useTexture } from "@react-three/drei";
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
  const texture = useTexture("/images/photo-dark-sm.jpg");
  const [hover, setHover] = useState(false);
  const meshRef = useRef();

  useFrame(() => {
    if (hover) {
      meshRef.current.rotation.y +=
        (Math.PI * 2 - meshRef.current.rotation.y) * 0.07;
    } else {
      meshRef.current.rotation.y *= 0.9;
    }
  });

  return (
    <RoundedBox
      ref={meshRef}
      // args={[2, 1, 0.9]} // Increased depth from 0.2 to 0.8
      args={[0.55, 0.3, 0.1]} // Increased depth from 0.2 to 0.8
      radius={0.15}
      smoothness={10}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <meshBasicMaterial color={hover ? hoverColor : baseColor} />
      <Decal
        rotation={[0, Math.PI * 2, 0]} // Adjusted for new depth
        position={[-0.08, 0, 3]} // Adjusted for new depth
        scale={[0.2, 0.2, 10]} // Adjusted for new depth
      >
        <meshBasicMaterial
          map={texture}
          polygonOffset
          polygonOffsetFactor={-1}
        />
      </Decal>
      <Text
        position={[0.03, 0, 0.2]} // Adjusted for new depth
        fontSize={0.11}
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
          position: [0, 0, 3], // Slightly offset camera to show depth better
          fov: 11.5,
        }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.2} />
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

// import React, { useState, useRef, useEffect } from "react";
// import { Canvas } from "@react-three/fiber";
// import { Text, RoundedBox, useTexture } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
// import { Leva, useControls } from "leva";

// function Scene({
//   baseColor = "#3182ce",
//   hoverColor = "#4299e1",
//   frontText = "Click Me",
//   backText = "Rotated!",
//   textColor = "#ffffff",
//   imageUrl,
// }) {
//   const [hover, setHover] = useState(false);
//   const meshRef = useRef();
//   const texture = imageUrl ? useTexture(imageUrl) : null;

//   // Debug controls
//   const controls = useControls({
//     width: { value: 1.2, min: 0.5, max: 3, step: 0.1 },
//     height: { value: 0.6, min: 0.3, max: 2, step: 0.1 },
//     depth: { value: 0.4, min: 0.1, max: 1, step: 0.1 },
//     borderRadius: { value: 0.1, min: 0, max: 0.3, step: 0.01 },
//     smoothness: { value: 4, min: 1, max: 8, step: 1 },
//     rotationSpeed: { value: 0.1, min: 0.01, max: 0.5, step: 0.01 },
//     fontSize: { value: 0.15, min: 0.05, max: 0.3, step: 0.01 },
//     textOffset: { value: 0.21, min: 0.1, max: 0.5, step: 0.01 },
//     baseColor: { value: baseColor },
//     hoverColor: { value: hoverColor },
//     textColor: { value: textColor },
//     lightIntensity: { value: 0.5, min: 0, max: 2, step: 0.1 },
//   });

//   useFrame(() => {
//     if (hover) {
//       meshRef.current.rotation.y +=
//         (Math.PI * 2 - meshRef.current.rotation.y) * controls.rotationSpeed;
//     } else {
//       meshRef.current.rotation.y *= 0.9;
//     }
//   });

//   return (
//     <>
//       <ambientLight intensity={controls.lightIntensity} />
//       <pointLight position={[10, 10, 10]} intensity={controls.lightIntensity} />
//       <RoundedBox
//         ref={meshRef}
//         args={[controls.width, controls.height, controls.depth]}
//         radius={controls.borderRadius}
//         smoothness={controls.smoothness}
//         onPointerOver={() => setHover(true)}
//         onPointerOut={() => setHover(false)}
//       >
//         {texture ? (
//           <meshStandardMaterial
//             map={texture}
//             color={hover ? controls.hoverColor : controls.baseColor}
//           />
//         ) : (
//           <meshPhongMaterial
//             color={hover ? controls.hoverColor : controls.baseColor}
//           />
//         )}
//         <Text
//           position={[0, 0, controls.textOffset]}
//           fontSize={controls.fontSize}
//           color={controls.textColor}
//           anchorX="center"
//           anchorY="middle"
//         >
//           {frontText}
//         </Text>
//         <Text
//           position={[0, 0, -controls.textOffset]}
//           fontSize={controls.fontSize}
//           color={controls.textColor}
//           anchorX="center"
//           anchorY="middle"
//           rotation={[0, Math.PI, 0]}
//         >
//           {backText}
//         </Text>
//       </RoundedBox>
//     </>
//   );
// }

// const RotatingButton = ({
//   baseColor,
//   hoverColor,
//   frontText,
//   backText,
//   textColor,
//   imageUrl,
// }) => {
//   return (
//     <>
//       <Leva oneLineLabels collapsed />
//       <div className="w-24 h-12">
//         <Canvas
//           camera={{
//             position: [0.5, 0.25, 3],
//             fov: 25,
//           }}
//           style={{ background: "transparent" }}
//         >
//           <Scene
//             baseColor={baseColor}
//             hoverColor={hoverColor}
//             frontText={frontText}
//             backText={backText}
//             textColor={textColor}
//             imageUrl={imageUrl}
//           />
//         </Canvas>
//       </div>
//     </>
//   );
// };

// export default RotatingButton;
