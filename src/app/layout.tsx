import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'prismjs/themes/prism-tomorrow.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Uzziel Valdéz | Full Stack Developer',
    template: '%s | Uzziel Valdéz'
  },
  description: 'Personal portfolio of Uzziel Valdéz, a Full Stack Developer and Software Engineer',
  keywords: ['web development', 'software', 'programming', 'blog', 'portfolio', 'Uzziel Valdéz'],
  authors: [{ name: 'Uzziel Valdéz' }],
  creator: 'Uzziel Valdéz',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://uzielvz.com',
    title: 'Uzziel Valdéz | Full Stack Developer',
    description: 'Personal portfolio of Uzziel Valdéz, a Full Stack Developer specializing in React, Node.js, and TypeScript.',
    siteName: 'Uzziel Valdéz | Full Stack Developer',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Uzziel Valdéz | Full Stack Developer',
    description: 'Personal portfolio of Uzziel Valdéz, a Full Stack Developer specializing in React, Node.js, and TypeScript.',
    creator: '@uzielvz',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'tu-código-de-verificación-google',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-white flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}