import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Define la interfaz para los datos del frontmatter del proyecto
export interface Work {
  slug: string;
  title: string;
  date: string;
  category: string;
  technologies: string[];
  featured: boolean;
  image: string;
  content: string;
  role?: string;
  features?: string[];
  achievements?: string[];
  requirements?: string[];
  development_practices?: string;
  testing?: string;
  team?: string;
  githubUrl?: string;
  demo?: string;
  images?: string[];
}

const worksDirectory = path.join(process.cwd(), 'works');

export function getSortedWorksData(): Work[] {
  // Obtener nombres de archivos en el directorio works
  const fileNames = fs.readdirSync(worksDirectory);
  const allWorksData = fileNames.map((fileName) => {
    // Remover ".md" del nombre del archivo para obtener el slug
    const slug = fileName.replace(/\.md$/, '');

    // Leer el archivo markdown como string
    const fullPath = path.join(worksDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Usar gray-matter para parsear el frontmatter del archivo markdown
    const { data, content } = matter(fileContents);

    // Combinar los datos con el slug
    return {
      slug,
      content,
      ...data,
    } as Work;
  });

  // Ordenar works por fecha
  return allWorksData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getWorkBySlug(slug: string): Work | null {
  try {
    const fullPath = path.join(worksDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      ...data,
    } as Work;
  } catch (error) {
    return null;
  }
}

export async function getWorkData(slug: string): Promise<Work | null> {
  try {
    const fullPath = path.join(worksDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    // Procesar el contenido markdown a HTML
    const processedContent = await remark()
      .use(html, { sanitize: false })
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Asegurarse de que todos los campos requeridos estén presentes
    const workData: Work = {
      slug,
      title: matterResult.data.title || '',
      date: matterResult.data.date || '',
      category: matterResult.data.category || '',
      technologies: matterResult.data.technologies || [],
      featured: matterResult.data.featured || false,
      image: matterResult.data.image || '',
      content: contentHtml,
      role: matterResult.data.role,
      features: matterResult.data.features,
      achievements: matterResult.data.achievements,
      requirements: matterResult.data.requirements,
      development_practices: matterResult.data.development_practices,
      testing: matterResult.data.testing,
      team: matterResult.data.team,
      githubUrl: matterResult.data.githubUrl,
      demo: matterResult.data.demo,
      images: matterResult.data.images
    };

    return workData;
  } catch (error) {
    console.error(`Error reading work ${slug}:`, error);
    return null;
  }
} 