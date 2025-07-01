'use client';

import { Post } from '@/lib/posts';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  // Formatear la fecha
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <article className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-all duration-300 hover:shadow-sm">
      <div className="p-6">
        {/* Header del post */}
        <header className="mb-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              {post.category}
            </span>
            <span className="text-gray-300">•</span>
            <time className="text-xs text-gray-500">
              {formattedDate}
            </time>
          </div>
          
          <h3 className="text-lg font-medium text-gray-900 group-hover:text-gray-700 transition-colors duration-200 leading-tight">
            {post.title}
          </h3>
        </header>

        {/* Descripción */}
        <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
          {post.description}
        </p>

        {/* Tags */}
        {post.tags.length > 0 && (
          <footer className="flex flex-wrap gap-1.5">
            {post.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-gray-50 text-gray-600 text-xs px-2 py-1 rounded-md border border-gray-100"
              >
                {tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="inline-block text-gray-400 text-xs px-2 py-1">
                +{post.tags.length - 3} more
              </span>
            )}
          </footer>
        )}
      </div>
    </article>
  );
}