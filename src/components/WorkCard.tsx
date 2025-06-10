'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Work } from '@/lib/works';

export default function WorkCard({ project }: { project: Work }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {project.image && (
        <div className="relative w-full h-48">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority={false}
          />
        </div>
      )}
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
        </div>
      </div>
    </div>
  );
}