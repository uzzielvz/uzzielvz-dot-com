export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  type: string;
  description: string;
  image: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Freelance Full-Stack Developer",
    company: "Independent",
    location: "Remote",
    startDate: "2025",
    endDate: "Present",
    type: "Part-Time",
    description: "Design and development of tailored software solutions for web-based platforms. Responsibilities include building full-stack applications, collaborating with clients to understand their needs, writing clean and maintainable code, and deploying scalable systems using modern tools and technologies.",
    image: "/freelance.jpg",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB"]
  }
]; 