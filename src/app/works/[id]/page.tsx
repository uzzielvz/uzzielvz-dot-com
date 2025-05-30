import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

// Función para obtener los datos de un proyecto específico por su ID
async function getProjectData(id: string) {
  const project = projects.find(p => p.id.toString() === id);
  return project;
}

// Función para generar los paths estáticos (pre-renderizar páginas)
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default async function ProjectPage({ params }: { params: { id: string } }) {
  const project = await getProjectData(params.id);

  // Manejar caso donde el proyecto no se encuentra (opcional)
  if (!project) {
    return (
      <main className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <section className="w-full py-8 mt-16 text-center">
           <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Project not found</h1>
            <p className="text-gray-600">The project you are looking for does not exist.</p>
            <Link href="/works" className="text-blue-600 hover:underline mt-4 inline-block">Back to Works</Link>
           </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <section className="w-full py-8 mt-16">
         <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
          <div className="flex items-center mb-6 text-gray-600 text-sm">
            <span className="bg-gray-300 text-xs font-semibold rounded px-2 py-0.5 mr-2 text-gray-800">{project.year}</span>
            <span>{project.category}</span>
            {project.githubUrl && (
              <Link href={project.githubUrl} target="_blank" aria-label="GitHub Repository" className="text-gray-500 hover:text-gray-900 ml-4">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            )}
          </div>

          {/* Imagen del proyecto */}
          <div className="w-full mb-8">
            <Image
              src={project.image}
              alt={project.title}
              width={800} // Ajusta según necesites
              height={400} // Ajusta según necesites
              className="rounded-lg object-cover w-full"
              priority // Carga la imagen con prioridad si es la principal
            />
          </div>

          {/* Descripción del proyecto */}
          <div className="prose lg:prose-xl max-w-none text-gray-700 mb-8">
             <p>{project.description}</p>
             {/* Aquí podrías agregar más detalles o contenido Markdown si quisieras */}
          </div>

          {/* Sección de Tecnologías */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Tecnologías:</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string) => (
                  <span key={tech} className="bg-gray-200 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {tech}
                  </span>
                ))
                }
              </div>
            </div>
          )}
         </div>
      </section>
      <Footer />
    </main>
  );
} 