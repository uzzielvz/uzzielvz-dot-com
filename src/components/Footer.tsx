import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-6 flex justify-between items-center border-t border-gray-100 mt-8 px-6">
      <div className="text-gray-500 text-sm">
        © 2025 Uzziel Valdez. All rights reserved.
      </div>
      <div className="flex space-x-4">
        <Link href="https://instagram.com/tuusuario" target="_blank" aria-label="Instagram" className="text-gray-500 hover:text-gray-600 transition-colors text-sm">
          Instagram
        </Link>
        <Link href="https://twitter.com/tuusuario" target="_blank" aria-label="Twitter" className="text-gray-500 hover:text-gray-600 transition-colors text-sm">
          Twitter
        </Link>
        <Link href="https://linkedin.com/in/tuusuario" target="_blank" aria-label="LinkedIn" className="text-gray-500 hover:text-gray-600 transition-colors text-sm">
          LinkedIn
        </Link>
        <Link href="https://github.com/tuusuario" target="_blank" aria-label="GitHub" className="text-gray-500 hover:text-gray-600 transition-colors text-sm">
          GitHub
        </Link>
      </div>
    </footer>
  );
} 