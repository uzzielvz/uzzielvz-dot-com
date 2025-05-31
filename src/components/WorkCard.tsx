"use client";

import Image from "next/image";
import Link from "next/link";

export default function WorkCard({ project }: { project: any }) {
  return (
    <Link href={`/works/${project.slug}`} className="block">
      <div className="flex items-center bg-gray-100 rounded-lg p-4 mb-4 hover:bg-gray-200 transition-colors relative">
        {project.githubUrl && (
          <div className="absolute top-4 right-4" onClick={(e) => e.stopPropagation()}>
            <Link 
              href={project.githubUrl} 
              target="_blank" 
              className="text-gray-600 hover:text-gray-800 text-sm font-medium transition-colors"
            >
              view repository
            </Link>
          </div>
        )}
        <div className="relative w-20 h-20 flex-shrink-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover rounded-md"
            priority
          />
        </div>
        <div className="ml-4 flex-1">
          <div className="flex items-center mb-1">
            <span className="bg-gray-300 text-xs font-semibold rounded px-2 py-0.5 mr-2">{project.year}</span>
            <span className="text-xs text-gray-600">{project.category}</span>
          </div>
          <h3 className="font-bold text-lg text-gray-900 mb-2">{project.title}</h3>
          <p className="text-gray-700 text-sm line-clamp-2 mb-4 leading-relaxed text-justify">{project.description}</p>
          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {project.technologies.map((tech: string) => (
                <span key={tech} className="bg-gray-200 text-gray-800 text-xs font-medium px-1.5 py-0.5 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
} 