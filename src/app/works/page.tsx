import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getSortedWorksData } from '@/lib/works';
import Link from "next/link";

export default async function WorksPage() {
  const allWorks = await getSortedWorksData();

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
            {allWorks.map((work) => (
              <div key={work.slug} className="mb-8">
                <h2 className="text-2xl font-bold mb-2">{work.title}</h2>
                <p className="text-gray-600 mb-2">{work.year} | {work.category}</p>
                <p>{work.role}</p>
                {work.githubUrl && (
                  <p>
                    <a href={work.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                      GitHub
                    </a>
                  </p>
                )}
                <p>
                  <a href={`/works/${work.slug}`} className="text-blue-500 hover:underline">
                    Ver detalles
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
} 