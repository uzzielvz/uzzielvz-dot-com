"use client";

import Image from "next/image";
import { Experience } from "@/data/experience";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-16 h-16 relative">
            <Image
              src={experience.image}
              alt={experience.company}
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {experience.title}
            </h3>
            <div className="flex items-center mb-2">
              <span className="text-gray-600 font-medium">{experience.company}</span>
              <span className="mx-2 text-gray-400">•</span>
              <span className="text-gray-500">{experience.location}</span>
            </div>
            <div className="flex items-center mb-4">
              <span className="bg-gray-300 text-xs font-semibold rounded px-2 py-0.5 mr-2">
                {experience.startDate} - {experience.endDate}
              </span>
              <span className="text-xs text-gray-600">{experience.type}</span>
            </div>
            <p className="text-gray-700 text-sm mb-4 line-clamp-3">
              {experience.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="bg-gray-200 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}