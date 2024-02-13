// CircleProgressBar.js
import React, { useEffect } from "react";

const CircleProgressBar = ({ skill, percentage }) => {
  useEffect(() => {
    const svgEl = document.querySelector(`.${skill.toLowerCase()}-progress-container svg circle`);

    let counter = 0;
    const interval = setInterval(() => {
      if (counter === parseInt(percentage)) {
        clearInterval(interval);
      } else {
        counter += 1;
        svgEl.style.strokeDashoffset = Math.floor(472 - 440 * parseFloat(counter / 100));
      }
    }, 20);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [percentage, skill]);

  return (
    <div className={`${skill.toLowerCase()}-progress-container`}>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
        <defs>
          <linearGradient id={`${skill.toLowerCase()}GradientColor`}>
            <stop offset="0%" stopColor="#e91e63" />
            <stop offset="100%" stopColor="#673ab7" />
          </linearGradient>
        </defs>
        <circle cx="80" cy="80" r="70" strokeLinecap="round" />
      </svg>
      <div className="number">{percentage}%</div>
    </div>
  );
};

export default CircleProgressBar;
