import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Markdown from 'markdown-to-jsx';

// Función para obtener los datos de un post específico
async function getPostData(slug: string) {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    date: data.date instanceof Date ? data.date.toDateString() : data.date, // Asegurar formato de fecha
    tags: data.tags,
    content,
  };
}

// Función para generar los paths estáticos (pre-renderizar páginas)
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'posts');
   // Verificar si la carpeta posts existe antes de leer su contenido
  if (!fs.existsSync(postsDirectory)) {
    return []; // Retornar un array vacío si la carpeta no existe
  }
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ''),
  }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostData(params.slug);

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <section className="w-full py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{post.title}</h1>
          <div className="text-sm text-gray-600 mb-6">
            {post.date} &nbsp; | &nbsp; {post.tags?.join(", ")}
          </div>
          <div className="prose lg:prose-xl max-w-none">
            <Markdown>{post.content}</Markdown>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
} 