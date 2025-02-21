import React from 'react';

const XIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* 
      This path is split into two overlapping shapes to form a stylized X.
      You can tweak the coordinates to refine the look as needed.
    */}
    <path d="M0,0 L10,0 L24,14 L24,24 L14,24 L0,10 Z M24,0 L24,10 L10,24 L0,24 L0,14 L14,0 Z" />
  </svg>
);

export default XIcon;
