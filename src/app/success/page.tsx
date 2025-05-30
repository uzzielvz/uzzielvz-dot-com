import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <section className="flex-1 flex flex-col justify-center items-center max-w-2xl mx-auto px-4 py-8 mt-16 w-full text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">mensaje enviado</h1>
        <p className="text-gray-700 mb-8">
        Thanks for reaching out. Message received. I'll get back to you soon.
        </p>
        <Link 
          href="/" 
          className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
        >
          volver a la página principal
        </Link>
      </section>
      <Footer />
    </main>
  );
} 