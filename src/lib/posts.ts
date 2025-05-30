import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
};

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string): Post & { content: string } {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  // Ensure date is a string
  const dateString = data.date instanceof Date ? data.date.toISOString().split('T')[0] : data.date;

  const postData = {
    slug: realSlug,
    title: data.title,
    date: dateString,
    excerpt: data.excerpt || '',
    tags: data.tags || [],
    content,
  };

  return postData as Post & { content: string };
}

export async function getRecentPosts(count: number): Promise<Post[]> {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => getPostBySlug(slug));

  // Sort posts by date in descending order
  const sortedPosts = posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  // Return the specified number of recent posts
  return sortedPosts.slice(0, count);
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => getPostBySlug(slug));

  // Sort posts by date in descending order
  const sortedPosts = posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return sortedPosts;
} 