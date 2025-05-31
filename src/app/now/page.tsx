import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NowPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <section className="w-full py-20 mt-0 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 py-8 mt-16">
          <h1 className="text-4xl font-bold mb-6 text-gray-900">Now</h1>
          <p className="text-gray-700 mb-8 leading-relaxed text-justify">
            This is a now page, inspired by <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" className="text-gray-800 underline hover:text-gray-900">Derek Sivers</a>. It's a snapshot of what I'm currently focused on.
          </p>

          <div className="space-y-8 text-gray-700 leading-relaxed text-justify">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Currently Learning</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Advanced TypeScript patterns and best practices</li>
                <li>System design and architecture principles</li>
                <li>React, Next.js</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Current Projects</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Building this personal website with Next.js and Tailwind</li>
                <li>Working on a CRUD inventory application using php</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Current Goals</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Improving my system design skills</li>
                <li>Writing more technical blog posts</li>
                <li>Improving in Leetcode Challanges, Algortihms and dsta atructure</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Current Reading</h2>
              <p>
                <a href="https://www.amazon.com.mx/Nexus-Yuval-Noah-Harari/dp/9877950820" target="_blank" rel="noopener noreferrer" className="text-gray-800 underline hover:text-gray-900">Nexus - Yuval Noah Harari</a>
              </p>
            </section>

            <p className="text-gray-600 text-sm mt-8">
              Last updated: May 30, 2025
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 