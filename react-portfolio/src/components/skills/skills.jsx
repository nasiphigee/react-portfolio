import React, { useEffect, useRef, useState } from 'react';
import { motion, animate } from 'framer-motion';
import './skills.css';

function Progressbar({ value }) {
  const progressTextRef = useRef(null);

  useEffect(() => {
    const progressText = progressTextRef.current?.textContent;

    if (progressText != null) {
      animate(parseInt(progressText), value, {
        duration: 2,
        onUpdate: (cv) => {
          progressTextRef.current.textContent = cv.toFixed(0);
        },
      });
    }
  }, [value]);

  return (
    <div className="progressbar-container">
      <div className="progressbar">
        <motion.div
          className="bar"
          animate={{
            width: `${value}%`,
          }}
          transition={{
            duration: 2,
          }}
        />
      </div>
      <div className="progressbar-text-container">
        <p ref={progressTextRef}>95</p>
        <p>%</p>
      </div>
    </div>
  );
}

function Skills() {
  const [progressBars, setProgressBars] = useState([
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgressBars((prevBars) =>
        prevBars.map(() => Math.random() * 100)
      );
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="skills-container">
      <h1>My Skills</h1>
      <div className="progress-bars">
        {progressBars.map((progress, index) => (
          <Progressbar key={index} value={progress} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
