import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, Sphere } from "@react-three/drei";
import * as THREE from "three";

const SphereWithSkills = () => {
  const sphereRef = useRef()
  const skills = ['mongo db', 'javascript', 'react', /* add more skills here */]

  // Rotate the sphere on each frame
  const handleFrame = () => {
    sphereRef.current.rotation.x += 0.01
    sphereRef.current.rotation.y += 0.01
  }

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      <group>
        <Sphere ref={sphereRef} args={[1, 64, 64]}>
          {/* Create a 3D text element for each skill */}
          {skills.map((skill, index) => (
            <Html key={index}>
              <div>{skill}</div>
            </Html>
          ))}
        </Sphere>
      </group>
      <mesh>
        <sphereGeometry args={[10, 64, 64]} />
        <meshBasicMaterial color={'#333'} wireframe />
      </mesh>
      <gridHelper />
      <axesHelper />
      <fog attach="fog" args={['#ccc', 10, 20]} />
      <OrbitControls />
      <axesHelper />
      <gridHelper />
      <pointLight position={[0, 0, 10]} />
      <pointLight position={[0, 0, -10]} />
      <pointLight position={[0, 10, 0]} />
      <pointLight position={[0, -10, 0]} />
      <pointLight position={[10, 0, 0]} />
      <pointLight position={[-10, 0, 0]} />
    </Canvas>
  )
}

export default SphereWithSkills
