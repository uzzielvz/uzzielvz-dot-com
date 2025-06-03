import { getPostData } from '@/lib/posts';
import Navbar from "@/components/Navbar";
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function PostDetail({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug);

  if (!postData) {
    notFound();
  }

  // Extraer el año de la fecha
  const postYear = new Date(postData.date).getFullYear();

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <section className="w-full py-12 mt-16">
        <div className="max-w-4xl mx-auto px-4">

          {/* Metadatos estilo cajas */}
          <div className="flex items-center space-x-2 mb-4 text-sm">
            {postData.category && (
              <span className="border border-gray-300 px-2 py-0.5 text-gray-700 rounded">{postData.category}</span>
            )}
            {/* Asumiendo que tienes un campo 'author' */}
            {/* {postData.author && (
              <span className="border border-gray-300 px-2 py-0.5 text-gray-700 rounded">by {postData.author}</span>
            )} */}
            {postYear && (
               <div className="border border-dashed border-gray-500 px-2 py-0.5 text-gray-700 rounded">{postYear}</div>
            )}
          </div>

          {/* Título */}
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{postData.title}</h1>

          {/* Fecha */}
          <p className="text-gray-600 text-sm mb-6">{postData.date}</p>

          {/* Imagen (si existe) */}
          {postData.image && (
            <div className="mb-6">
              <img src={postData.image} alt={postData.title} className="w-full rounded-lg" />
            </div>
          )}

          {/* Línea punteada */}
          <div className="border-b border-dashed border-gray-400 w-full my-6"></div>

          {/* Sección de metadatos detallados (label ::) */}
          <div className="mb-6 text-sm text-gray-700">
            <p className="font-semibold mb-2">label ::</p>
            <p>essay: {postData.title}</p>
            {/* Asumiendo que tienes un campo 'author' */}
             {postData.author && <p>author: {postData.author}</p>}
            <p>date: {postData.date}</p>
            {/* Si tienes enlace a repositorio, puedes añadirlo aquí */}
             {/* {postData.repositoryUrl && <p>repository: <Link href={postData.repositoryUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{postData.repositoryUrl}</Link></p>} */}

             {/* Categoría y Tags con estilo redondeado */}
             {(postData.category || (postData.tags && postData.tags.length > 0)) && (
                <div className="flex items-center mt-2">
                    {postData.category && (
                        <span className="bg-gray-200 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">
                            {postData.category}
                        </span>
                    )}
                    {postData.tags?.map((tag, index) => (
                        <span key={index} className="bg-gray-200 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">
                            {tag}
                        </span>
                    ))}
                </div>
             )}
          </div>

          {/* Línea punteada */}
           <div className="border-b border-dashed border-gray-400 w-full my-6"></div>

          {/* Contenido principal */}
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: postData.content }} />

           {/* Footer (Se renderiza desde el layout) */}
        </div>
      </section>
    </main>
  );
} 