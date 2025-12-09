import { getPostData } from '@/lib/posts';
import Navbar from "@/components/Navbar";
import { notFound } from 'next/navigation';
import Image from 'next/image';

export default async function PostDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const postData = await getPostData(slug);

  if (!postData) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navbar />
      <section className="w-full flex justify-center py-12">
        <article className="bg-white/80 max-w-2xl w-full rounded-xl shadow-sm px-6 sm:px-10 py-10 border border-gray-200">
          {/* Tags y metadatos */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {postData.category && (
              <span className="bg-gray-100 border border-gray-200 text-gray-700 text-xs px-2.5 py-0.5 rounded-full font-normal tracking-wide uppercase">
                {postData.category}
              </span>
            )}
            {postData.tags?.map((tag, index) => (
              <span key={index} className="bg-gray-100 border border-gray-200 text-gray-700 text-xs px-2.5 py-0.5 rounded-full font-normal">
                {tag}
              </span>
            ))}
          </div>

          {/* Título */}
          <h1 className="text-lg font-semibold text-gray-900 mb-1 leading-tight tracking-tight">
            {postData.title}
          </h1>

          {/* Fecha */}
          <p className="text-xs text-gray-400 mb-8">{postData.date}</p>

          {/* Separador punteado */}
          <hr className="border-t border-dashed border-gray-300 mb-8" />

          {/* Imagen */}
          {postData.image && (
            <div className="mb-8 rounded-lg overflow-hidden flex justify-center">
              <Image
                src={postData.image}
                alt={postData.title}
                width={900}
                height={450}
                className="rounded-lg object-cover border border-gray-200"
                priority={true}
              />
            </div>
          )}

          {/* Contenido */}
          <div
            className="prose max-w-none text-gray-600 prose-p:mb-4 prose-ul:mb-4 prose-h3:mb-3 prose-h2:mb-4 prose-h1:mb-6 prose-img:rounded-lg prose-img:my-3 prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:pl-4 prose-blockquote:text-gray-400 prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded font-sans"
            style={{ fontSize: '0.88rem', lineHeight: '1.7', fontWeight: 400, textAlign: 'justify' }}
            dangerouslySetInnerHTML={{ __html: postData.content }}
          />

          {/* Separador punteado final */}
          <hr className="border-t border-dashed border-gray-300 mt-10 mb-2" />
        </article>
      </section>
    </main>
  );
}