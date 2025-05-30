import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NowPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <section className="w-full py-20 mt-0 min-h-screen">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Now</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 mb-8">
              This is a now page, inspired by Derek Sivers. It's a snapshot of what I'm currently focused on.
            </p>

            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Currently Learning</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Advanced TypeScript patterns and best practices</li>
                  <li>System design and architecture principles</li>
                  <li>Testing strategies with Jest and React Testing Library</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Current Projects</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Building this personal website with Next.js and Tailwind</li>
                  <li>Contributing to open source projects</li>
                  <li>Working on a full-stack application using the MERN stack</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Current Goals</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Improving my system design skills</li>
                  <li>Writing more technical blog posts</li>
                  <li>Contributing more to the open source community</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Current Reading</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Clean Code by Robert C. Martin</li>
                  <li>System Design Interview by Alex Xu</li>
                  <li>Technical blog posts and documentation</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-500 text-sm mt-12">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 