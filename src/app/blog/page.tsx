import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import PostCard from "../../components/PostCard";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

async function getPosts() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  
  // Verificar si la carpeta posts existe antes de leer su contenido
  if (!fs.existsSync(postsDirectory)) {
    return []; // Retornar un array vacío si la carpeta no existe
  }

  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug: filename.replace(/\.md$/, ''),
      title: data.title,
      date: data.date,
      tags: data.tags,
      excerpt: data.excerpt,
    };
  });

  // Ordenar posts por fecha (más reciente primero)
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <section className="w-full py-20 mt-0 min-h-screen">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Blog</h1>
          {
            posts.length === 0 ? (
              <div className="text-center text-gray-600 text-sm mt-10">
                <p>Oh, it's void here...</p>
              </div>
            ) : (
              <div className="flex flex-wrap -mx-4">
                {posts.map((post, index) => (
                  <div key={post.slug} className="w-full md:w-1/2 px-4 mb-8">
                    <Link href={`/blog/${post.slug}`}>
                      <PostCard post={post} />
                    </Link>
                    {index < posts.length - 1 && (
                      <hr className="my-6 border-gray-200" />
                    )}
                  </div>
                ))}
              </div>
            )
          }
        </div>
      </section>
      <Footer />
    </main>
  );
} 