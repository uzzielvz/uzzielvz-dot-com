import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { GithubIcon } from "../../../components/Hero";

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
                <GithubIcon />
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
          <div className="text-gray-700 mb-8">
             <p className="leading-relaxed text-justify">{project.description}</p>
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