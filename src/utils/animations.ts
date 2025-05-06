import { css, keyframes } from '@emotion/react';

// Blob animation for background elements
export const blobAnimation = keyframes`
  0% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  
  50% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }

  100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
`;

// Fade in animation for sections
export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Gradient animation for text and backgrounds
export const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  
  50% {
    background-position: 100% 50%;
  }
  
  100% {
    background-position: 0% 50%;
  }
`;

// Custom cursor animation
export const customCursor = css`
  .custom-cursor {
    position: fixed;
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    pointer-events: none;
    mix-blend-mode: difference;
    z-index: 9999;
    transform: translate(-50%, -50%);
    transition: transform 0.2s ease;
  }
  
  .custom-cursor-follower {
    position: fixed;
    top: 0;
    left: 0;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #3b82f6;
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
  }
`;

// Animation for timeline elements
export const timelineAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.99] }
  }
};

// Parallax effect for hero section
export const parallaxEffect = css`
  .parallax-container {
    overflow: hidden;
    position: relative;
  }
  
  .parallax-item {
    will-change: transform;
    transform: translateY(0);
    transition: transform 0.1s linear;
  }
`;

// Add more animations as needed