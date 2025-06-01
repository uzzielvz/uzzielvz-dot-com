import { getWorkData } from '@/lib/works';
import { remark } from 'remark';
import html from 'remark-html';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from 'next/navigation';

export default async function WorkDetail({ params }: { params: { slug: string } }) {
  const workData = await getWorkData(params.slug);

  if (!workData) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <section className="w-full py-8 mt-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{workData.title}</h1>
          <p className="text-gray-600 text-xl mb-4">{workData.year} | {workData.category}</p>

          {workData.role && (
            <p className="text-gray-700 mb-4"><strong>Rol:</strong> {workData.role}</p>
          )}

          {workData.technologies && workData.technologies.length > 0 && (
            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">Tecnologías</h2>
              <ul className="list-disc list-inside">
                {workData.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          )}

          {workData.features && workData.features.length > 0 && (
            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">Características</h2>
              <ul className="list-disc list-inside">
                {workData.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {workData.achievements && workData.achievements.length > 0 && (
            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">Logros</h2>
              <ul className="list-disc list-inside">
                {workData.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          )}

          {workData.requirements && workData.requirements.length > 0 && (
            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">Requisitos</h2>
              <ul className="list-disc list-inside">
                {workData.requirements.map((requirement, index) => (
                  <li key={index}>{requirement}</li>
                ))}
              </ul>
            </div>
          )}

          {workData.development_practices && (
            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">Prácticas de Desarrollo</h2>
              <p>{workData.development_practices}</p>
            </div>
          )}

          {workData.testing && (
            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">Testing</h2>
              <p>{workData.testing}</p>
            </div>
          )}

          {workData.team && (
            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">Equipo</h2>
              <p>{workData.team}</p>
            </div>
          )}

          {workData.githubUrl && (
            <p className="mb-4">
              <a href={workData.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Ver en GitHub
              </a>
            </p>
          )}

          {/* Renderizar el contenido HTML del Markdown con estilos prose */}
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: workData.content }} />
        </div>
      </section>
    </main>
  );
} 