"use client";

import { useParams } from 'next/navigation';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { works } from "../../../../data/works";

export default function WorkDetailPage() {
  const params = useParams();
  const id = params.id as string;
  
  const project = works[parseInt(id)];

  if (!project) {
    return (
      <main className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <section className="w-full py-8 mt-16 min-h-screen">
          <div className="max-w-6xl mx-auto px-4 flex flex-col flex-1">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-left">Project Not Found</h1>
            <p className="text-gray-700 text-lg mb-8">
              The project you're looking for doesn't exist.
            </p>
            <Link href="/works" className="text-gray-800 underline hover:text-gray-900">
              ← Back to Works
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <section className="w-full py-8 mt-16 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 flex flex-col flex-1">
          <Link href="/works" className="text-gray-800 underline hover:text-gray-900 mb-8 inline-block">
            ← Back to Works
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-left">{project.title}</h1>
          
          <div className="flex items-center mb-6">
            <span className="bg-gray-300 text-xs font-semibold rounded px-2 py-0.5 mr-2">{project.year}</span>
            <span className="text-xs text-gray-600">{project.category}</span>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-700 text-lg mb-8 text-justify">{project.description}</p>
            
            {project.technologies && project.technologies.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.githubUrl && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Repository</h2>
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-800 underline hover:text-gray-900"
                >
                  View on GitHub
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
} 