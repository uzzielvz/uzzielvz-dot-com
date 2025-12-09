'use client';

import Link from 'next/link';
import { Work } from '@/lib/works';

export default function WorkCard({ project }: { project: Work }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
        <div className="flex items-center text-xs text-gray-600 mb-4">
          <span>{project.date}</span>
          <span className="mx-2 text-gray-400">•</span>
          <span>{project.category}</span>
        </div>
        <p className="text-gray-700 text-sm mb-4 line-clamp-3">{project.description || 'No description available.'}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies?.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 items-center">
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              className="text-sm text-gray-600 hover:text-gray-800 font-medium transition-colors lowercase"
            >
              view repo
            </Link>
          )}
          {project.webUrl && (
            <Link
              href={project.webUrl}
              target="_blank"
              className="text-sm text-gray-600 hover:text-gray-800 font-medium transition-colors lowercase"
            >
              view website
            </Link>
          )}
          {project.demoRequestUrl && (
            <Link
              href={project.demoRequestUrl}
              target="_blank"
              className="text-sm text-gray-600 hover:text-gray-800 font-medium transition-colors lowercase"
            >
              request a demo
            </Link>
          )}
          {!project.githubUrl && !project.webUrl && !project.demoRequestUrl ? (
            <Link
              href="/contact"
              className="text-sm text-gray-600 hover:text-gray-800 font-medium transition-colors lowercase"
            >
              reach me for more info
            </Link>
          ) : (
            <div className="relative group">
              <span className="text-sm text-gray-600 hover:text-gray-800 font-medium transition-colors lowercase cursor-pointer">
                view more...
              </span>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                working in this... Come back later
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}