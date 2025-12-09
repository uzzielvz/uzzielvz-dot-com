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
    title: "Software and Data Engineer Intern",
    company: "CrediFlexi",
    location: "Metepec, Mexico",
    startDate: "September 2025",
    endDate: "Present",
    type: "Full-Time",
    description: "Developed internal automation tools and data workflows using Python (FastAPI, Flask, Pandas), improving reporting speed and reducing manual processes. Designed and implemented data analysis and reporting modules using SQL to enhance data visibility for internal teams. Built and maintained web applications using JavaScript and TypeScript, contributing to features that improved operational efficiency.",
    image: "/credifkexi.png",
    technologies: ["Python", "FastAPI", "Flask", "Pandas", "SQL", "JavaScript", "TypeScript"]
  },
  {
    id: 2,
    title: "Freelance Frontend Developer",
    company: "Independent",
    location: "Remote",
    startDate: "2025",
    endDate: "Present",
    type: "Part-Time",
    description: "Design and development of tailored software solutions for web-based platforms. Responsibilities include building frontend applications, collaborating with clients to understand their needs, writing clean and maintainable code, and creating responsive user interfaces using modern tools and technologies.",
    image: "/freelance.jpg",
    technologies: ["JavaScript", "React", "TypeScript", "HTML", "CSS"]
  }
]; 