import Navbar from "@/components/Navbar";
import Link from "next/link";
import { experiences } from "@/data/experience";
import ExperienceCard from "@/components/ExperienceCard";
import Hero from "@/components/Hero";
import { getSortedWorksData } from '@/lib/works';
import { getRecentPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import Image from "next/image";

export default async function Home() {
  const allWorks = await getSortedWorksData();
  const featuredWorks = allWorks.filter(work => work.featured);
  const posts = await getRecentPosts(2);

  return (
    <main className="min-h-screen bg-white flex flex-col flex-grow">
      <Navbar />
      
      {/* Hero Section */}
      <section className="w-full min-h-screen flex items-center">
        <Hero />
      </section>

      {/* Experience Section */}
      <section className="w-full min-h-screen flex items-center bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 w-full">
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
      <section id="works" className="w-full min-h-screen flex items-center bg-white">
        <div className="max-w-6xl mx-auto px-4 w-full">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Featured Works</h1>
            <Link href="/works" className="text-gray-600 hover:text-gray-900 transition-colors">
              view all works →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {featuredWorks.length === 0 ? (
              <div className="text-center text-gray-600 col-span-full">
                <p>No featured works yet. Check back soon for updates.</p>
              </div>
            ) : (
              featuredWorks.map((work) => (
                <Link 
                  href={`/works`} 
                  key={work.slug}
                  className="group block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col md:flex-row border border-gray-300 hover:border-gray-400"
                >
                  {work.image && (
                    <div className="w-full md:w-1/3 h-48 md:h-auto overflow-hidden flex-shrink-0">
                      <Image
                        src={work.image}
                        alt={work.title}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        priority={false}
                      />
                    </div>
                  )}
                  <div className="p-5 flex-1 flex flex-col justify-center">
                    <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700">
                      {work.title}
                    </h2>
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="bg-gray-200 text-gray-800 text-xs font-medium px-2 py-0.5 rounded">{new Date(work.date).getFullYear()}</span>
                      <span className="text-sm text-gray-700">{work.category}</span>
                    </div>
                    <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                      {work.description}
                    </p>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="w-full min-h-screen flex items-center bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 w-full">
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