import Navbar from "@/components/Navbar";
import { getSortedWorksData } from '@/lib/works';
import WorkCard from "@/components/WorkCard";

export default async function WorksPage() {
  const allWorks = await getSortedWorksData();

  return (
    <main className="min-h-screen bg-white flex flex-col flex-grow">
      <Navbar />
      <section className="w-full py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 w-full">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Works</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allWorks.map((work) => (
              <WorkCard key={work.slug} project={work} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
// This page displays a list of works using the WorkCard component.