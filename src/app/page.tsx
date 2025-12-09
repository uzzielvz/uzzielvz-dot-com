import Navbar from "@/components/Navbar";
import Link from "next/link";
import { experiences } from "@/data/experience";
import ExperienceCard from "@/components/ExperienceCard";
import Hero from "@/components/Hero";
import { getSortedWorksData } from '@/lib/works';
import { getRecentPosts, getAllPosts } from "@/lib/posts";

export default async function Home() {
  const allWorks = await getSortedWorksData();
  const featuredWorks = allWorks.filter(work => work.featured);
  const posts = await getRecentPosts(2);
  const allPosts = await getAllPosts();
  const hasMorePosts = allPosts.length > posts.length;

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
                <div
                  key={work.slug}
                  className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-300 hover:border-gray-400"
                >
                  <div className="p-5 flex flex-col justify-center">
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
                    <div className="flex flex-wrap gap-4 items-center">
                      {work.githubUrl && (
                        <Link
                          href={work.githubUrl}
                          target="_blank"
                          className="text-sm text-gray-600 hover:text-gray-800 font-medium transition-colors lowercase"
                        >
                          view repo
                        </Link>
                      )}
                      {work.webUrl && (
                        <Link
                          href={work.webUrl}
                          target="_blank"
                          className="text-sm text-gray-600 hover:text-gray-800 font-medium transition-colors lowercase"
                        >
                          view website
                        </Link>
                      )}
                      {work.demoRequestUrl && (
                        <Link
                          href={work.demoRequestUrl}
                          target="_blank"
                          className="text-sm text-gray-600 hover:text-gray-800 font-medium transition-colors lowercase"
                        >
                          request a demo
                        </Link>
                      )}
                      {!work.githubUrl && !work.webUrl && !work.demoRequestUrl ? (
                        <Link
                          href="/contact"
                          className="text-sm text-gray-600 hover:text-gray-800 font-medium transition-colors lowercase"
                        >
                          reach me for more info
                        </Link>
                      ) : (
                        <div className="relative group">
                          <span className="text-sm text-gray-600 hover:text-gray-800 font-medium transition-colors lowercase cursor-pointer">
                            view more...
                          </span>
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                            working in this... Come back later
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900"></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
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
          </div>
          <div className="max-w-4xl">
            {posts.length === 0 ? (
              <div className="text-center text-gray-600">
                <p>No posts yet. Check back soon for updates.</p>
              </div>
            ) : (
              <>
                <div className="space-y-16 relative">
                  {posts.map((post, index) => {
                    const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    });

                    return (
                      <article key={post.slug} className="relative">
                        <div className="mb-4">
                          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                            {post.category}
                          </span>
                          <span className="mx-2 text-gray-300">•</span>
                          <time className="text-xs text-gray-500">
                            {formattedDate}
                          </time>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          {post.title}
                        </h3>
                        <div className="text-gray-700 leading-relaxed text-base mb-6">
                          {post.description || 'No description available.'}
                        </div>
                        <Link 
                          href={`/blog/${post.slug}`}
                          className="inline-block text-gray-900 hover:text-gray-700 font-medium transition-colors text-base border-b-2 border-gray-900 hover:border-gray-700 pb-1"
                        >
                          read full article →
                        </Link>
                        {index === posts.length - 1 && hasMorePosts && (
                          <div className="relative mt-12">
                            <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-transparent via-gray-50/80 to-gray-50 h-40 -mt-12 pointer-events-none"></div>
                            <div className="relative pt-16 flex justify-center">
                              <Link 
                                href="/blog"
                                className="inline-block text-gray-900 hover:text-gray-700 font-medium transition-colors text-lg border-b-2 border-gray-900 hover:border-gray-700 pb-1"
                              >
                                view more →
                              </Link>
                            </div>
                          </div>
                        )}
                      </article>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}