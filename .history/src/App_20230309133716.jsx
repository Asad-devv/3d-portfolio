import React, { useRef } from 'react';
import * as THREE from 'three';

const MeMyselfI = () => {
  const sceneRef = useRef(null);
  const ballRef = useRef(null);
  const skillsRef = useRef([]);

  // Initialize the scene, camera, and renderer
  const initScene = () => {
    // Get the container element for the scene
    const container = sceneRef.current;

    // Create the scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#1c1c1c');

    // Create the camera
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Create the renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Create the ball geometry and material
    const ballGeometry = new THREE.SphereGeometry(2, 32, 32);
    const ballMaterial = new THREE.MeshBasicMaterial({
      color: '#ffea00',
      wireframe: true,
    });

    // Create the ball mesh
    const ballMesh = new THREE.Mesh(ballGeometry, ballMaterial);
    ballRef.current = ballMesh;
    scene.add(ballMesh);

    // Create the skill geometries and materials
    const skillGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const skillMaterials = [
      new THREE.MeshBasicMaterial({ color: '#61dafb' }),
      new THREE.MeshBasicMaterial({ color: '#f7df1e' }),
      new THREE.MeshBasicMaterial({ color: '#f06529' }),
      new THREE.MeshBasicMaterial({ color: '#264de4' }),
      new THREE.MeshBasicMaterial({ color: '#3c873a' }),
      new THREE.MeshBasicMaterial({ color: '#f7a64d' }),
      new THREE.MeshBasicMaterial({ color: '#4db33d' }),
    ];

    // Create the skill meshes and position them around the ball in a circle
    const skillMeshes = skillsRef.current;
    const skillCount = skillMaterials.length;
    const radius = 3;
    for (let i = 0; i < skillCount; i++) {
      const skillMaterial = skillMaterials[i];
      const skillMesh = new THREE.Mesh(skillGeometry, skillMaterial);
      const angle = (i / skillCount) * Math.PI * 2;
      skillMesh.position.x = Math.cos(angle) * radius;
      skillMesh.position.y = Math.sin(angle) * radius;
      ballMesh.add(skillMesh);
      skillMeshes.push(skillMesh);
    }

    // Add event listeners to the ball element
    ballMesh.addEventListener('mousemove', (event) => {
      pls continue
// Rotate the ball and skills around the y-axis based on mouse movement
const mouseX = event.clientX;
const windowHalfX = window.innerWidth / 2;
const rotationSpeed = 0.001;
ballMesh.rotation.y =
(mouseX - windowHalfX) * rotationSpeed + Math.PI / 2;
for (let i = 0; i < skillCount; i++) {
const skillMesh = skillMeshes[i];
skillMesh.rotation.y =
(mouseX - windowHalfX) * rotationSpeed + (i / skillCount) * Math.PI * 2;
}
});

// scss
// Copy code
// Render the scene
const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};
animate();
};

// Call the initScene function when the component mounts
React.useEffect(() => {
initScene();
}, []);

return <div className="scene" ref={sceneRef} />;
};

export default MeMyselfI;