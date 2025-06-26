import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export interface Work {
  slug: string;
  title: string;
  date: string;
  year?: string;
  category: string;
  technologies: string[];
  description: string;
  image?: string;
  githubUrl?: string;
  webUrl?: string;
  demoRequestUrl?: string;
  featured: boolean;
  content: string;
  features?: string[];
  requirements?: string[];
}

const worksDirectory = path.join(process.cwd(), 'works');

export async function getSortedWorksData(): Promise<Work[]> {
  try {
    const fileNames = fs.readdirSync(worksDirectory).filter(file => file.endsWith('.md'));
    const allWorksData = await Promise.all(fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(worksDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      const processedContent = await remark()
        .use(html, { sanitize: false })
        .process(content);
      const contentHtml = processedContent.toString();

      return {
        slug,
        title: data.title || '',
        date: data.date || '',
        year: data.year || data.date?.split('-')[0] || '',
        category: data.category || 'Uncategorized',
        technologies: data.technologies || [],
        description: data.description || 'No description available.',
        image: data.image,
        githubUrl: data.githubUrl,
        webUrl: data.webUrl,
        demoRequestUrl: data.demoRequestUrl,
        featured: data.featured || false,
        content: contentHtml,
        features: data.features || [],
        requirements: data.requirements || [],
      } as Work;
    }));

    return allWorksData.sort((a, b) => (a.date < b.date ? 1 : -1));
  } catch (error) {
    console.error('Error reading works:', error);
    return [];
  }
}