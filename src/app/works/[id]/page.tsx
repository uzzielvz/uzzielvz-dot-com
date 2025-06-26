import { getSortedWorksData } from '@/lib/works';
import Navbar from "@/components/Navbar";
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function WorkDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const works = await getSortedWorksData();
  const work = works[Number(id)];

  if (!work) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-8 mt-12">
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
            
            {work.features && work.features.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Features</h2>
                <ul className="list-disc pl-6 space-y-2">
                  {work.features.map((feature: string, index: number) => (
                    <li key={index} className="text-gray-700">{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {work.requirements && work.requirements.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">System Requirements</h2>
                <ul className="list-disc pl-6 space-y-2">
                  {work.requirements.map((req: string, index: number) => (
                    <li key={index} className="text-gray-700">{req}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {work.technologies.map((tech: string, index: number) => (
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
      </div>
    </main>
  );
} 