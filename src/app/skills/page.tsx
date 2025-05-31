import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <section className="w-full py-8 mt-16 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 flex flex-col flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-left">Skills & Technologies</h1>
          <p className="text-gray-700 text-lg mb-8 text-justify">
            Aquí puedes encontrar un resumen de las principales tecnologías y habilidades que he adquirido y utilizado en mi trayectoria como desarrollador. Esta lista abarca desde lenguajes de programación y frameworks hasta herramientas de desarrollo y habilidades interpersonales clave para el trabajo en equipo y la resolución de problemas.
          </p>
          <div className="flex-1 flex items-center justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { name: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
                { name: "Backend", skills: ["Node.js", "Python", "SQL", "MongoDB"] },
                { name: "Tools", skills: ["Git", "Docker", "AWS", "Figma"] },
                { name: "Soft Skills", skills: ["Problem Solving", "Team Work", "Communication", "Agile"] }
              ].map((category) => (
                <div key={category.name} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.name}</h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li key={skill} className="text-gray-700 flex items-center">
                        <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
} 