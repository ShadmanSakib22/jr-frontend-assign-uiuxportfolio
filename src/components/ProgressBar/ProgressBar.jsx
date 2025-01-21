import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ subject, percentage }) => {
  return (
    <div className="skill mb-2 md:mb-4">
      <div className="subject ter-heading font-semibold mb-2 lg:mb-3">{subject}</div>
      <div className="progress-bar" >
        <div
          className="progress-line"
          style={{ maxWidth: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
