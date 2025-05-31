export interface Post {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
  slug: string;
  tags: string[];
}

export const posts: Post[] = [
  {
    id: 1,
    title: "Building a Modern Portfolio with Next.js",
    description: "A detailed guide on how to create a modern, responsive portfolio website using Next.js, TypeScript, and Tailwind CSS. Learn about best practices, performance optimization, and deployment strategies.",
    date: "May 2024",
    category: "Web Development",
    image: "/blog/nextjs-portfolio.jpg",
    slug: "building-modern-portfolio-nextjs",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Web Development"]
  },
  {
    id: 2,
    title: "Understanding TypeScript Generics",
    description: "Deep dive into TypeScript generics, exploring how they can make your code more reusable and type-safe. Includes practical examples and common use cases.",
    date: "April 2024",
    category: "Programming",
    image: "/blog/typescript-generics.jpg",
    slug: "understanding-typescript-generics",
    tags: ["TypeScript", "Programming", "Web Development"]
  }
]; 