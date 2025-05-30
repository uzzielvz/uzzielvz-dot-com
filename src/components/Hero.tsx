"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

// SVG Icons
const GithubIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 inline-block align-middle">
    <title>GitHub</title>
    <path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const TwitterIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 inline-block align-middle">
    <title>X</title>
    <path fill="currentColor" d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 inline-block align-middle">
    <title>linkedin</title>
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <path fill="currentColor" d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z"></path>
    </g>
  </svg>
);

export default function Hero() {
  const titles = ["software engineer", "computer science student"];
  const [currentTitle, setCurrentTitle] = useState(titles[0]);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentTitle((prevTitle) =>
          prevTitle === titles[0] ? titles[1] : titles[0]
        );
        setIsFading(false);
      }, 500); // Duración del fade out/in
    }, 3000); // Cambia cada 3 segundos (incluida la animación)

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-24 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-2 leading-tight">
          Uzziel Valdez,
        </h1>
        <div className="flex items-center text-gray-600 text-xl md:text-2xl mb-4">
          <p className={`transition-opacity duration-500 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}>
            {currentTitle}
          </p>
          <div className="flex space-x-3 ml-4">
              <Link href="https://github.com/tuusuario" target="_blank" aria-label="GitHub" className="text-gray-900 hover:text-gray-700 transition-colors">
                  <GithubIcon />
              </Link>
              <Link href="https://twitter.com/tuusuario" target="_blank" aria-label="Twitter" className="text-gray-900 hover:text-gray-700 transition-colors">
                  <TwitterIcon />
              </Link>
              <Link href="https://linkedin.com/in/tuusuario" target="_blank" aria-label="LinkedIn" className="text-gray-900 hover:text-gray-700 transition-colors">
                  <LinkedinIcon />
              </Link>
          </div>
        </div>
        <p className="text-gray-700 text-lg md:text-xl mb-8">
          Transforming ideas into functional digital experiences.
        </p>
        <a 
          href="/cv.pdf" // Update this to the correct CV file path
          className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
} 