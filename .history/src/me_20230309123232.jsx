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
