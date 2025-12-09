"use client";

import React from 'react';
import Navbar from "@/components/Navbar";

export default function NowPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <section className="w-full py-8 mt-16 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 flex flex-col flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-left">Now</h1>
          <p className="text-gray-700 text-lg mb-8 text-justify">
            This is a now page, inspired by <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" className="text-gray-800 underline hover:text-gray-900">Derek Sivers</a>. It&apos;s a snapshot of what I&apos;m currently focused on.
          </p>

          <div className="space-y-8 text-gray-700 leading-relaxed text-justify">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Currently Learning</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Django</li>
                <li>Data Structures and Algorithms (DSA)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Current Projects</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Working on development of pipelines for financial data management at my job</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Current Goals</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Studying algorithms and DSA to reach FAANG companies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Current Reading</h2>
              <ul className="list-none space-y-3">
                <li>
                  <a href="https://www.amazon.com.mx/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374533555" target="_blank" rel="noopener noreferrer" className="text-gray-800 underline hover:text-gray-900">
                    Thinking, Fast and Slow - Daniel Kahneman
                  </a>
                </li>
                <li>
                  <a href="https://www.amazon.com.mx/s?k=notes+from+underground+dostoevsky" target="_blank" rel="noopener noreferrer" className="text-gray-800 underline hover:text-gray-900">
                    Notes from Underground - Fyodor Dostoevsky
                  </a>
                </li>
              </ul>
            </section>

            <p className="text-gray-600 text-sm mt-8">
              Last updated: December 8, 2025
            </p>
          </div>
        </div>
      </section>
    </main>
  );
} 