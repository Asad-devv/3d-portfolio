import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const SkillSphere = () => {
  // Create a ref for the sphere mesh
  const sphereRef = useRef();

  // Define the skills and their positions on the sphere
  const skills = [
    { name: "JavaScript", position: [0, 0, 0] },
    { name: "React.js", position: [1, 0, 0] },
    { name: "Three.js", position: [0, 1, 0] },
    { name: "HTML/CSS", position: [-1, 0, 0] },
    { name: "UI/UX Design", position: [0, -1, 0] },
    { name: "Node.js", position: [0, 0, 1] },
    { name: "MongoDB", position: [0, 0, -1] },
  ];

  // Define the animation loop for the sphere
  useFrame(() => {
    // Rotate the sphere slightly on each frame
    sphereRef.current.rotation.y += 0.005;
  });

  // Return the 3D scene and sphere
  return (
    <mesh ref={sphereRef}>
      <sphereBufferGeometry attach="geometry" args={[1, 64, 64]} />
      <meshStandardMaterial attach="material" color={"#222"} />
      {skills.map((skill, index) => (
        <mesh key={index} position={skill.position}>
          <circleBufferGeometry attach="geometry" args={[0.15, 32]} />
          <meshStandardMaterial attach="material" color={"#FFF"} />
          <textBufferGeometry
            attach="geometry"
            args={[
              skill.name,
              { font: "roboto", size: 0.05, height: 0.005 },
            ]}
          />
          <meshStandardMaterial attach="material" color={"#222"} />
        </mesh>
      ))}
    </mesh>
  );
};

// Define the main App component
const App = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <SkillSphere />
    </Canvas>
  );
};

export default App;
