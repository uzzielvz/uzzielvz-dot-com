import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ExperienceCard from "@/components/ExperienceCard";
import { experiences } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <section className="w-full py-8 mt-16 min-h-screen flex justify-start">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Experience</h1>
          <div className="space-y-6">
            {experiences.length === 0 ? (
              <div className="text-center text-gray-600 text-sm mt-10">
                <p>No hay experiencia laboral para mostrar todavía.</p>
              </div>
            ) : (
              experiences.map((experience) => (
                <ExperienceCard key={experience.id} experience={experience} />
              ))
            )}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
} 