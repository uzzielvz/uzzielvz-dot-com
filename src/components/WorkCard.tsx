import Image from "next/image";
import Link from "next/link";

export default function WorkCard({ project }: { project: any }) {
  return (
    <div className="flex items-start bg-gray-100 rounded-lg p-4 mb-4">
      <div className="flex-shrink-0 mt-1">
        <Image
          src={project.image}
          alt={project.title}
          width={80}
          height={80}
          className="rounded-md object-cover"
        />
      </div>
      <div className="ml-4 flex-1">
        <div className="flex items-center mb-1">
          <span className="bg-gray-300 text-xs font-semibold rounded px-2 py-0.5 mr-2">{project.year}</span>
          <span className="text-xs text-gray-600">{project.category}</span>
        </div>
        <h3 className="font-bold text-lg text-gray-900 mb-1">{project.title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2 mb-2">{project.description}</p>
        {project.technologies && project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-auto">
            {project.technologies.map((tech: string) => (
              <span key={tech} className="bg-gray-200 text-gray-800 text-xs font-medium px-1.5 py-0.5 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
      {project.githubUrl && (
        <Link href={project.githubUrl} target="_blank" aria-label="GitHub Repository" className="text-gray-500 hover:text-gray-600 transition-colors ml-4 flex-shrink-0 mt-1">
           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 3s-1.05-.33-3.44 1.35a12.42 12.42 0 0 0-6.88 0C6.46 2.66 5.42 3 5.42 3S5 4.17 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.61V22m-3.14-6c-.73 1-1.45 1.5-1.45 1.5"></path></svg>
        </Link>
      )}
    </div>
  );
} 