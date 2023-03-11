import React, { useRef } from 'react';
import * as THREE from 'three';

const SkillsSphere = () => {
  const canvasRef = useRef(null);

  const addSkillsToSphere = (sphere, skills) => {
    const geometry = new THREE.CircleGeometry(1, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff, opacity: 0.5, transparent: true });
    const circle = new THREE.Mesh(geometry, material);

    const angleIncrement = (Math.PI * 2) / skills.length;
    let currentAngle = 0;

    skills.forEach((skill) => {
      const textGeometry = new THREE.TextGeometry(skill, {
        font: // add your custom font here
        size: 0.1,
        height: 0.01,
      });

      const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const textMesh = new THREE.Mesh(textGeometry, textMaterial);

      textMesh.position.x = Math.sin(currentAngle) * 0.8;
      textMesh.position.y = Math.cos(currentAngle) * 0.8;
      textMesh.position.z = 0.2;

      currentAngle += angleIncrement;

      circle.add(textMesh);
    });

    sphere.add(circle);
  };

  const setupScene = () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });

    renderer.setSize(window.innerWidth, window.innerHeight);

    const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x2194ce, opacity: 0.7, transparent: true });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

    addSkillsToSphere(sphere, ['React', 'HTML', 'CSS', 'JavaScript', 'Three.js']);

    scene.add(sphere);
    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();
  };

  return <canvas ref={canvasRef} onLoad={setupScene} />;
};

export default SkillsSphere;
