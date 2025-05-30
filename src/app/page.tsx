import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";
import WorkCard from "@/components/WorkCard";
import ExperienceCard from "@/components/ExperienceCard";
import PostCard from "@/components/PostCard";
import { getRecentPosts, Post } from "@/lib/posts";
import Hero from "@/components/Hero";

export default async function Home() {
  const recentPosts = await getRecentPosts(2);

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* About Me Section */}
      {/* Eliminada */}

      {/* Skills Section */}
      {/* Movida a /skills */}

      {/* Experience Section */}
      <section className="w-full py-20 bg-gray-50 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Experience</h2>
            <Link href="/experience" className="text-gray-600 hover:text-gray-900 transition-colors">
              Ver toda la experiencia →
            </Link>
          </div>
          <div className="space-y-8">
            {experiences.slice(0, 2).map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="w-full py-20 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Featured Works</h2>
            <Link href="/works" className="text-gray-600 hover:text-gray-900 transition-colors">
              Ver todos los trabajos →
            </Link>
          </div>
          <div className="space-y-8">
            {projects.slice(0, 2).map((project) => (
              <WorkCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="w-full py-20 bg-gray-50 min-h-screen flex justify-start">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Recent Posts</h2>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">
              Ver todos los posts →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentPosts.length === 0 ? (
              <div className="text-center text-gray-600 col-span-full">
                <p>No recent posts yet. Check back soon for updates.</p>
              </div>
            ) : (
              recentPosts.map((post: Post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <PostCard post={post} />
                </Link>
              ))
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
