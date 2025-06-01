import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'prismjs/themes/prism-tomorrow.css';
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Uziel Valdéz | Desarrollador Full Stack',
    template: '%s | Uziel Valdéz'
  },
  description: 'Portafolio personal de Uziel Valdéz, desarrollador Full Stack especializado en React, Node.js y TypeScript.',
  keywords: ['web development', 'software', 'programming', 'blog', 'portfolio', 'Uziel Valdéz'],
  authors: [{ name: 'Uziel Valdéz' }],
  creator: 'Uziel Valdéz',
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://uzielvz.com',
    title: 'Uziel Valdéz | Desarrollador Full Stack',
    description: 'Portafolio personal de Uziel Valdéz, desarrollador Full Stack especializado en React, Node.js y TypeScript.',
    siteName: 'Uziel Valdéz | Desarrollador Full Stack',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Uziel Valdéz | Desarrollador Full Stack',
    description: 'Portafolio personal de Uziel Valdéz, desarrollador Full Stack especializado en React, Node.js y TypeScript.',
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
    <html lang="es" className={inter.variable}>
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
