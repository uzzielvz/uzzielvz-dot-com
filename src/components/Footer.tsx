import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-6 flex justify-between items-center border-t border-gray-100 mt-8 px-6">
      <div className="text-gray-500 text-sm">
        © 2025 Uzziel Valdez. All rights reserved.
      </div>
      <div className="flex space-x-4">
        <Link href="https://github.com/uzzielvz" target="_blank" aria-label="gitHub" className="text-gray-500 hover:text-gray-600 transition-colors text-sm">
          github
        </Link>
        <Link href="https://linkedin.com/in/uzzielvz" target="_blank" aria-label="linkedIn" className="text-gray-500 hover:text-gray-600 transition-colors text-sm">
          linkedIn
        </Link>
        <Link href="https://x.com/uzzielvz" target="_blank" aria-label="X" className="text-gray-500 hover:text-gray-600 transition-colors text-sm">
          X
        </Link>
        <Link href="https://www.goodreads.com/user/show/172204382-uzziel-valdez" target="_blank" aria-label="goodreads" className="text-gray-500 hover:text-gray-600 transition-colors text-sm">
          goodreads
        </Link>
        <Link href="https://www.instagram.com/uzzielvz/" target="_blank" aria-label="instagram" className="text-gray-500 hover:text-gray-600 transition-colors text-sm">
          instagram
        </Link>
      </div>
    </footer>
  );
} 