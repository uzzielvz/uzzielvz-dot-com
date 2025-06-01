import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export interface Post {
  slug: string;
  title: string;
  date: string;
  category: string;
  description: string;
  image?: string;
  tags: string[];
  content: string;
}

export async function getAllPosts(): Promise<Post[]> {
  try {
    const fileNames = fs.readdirSync(postsDirectory)
      .filter(fileName => fileName.endsWith('.md')); // Solo archivos .md

    const allPostsData = await Promise.all(fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      // Procesar el contenido markdown a HTML
      const processedContent = await remark()
        .use(html, { sanitize: false })
        .process(content);
      const contentHtml = processedContent.toString();

      return {
        slug,
        title: data.title,
        date: data.date,
        category: data.category,
        description: data.excerpt || '',
        image: data.image,
        tags: data.tags || [],
        content: contentHtml,
      };
    }));

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
  } catch (error) {
    console.error('Error reading posts:', error);
    return [];
  }
}

export async function getRecentPosts(limit: number = 2): Promise<Post[]> {
  const allPosts = await getAllPosts();
  return allPosts.slice(0, limit);
}

export async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  // Procesar el contenido markdown a HTML
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    ...(matterResult.data as { date: string; title: string; category: string; description: string; image?: string; tags?: string[] }),
    content: contentHtml,
  };
} 