import { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import { getAllPosts } from '@/lib/posts';
import FilterablePostGrid from '@/components/FilterablePostGrid';

// Exportar metadata desde el componente servidor
export const metadata: Metadata = {
  title: 'Blog',
  description: 'Artículos sobre desarrollo de software, programación, y reflexiones personales.',
  openGraph: {
    title: 'Blog | Uzziel García',
    description: 'Artículos sobre desarrollo de software, programación, y reflexiones personales.',
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <FilterablePostGrid posts={posts} />
    </main>
  );
}