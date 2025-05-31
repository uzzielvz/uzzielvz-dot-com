"use client";

import Image from "next/image";
import Link from "next/link";
import { Post } from "@/lib/posts";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      <div className="p-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-medium text-gray-900 mb-1 truncate">
            {post.title}
          </h3>
          <div className="flex items-center text-xs text-gray-500 mb-2">
            <span className="text-gray-600">{post.category}</span>
            <span className="mx-1">•</span>
            <span>{post.date}</span>
          </div>
          <p className="text-gray-600 text-xs mb-2 line-clamp-2">
            {post.description}
          </p>
          <div className="flex flex-wrap gap-1">
            {post.tags.map((tag, index) => (
              <span 
                key={index}
                className="bg-gray-100 text-gray-600 text-xs px-1.5 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 