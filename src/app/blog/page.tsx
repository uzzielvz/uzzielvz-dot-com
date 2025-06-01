import { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import { getAllPosts } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Artículos sobre desarrollo de software, programación, y reflexiones personales.',
  openGraph: {
    title: 'Blog | Uziel García',
    description: 'Artículos sobre desarrollo de software, programación, y reflexiones personales.',
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex-1 w-full max-w-6xl mx-auto px-4 py-8 mt-16 flex flex-col">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.length === 0 ? (
            <div className="text-center text-gray-600 col-span-full">
              <p>No posts yet. Check back soon for updates.</p>
            </div>
          ) : (
            posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <PostCard post={post} />
              </Link>
            ))
          )}
        </div>
      </div>
    </main>
  );
} 