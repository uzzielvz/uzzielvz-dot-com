"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const skillCategories = [
  {
    name: "Lenguages",
    skills: ["Java", "C", "TypeScript", "JavaScript", "Python", "PHP", "HTML & CSS", "SQL"]
  },
  {
    name: "Frameworks and more",
    skills: ["Node.js", "React", "Django", "Next.js", "Flask"]
  },
  {
    name: "Tools",
    skills: ["Git", "AWS", "Figma", "Github"]
  },
  {
    name: "Soft Skills",
    skills: ["Problem Solving", "Team Work", "Communication", "Agile"]
  }
];

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <section className="w-full py-8 mt-16 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 flex flex-col flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-left">Skills & Technologies</h1>
          <p className="text-gray-700 text-lg mb-8 text-justify">
            This is a summary of the core technologies and skills I have worked with. It includes programming languages, frameworks, development tools, and key competencies in collaboration and problem-solving.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category) => (
              <div key={category.name} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.name}</h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill} className="flex items-center">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 