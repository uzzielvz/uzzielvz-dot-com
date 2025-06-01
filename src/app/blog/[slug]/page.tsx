import { getPostData } from '@/lib/posts';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from 'next/navigation';

export default async function PostDetail({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug);

  if (!postData) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <section className="w-full py-8 mt-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
          <p className="text-gray-600 text-xl mb-4">{postData.date} | {postData.category}</p>
          {postData.image && (
            <img src={postData.image} alt={postData.title} className="mb-6 rounded-lg" />
          )}
          <div className="flex flex-wrap gap-2 mb-6">
            {postData.tags?.map((tag, index) => (
              <span key={index} className="bg-gray-200 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          {/* Renderizar el contenido HTML del Markdown con estilos prose */}
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: postData.content }} />
        </div>
      </section>
    </main>
  );
} 