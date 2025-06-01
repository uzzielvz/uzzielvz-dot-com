import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { experiences } from "@/data/experience";
import ExperienceCard from "@/components/ExperienceCard";
import Hero from "@/components/Hero";
import { getSortedWorksData } from '@/lib/works';
import { getRecentPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export default async function Home() {
  const allWorks = await getSortedWorksData();
  const featuredWorks = allWorks.filter(work => work.featured);
  const posts = await getRecentPosts(2);

  return (
    <main className="min-h-screen bg-white flex flex-col flex-grow">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* Experience Section */}
      <section className="w-full py-20 bg-gray-50 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Experience</h2>
            <Link href="/experience" className="text-gray-600 hover:text-gray-900 transition-colors">
              view all experience →
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
      <section id="works" className="w-full py-20 bg-white min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Works</h1>
            <Link href="/works" className="text-gray-600 hover:text-gray-900 transition-colors">
              view all works →
            </Link>
          </div>
          <p className="text-gray-700 text-lg mb-8 text-justify">
            A collection of my recent projects and works. Each project represents a unique challenge and learning experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredWorks.map((work) => (
              <Link 
                href={`/works/${work.slug}`} 
                key={work.slug}
                className="group block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700">
                    {work.title}
                  </h2>
                  <div className="flex items-center mb-4">
                    <span className="bg-gray-300 text-xs font-semibold rounded px-2 py-0.5 mr-2">
                      {work.year}
                    </span>
                    <span className="text-xs text-gray-600">{work.category}</span>
                  </div>
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                    {work.content}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {work.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-gray-200 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="w-full py-20 bg-gray-50 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Recent Posts</h2>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">
              view all posts →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.length === 0 ? (
              <div className="text-center text-gray-600 col-span-full">
                <p>No posts yet. Check back soon for updates.</p>
              </div>
            ) : (
              posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <PostCard post={post} />
                </Link>
              ))
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
