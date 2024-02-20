// skills.jsx

import React from 'react';
import { ProgressBar } from 'ms-react-progress-bar';
import 'ms-react-progress-bar/dist/ProgressBar.css';
import './skills.css';

function Skills() {
  const progressBarOptions = {
    height: '30px',
    borderRadius: '20px',
    labelSize: '14px',
    containerColor: '#dddddd',
    containerStyle: 'border',
    stripeAnimation: false,
  };

  const loaderStyles = {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
  };

  return (
    <div className="skills-container">
      {/* Python Progress Bar */}
      <ProgressBar value={90} options={{ ...progressBarOptions, barColor: '#3572A5' }} />

      {/* Java Progress Bar */}
      <ProgressBar value={80} options={{ ...progressBarOptions, barColor: '#B07219' }} />

      {/* C# Progress Bar */}
      <ProgressBar value={77} options={{ ...progressBarOptions, barColor: '#178600' }} />

      {/* Node.js Progress Bar */}
      <ProgressBar value={70} options={{ ...progressBarOptions, barColor: '#68A063' }} />

      {/* Loaders */}
      <div className="loader">
        <div className="intern python"></div>
        <div className="intern java"></div>
        <div className="intern csharp"></div>
        <div className="intern nodejs"></div>
      </div>
    </div>
  );
}

export default Skills;