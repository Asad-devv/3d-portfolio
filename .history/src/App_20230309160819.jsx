import React, { useRef } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import * as THREE from 'three'

const SkillSphere = () => {
  const sphereRef = useRef()

  const skills = [
    { name: 'React', position: [0, 0, 1.2] },
    { name: 'Node', position: [1.1, 0, 0.9] },
    { name: 'MongoDB', position: [0.9, 0, -1.1] },
    { name: 'Express', position: [-1.1, 0, 0.9] },
    { name: 'Firebase', position: [-0.9, 0, -1.1] },
    { name: 'JavaScript', position: [0.8, 0.8, 0.8] },
    { name: 'HTML', position: [-0.8, 0.8, 0.8] },
    { name: 'CSS', position: [0.8, -0.8, 0.8] },
    { name: 'UI/UX', position: [-0.8, -0.8, 0.8] },
  ]

  useFrame(() => {
    sphereRef.current.rotation.y += 0.005
  })

  return (
    <mesh ref={sphereRef}>
      <sphereBufferGeometry attach="geometry" args={[1, 64, 64]} />
      <meshBasicMaterial attach="material" color={'#000000'} />
      {skills.map((skill, index) => (
        <mesh key={index} position={skill.position}>
          <circleBufferGeometry attach="geometry" args={[0.1, 32]} />
          <meshBasicMaterial attach="material" color={'#FFFFFF'} />
          <textBufferGeometry attach="geometry" args={[skill.name, { font: new THREE.Font(), size: 0.05, height: 0.005 }]} />
          <meshBasicMaterial attach="material" color={'#000000'} />
        </mesh>
      ))}
    </mesh>
  )
}

const App = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <SkillSphere />
      </Canvas>
    </div>
  )
}

export default App
