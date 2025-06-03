import { getWorkBySlug } from '@/lib/works';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function WorkPage({ params }: { params: { slug: string } }) {
  const work = getWorkBySlug(params.slug);

  if (!work) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white flex flex-col flex-grow">
      <Navbar />
      <article className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{work.title}</h1>
          <div className="flex items-center space-x-4 text-gray-600">
            <span>{work.date}</span>
            <span>•</span>
            <span>{work.category}</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {work.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </header>

        {work.image && (
          <div className="mb-8">
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none">
          <MDXRemote source={work.content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
        </div>
      </article>
    </main>
  );
} 