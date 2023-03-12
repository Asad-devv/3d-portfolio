import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import * as THREE from "three";

const TextSphere = ({ texts }) => {
  const groupRef = useRef();

  // Create a sphere geometry
  const geometry = new THREE.SphereGeometry(3, 32, 32);

  // Create a material for the sphere
  const material = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    specular: 0xffffff,
    shininess: 50,
    flatShading: true,
  });

  // Create a mesh using the geometry and material
  const mesh = new THREE.Mesh(geometry, material);

  // Create a font loader
  const fontLoader = new THREE.FontLoader();

  // Load a font and create a text geometry for each text
  const textGeometries = texts.map((text) => {
    const font = fontLoader.load("/fonts/helvetiker_regular.typeface.json");
    const geometry = new THREE.TextGeometry(text, {
      font: font,
      size: 0.3,
      height: 0.1,
    });
    geometry.center();
    return geometry;
  });

  // Create a material for the text
  const textMaterial = new THREE.MeshPhongMaterial({
    color: 0x333333,
    specular: 0xffffff,
    shininess: 50,
    flatShading: true,
  });

  // Create a mesh for each text and add it to the group
  const textMeshes = textGeometries.map((geometry, index) => {
    const textMesh = new THREE.Mesh(geometry, textMaterial);
    // Calculate the position of the text on the sphere
    const position = calculatePositionOnSphere(index, textGeometries.length);
    textMesh.position.set(position.x, position.y, position.z);
    return textMesh;
  });
  textMeshes.forEach((textMesh) => groupRef.current.add(textMesh));

  // Rotate the group on the Y axis
  useFrame(() => {
    groupRef.current.rotation.y += 0.005;
  });

  return (
    <group ref={groupRef} position={[0, 0, -10]} rotation={[0, 0, 0]}>
      {mesh}
    </group>
  );
};

// Helper function to calculate the position of a point on a sphere
function calculatePositionOnSphere(index, count) {
  const phi = Math.acos(-1 + (2 * index) / (count - 1));
  const theta = Math.sqrt((count - 1) * Math.PI) * phi;
  const x = Math.cos(theta) * Math.sin(phi) * 4;
  const y = Math.sin(theta) * Math.sin(phi) * 4;
  const z = Math.cos(phi) * 4;
  return new THREE.Vector3(x, y, z);
}

export default TextSphere;
