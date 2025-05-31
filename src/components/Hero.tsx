"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

// SVG Icons
const GithubIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 inline-block align-middle">
    <title>GitHub</title>
    <path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const TwitterIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 inline-block align-middle">
    <title>X</title>
    <path fill="currentColor" d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 inline-block align-middle">
    <title>linkedin</title>
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <path fill="currentColor" d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z"></path>
    </g>
  </svg>
);

// Change export from default to named exports
export { GithubIcon, TwitterIcon, LinkedinIcon };

export default function Hero() {
  const titles = ["Software Engineer", "Full Stack Developer"];
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [phase, setPhase] = useState('typing'); // 'typing', 'pausing', 'deleting'
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    switch (phase) {
      case 'typing':
        const nextCharTimer = setTimeout(() => {
          setDisplayedText((prev) => prev + titles[titleIndex][prev.length]);
        }, 100); // Velocidad de escritura

        if (displayedText.length === titles[titleIndex].length) {
          setPhase('pausing');
        }
        return () => clearTimeout(nextCharTimer);

      case 'pausing':
        const pauseTimer = setTimeout(() => {
          setPhase('deleting');
        }, 1500); // Duración de la pausa
        return () => clearTimeout(pauseTimer);

      case 'deleting':
        const deleteCharTimer = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
        }, 50); // Velocidad de borrado

        if (displayedText.length === 0) {
          setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
          setPhase('typing');
        }
        return () => clearTimeout(deleteCharTimer);

      default:
        break;
    }
  }, [displayedText, phase, titleIndex]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500); // Velocidad de parpadeo del cursor

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <section className="w-full py-50 mt-16 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center md:space-x-12">
        {/* Left Column: Text Content */}
        <div className="flex flex-col w-full md:w-2/3">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-2 leading-tight">
            I'm Uzziel,
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-500 mb-4 inline-block">
            {displayedText}
            <span className={`inline-block w-0.5 bg-gray-900 ml-1 align-bottom transform translate-y-[-1px] ${showCursor ? 'opacity-100' : 'opacity-0'}`}>&nbsp;</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-xl mb-4 max-w-lg">
            Based in Mexico - Transforming ideas into functional digital experiences.
          </p>
          <div className="flex space-x-3 mt-0">
            <Link href="https://github.com/uzzielvz" target="_blank" aria-label="GitHub" className="text-gray-900 hover:text-gray-700 transition-colors p-2 rounded-full hover:bg-gray-100">
              <GithubIcon />
            </Link>
            <Link href="https://x.com/uzzielvz" target="_blank" aria-label="Twitter" className="text-gray-900 hover:text-gray-700 transition-colors p-2 rounded-full hover:bg-gray-100">
              <TwitterIcon />
            </Link>
            <Link href="https://linkedin.com/in/uzzielvz" target="_blank" aria-label="LinkedIn" className="text-gray-900 hover:text-gray-700 transition-colors p-2 rounded-full hover:bg-gray-100">
              <LinkedinIcon />
            </Link>
          </div>
        </div>
        
        {/* Right Column: Links */}
        <div className="w-full md:w-1/3 mt-8 md:mt-0 flex flex-col items-end transform -translate-y-8">
  <div className="flex flex-col space-y-2 text-base text-right">
    <a 
      href="/cv.pdf"
      className="inline-block text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800 animate-gradient-x"
      target="_blank"
    >
      download resume
    </a>
    <Link 
      href="/works"
      className="inline-block text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800 animate-gradient-x"
    >
      view my work
    </Link>
    <Link 
      href="/skills"
      className="inline-block text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800 animate-gradient-x"
    >
      view my skills
    </Link>
    <Link 
      href="/contact"
      className="inline-block text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800 animate-gradient-x"
    >
      lets' collaborate
    </Link>
    <Link 
      href="/now"
      className="inline-block text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800 animate-gradient-x"
    >
      i'm now in...
    </Link>
  </div>
</div>
      </div>
    </section>
  );
} 