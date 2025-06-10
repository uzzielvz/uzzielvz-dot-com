import { getPostData } from '@/lib/posts';
import Navbar from "@/components/Navbar";
import { notFound } from 'next/navigation';


export default async function PostDetail({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug);

  if (!postData) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <section className="w-full py-8 mt-12">
        <article className="max-w-3xl mx-auto px-6">
          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-2 mb-4 text-xs text-gray-600">
            {postData.category && (
              <span className="bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full">{postData.category}</span>
            )}
            {postData.tags?.map((tag, index) => (
              <span key={index} className="bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full">{tag}</span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-2xl font-light text-gray-900 mb-4">{postData.title}</h1>

          {/* Date */}
          <p className="text-gray-500 text-xs mb-4">{postData.date}</p>

          {/* Image */}
          {postData.image && (
            <div className="mb-4">
              <img src={postData.image} alt={postData.title} className="w-full rounded-lg" />
            </div>
          )}

          {/* Content */}
          <div className="prose max-w-none text-justify text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: postData.content }} />
        </article>
      </section>
    </main>
  );
}