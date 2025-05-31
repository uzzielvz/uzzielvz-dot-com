"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { works } from "../../../data/works";
import Link from "next/link";

export default function WorksPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <section className="w-full py-8 mt-16 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 flex flex-col flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-left">Works</h1>
          <p className="text-gray-700 text-lg mb-8 text-justify">
            A collection of my recent projects and works. Each project represents a unique challenge and learning experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {works.map((work, index) => (
              <Link 
                href={`/works/${index}`} 
                key={index}
                className="group block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700">
                    {work.title}
                  </h2>
                  <div className="flex items-center mb-4">
                    <span className="bg-gray-300 text-xs font-semibold rounded px-2 py-0.5 mr-2">
                      {work.year}
                    </span>
                    <span className="text-xs text-gray-600">{work.category}</span>
                  </div>
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                    {work.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {work.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-gray-200 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
} 