import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, Sphere } from "@react-three/drei";
import * as THREE from "three";

const SphereWithSkills = () => {
  const sphereRef = useRef();

  const skills = [
    "MongoDB",
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "Node.js",
    "Express",
  ];

  const handleFrame = () => {
    sphereRef.current.rotation.y += 0.22;
  };

  return (
    <Canvas
      onCreated={({ gl }) => {
        gl.setClearColor(new THREE.Color("#ff1dq0"));
      }}
      onFrame={handleFrame}
    >
      <ambientLight intensity={0.5} />
      <pointLight intensity={0.8} position={[100, 100, 100]} />
      <pointLight intensity={0.5} position={[-100, -100, -100]} />
      <OrbitControls />
      <Sphere ref={sphereRef} args={[1, 64, 64]}>
        {skills.map((skill, index) => (
          <Html key={index} position={[0, 0, 1]}>
            <div>{skill}</div>
          </Html>
        ))}
      </Sphere>
    </Canvas>
  );
};

export default SphereWithSkills;
