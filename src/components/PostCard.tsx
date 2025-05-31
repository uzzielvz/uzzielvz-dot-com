export default function PostCard({ post }: { post: any }) {
  // Asegurarse de que la fecha sea un string antes de mostrarla
  const formattedDate = post.date instanceof Date ? post.date.toDateString() : post.date;

  return (
    <div className="bg-gray-100 rounded-lg p-4 flex flex-col h-full">
      <div className="mb-2">
        <span className="font-bold text-base text-gray-900">{post.title}</span>
      </div>
      <div className="text-xs text-gray-600 mb-2">
        {formattedDate} &nbsp; | &nbsp; {post.tags?.join(", ")}
      </div>
      <p className="text-gray-700 text-sm line-clamp-3 flex-1 leading-relaxed text-justify">{post.excerpt}</p>
    </div>
  );
} 