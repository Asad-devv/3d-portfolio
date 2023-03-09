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
    };}, []);

    return (
    <section className="me-myself-i">
    <div className="ball" ref={ballRef}>
    <div className="skill" ref={(el) => (skillsRef.current[0] = el)}>
    React
    </div>
    <div className="skill" ref={(el) => (skillsRef.current[1] = el)}>
    JavaScript
    </div>
    <div className="skill" ref={(el) => (skillsRef.current[2] = el)}>
    HTML
    </div>
    <div className="skill" ref={(el) => (skillsRef.current[3] = el)}>
    CSS
    </div>
    <div className="skill" ref={(el) => (skillsRef.current[4] = el)}>
    Node.js
    </div>
    <div className="skill" ref={(el) => (skillsRef.current[5] = el)}>
    Express
    </div>
    <div className="skill" ref={(el) => (skillsRef.current[6] = el)}>
    MongoDB
    </div>
    </div>
    </section>
    );
    };
    
    export default MeMyselfI;
    
        