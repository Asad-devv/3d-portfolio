import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, Sphere } from "@react-three/drei";
import * as THREE from "three";
// import React, { useRef } from "react";
// import { Canvas } from "react-three-fiber";
// import { Html, OrbitControls, Sphere } from "drei";
// import * as THREE from "three";

const SphereWithSkills = () => {
  const sphereRef = useRef();
  const htmlRefs = useRef([]);

  const skills = [
    "MongoDB",
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "Node.js",
    "Express",
  ];

  const handleFrame = (state, delta) => {
    const speed = 0.1;
    const rotationSpeed = 0.005;

    sphereRef.current.position.x = Math.cos(state.clock.getElapsedTime() * speed) * 5;
    sphereRef.current.position.y = Math.sin(state.clock.getElapsedTime() * speed) * 5;

    sphereRef.current.rotation.y += delta * rotationSpeed;

    htmlRefs.current.forEach((htmlRef, index) => {
      const angle = (index / skills.length) * Math.PI * 2;
      const radius = 3;
      htmlRef.position.x = Math.cos(angle) * radius;
      htmlRef.position.y = Math.sin(angle) * radius;
      htmlRef.rotation.x += delta * rotationSpeed;
      htmlRef.rotation.y += delta * rotationSpeed;
    });
  };

  return (
    <Canvas
      onCreated={({ gl }) => {
        gl.setClearColor(new THREE.Color("#"));
      }}
      onFrame={handleFrame}
    >
      <ambientLight intensity={0.5} />
      <pointLight intensity={0.8} position={[100, 100, 100]} />
      <pointLight intensity={0.5} position={[-100, -100, -100]} />
      <OrbitControls />
      <Sphere ref={sphereRef} args={[5, 64, 64]}>
        {skills.map((skill, index) => (
          <Html key={index} position={[0, 0, 0]} ref={(ref) => htmlRefs.current[index] = ref}>
            <div style={{ transform: "translate(-50%, -50%)" }}>{skill}</div>
          </Html>
        ))}
      </Sphere>
    </Canvas>
  );
};

export default SphereWithSkills;
