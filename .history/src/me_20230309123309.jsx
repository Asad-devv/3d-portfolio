import React, { useEffect, useRef } from 'react';
import './MeMyselfI.css';

const MeMyselfI = () => {
  const ballRef = useRef(null);
  const skillsRef = useRef([]);

  useEffect(() => {
    const ball = ballRef.current;
    const skills = skillsRef.current;

    ball.addEventListener('mousemove', (e) => {
      skills.forEach((skill) => {
        const skillRect = skill.getBoundingClientRect();
        const skillX = skillRect.left + skill.offsetWidth / 2;
        const skillY = skillRect.top + skill.offsetHeight / 2;
        const dx = e.clientX - skillX;
        const dy = e.clientY - skillY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;
        const minDistance = 50;
    
        if (distance < maxDistance && distance > minDistance) {
          const angle = Math.atan2(dy, dx);
          const x = Math.cos(angle) * (distance - minDistance);
          const y = Math.sin(angle) * (distance - minDistance);
    
          skill.style.transform = `translate(${x}px, ${y}px)`;
        } else if (distance < minDistance) {
          skill.style.transform = 'translate(0, 0)';
        } else {
          skill.style.transform = 'translate(0, 0)';
        }
      });
    });
    
    return () => {
      ball.removeEventListener('mousemove', () => {});
    };    