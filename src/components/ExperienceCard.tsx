import Image from "next/image";

export default function ExperienceCard({ experience }: { experience: any }) {
  return (
    <div className="flex items-start bg-gray-100 rounded-lg p-4 mb-4">
      <div className="flex-shrink-0 mt-1">
        <Image
          src={experience.companyLogo}
          alt={experience.company}
          width={80}
          height={80}
          className="rounded-md object-cover"
        />
      </div>
      <div className="ml-4 flex-1">
        <div className="flex items-center mb-1">
          <span className="bg-gray-300 text-xs font-semibold rounded px-2 py-0.5 mr-2">{experience.period}</span>
          <span className="text-xs text-gray-600">{experience.location}</span>
        </div>
        <h3 className="font-bold text-lg text-gray-900 mb-1">{experience.position}</h3>
        <p className="text-gray-600 text-sm mb-2">{experience.company}</p>
        <p className="text-gray-700 text-sm line-clamp-2 mb-2 leading-relaxed text-justify">{experience.description}</p>
        {experience.technologies && experience.technologies.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-auto">
            {experience.technologies.map((tech: string) => (
              <span key={tech} className="bg-gray-200 text-gray-800 text-xs font-medium px-1.5 py-0.5 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 