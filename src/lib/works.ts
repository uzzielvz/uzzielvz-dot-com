import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Define la interfaz para los datos del frontmatter del proyecto
export interface WorkData {
  title: string;
  year: string;
  category: string;
  technologies: string[];
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
  featured?: boolean;
}

// Define la interfaz para un proyecto completo (frontmatter + contenido)
export interface Work extends WorkData {
  slug: string;
  content: string;
}

const worksDirectory = path.join(process.cwd(), 'content/works');

export async function getSortedWorksData(): Promise<Work[]> {
  try {
    const fileNames = fs.readdirSync(worksDirectory)
      .filter(fileName => fileName.endsWith('.md'));

    const allWorksData = await Promise.all(fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(worksDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      // Procesar el contenido markdown a HTML
      const processedContent = await remark()
        .use(html, { sanitize: false })
        .process(matterResult.content);
      const contentHtml = processedContent.toString();

      // Asegurarse de que todos los campos requeridos estén presentes
      const workData: WorkData = {
        title: matterResult.data.title || '',
        year: matterResult.data.year || '',
        category: matterResult.data.category || '',
        technologies: matterResult.data.technologies || [],
        role: matterResult.data.role,
        features: matterResult.data.features,
        achievements: matterResult.data.achievements,
        requirements: matterResult.data.requirements,
        development_practices: matterResult.data.development_practices,
        testing: matterResult.data.testing,
        team: matterResult.data.team,
        githubUrl: matterResult.data.githubUrl,
        demo: matterResult.data.demo,
        images: matterResult.data.images,
        featured: matterResult.data.featured
      };

      return {
        ...workData,
        slug,
        content: contentHtml,
      };
    }));

    return allWorksData.sort((a, b) => {
      if (parseInt(a.year) < parseInt(b.year)) {
        return 1;
      } else {
        return -1;
      }
    });
  } catch (error) {
    console.error('Error reading works:', error);
    return [];
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
    const workData: WorkData = {
      title: matterResult.data.title || '',
      year: matterResult.data.year || '',
      category: matterResult.data.category || '',
      technologies: matterResult.data.technologies || [],
      role: matterResult.data.role,
      features: matterResult.data.features,
      achievements: matterResult.data.achievements,
      requirements: matterResult.data.requirements,
      development_practices: matterResult.data.development_practices,
      testing: matterResult.data.testing,
      team: matterResult.data.team,
      githubUrl: matterResult.data.githubUrl,
      demo: matterResult.data.demo,
      images: matterResult.data.images,
      featured: matterResult.data.featured
    };

    return {
      ...workData,
      slug,
      content: contentHtml,
    };
  } catch (error) {
    console.error(`Error reading work ${slug}:`, error);
    return null;
  }
} 