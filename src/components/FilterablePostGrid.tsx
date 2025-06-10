'use client';

import { useState } from 'react';
import Link from 'next/link';
import PostCard from '@/components/PostCard';

interface Post {
  slug: string;
  title: string;
  date: string;
  category: string;
  description: string;
  image?: string;
  tags: string[];
  content: string;
  author?: string;
}

interface FilterablePostGridProps {
  posts: Post[];
}

export default function FilterablePostGrid({ posts }: FilterablePostGridProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Extraer categorías únicas
  const categories = ['All', ...new Set(posts.map(post => post.category).filter(Boolean))];

  // Filtrar posts según la categoría seleccionada
  const filteredPosts = selectedCategory === 'All'
    ? posts
    : posts.filter(post => post.category === selectedCategory);

  // Depuración: Log para verificar los posts recibidos y filtrados
  console.log('Posts recibidos:', posts);
  console.log('Posts filtrados:', filteredPosts);
  console.log('Categoría seleccionada:', selectedCategory);

  return (
    <div className="flex-1 w-full max-w-6xl mx-auto px-4 py-8 mt-16 flex flex-col">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Blog</h1>
      
      {/* Filtros de categorías */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-2 py-0.5 rounded-full text-xs text-gray-800 ${
              selectedCategory === category
                ? 'bg-gray-800 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            } transition-colors duration-200`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid de posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.length === 0 ? (
          <div className="text-center text-gray-600 col-span-full">
            <p>No posts available yet. Check back soon for updates.</p>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center text-gray-600 col-span-full">
            <p>No posts found in the category &quot;{selectedCategory}&quot;.</p>
          </div>
        ) : (
          filteredPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <PostCard post={post} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}