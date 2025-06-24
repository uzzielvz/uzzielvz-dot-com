import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'framer-motion';
// Elimina: import { useParams, Link } from "react-router-dom";

const WorkDetail = () => {
  const router = useRouter();
  const { id } = router.query; // Reemplaza useParams()
  const work = id ? works[Number(id)] : null; // Esto fallará hasta Tarea 2

  if (!work) {
    return <div>Work not found</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <Link href="/works" className="text-gray-500 hover:text-gray-700 mb-4 inline-block">
        ← Back to Works
      </Link>
      
      <div className="bg-white rounded-lg shadow-lg p-6 mt-4">
        <h1 className="text-3xl font-bold mb-4">{work.title}</h1>
        <div className="flex gap-4 mb-6">
          <span className="text-gray-600">{work.year}</span>
          <span className="text-gray-600">{work.category}</span>
        </div>
        
        <div className="prose max-w-none mb-8">
          <p className="text-gray-700 mb-6">{work.description}</p>
          
          {work.features && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Features</h2>
              <ul className="list-disc pl-6 space-y-2">
                {work.features.map((feature, index) => (
                  <li key={index} className="text-gray-700">{feature}</li>
                ))}
              </ul>
            </div>
          )}
          
          {work.requirements && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">System Requirements</h2>
              <ul className="list-disc pl-6 space-y-2">
                {work.requirements.map((req, index) => (
                  <li key={index} className="text-gray-700">{req}</li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {work.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {work.githubUrl && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Repository</h2>
              <a
                href={work.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200 transition-colors"
              >
                View Repository
              </a>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default WorkDetail;