import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Importing the font file
import { font } from "three/examples/fonts/helvetiker_regular.typeface";

const TextFlow = () => {
  const meshRef = useRef();

  return (
    <Canvas>
      <mesh ref={meshRef}>
        <textGeometry
          attach="geometry"
          args={["Hello, World!", { font, size: 2, height: 1 }]}
        />
        <meshStandardMaterial attach="material" color="hotpink" />
      </mesh>
    </Canvas>
  );
};

export default TextFlow;