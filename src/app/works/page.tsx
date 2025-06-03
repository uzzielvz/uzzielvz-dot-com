import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getSortedWorksData } from '@/lib/works';
import Link from "next/link";

export default async function WorksPage() {
  const allWorks = await getSortedWorksData();

  return (
    <main className="min-h-screen bg-white flex flex-col flex-grow">
      <Navbar />
      <section className="w-full min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-4 w-full">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Works</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allWorks.map((work) => (
              <Link 
                href={`/works/${work.slug}`} 
                key={work.slug}
                className="group block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                {work.image && (
                  <div className="w-full h-48 overflow-hidden">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700">
                    {work.title}
                  </h2>
                  <div className="flex items-center mb-4">
                    <span className="text-sm text-gray-600">{work.date}</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-sm text-gray-600">{work.category}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {work.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {work.role && (
                    <p className="text-sm text-gray-600 mb-2">
                      <span className="font-medium">Rol:</span> {work.role}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
} 