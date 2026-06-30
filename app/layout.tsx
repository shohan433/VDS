import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/next'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://your-website-url.com'), // Replace with your actual domain
  title: {
    default: "VDS — Digital Innovation Agency",
    template: `%s | VDS`,
  },
  description: "VDS is a digital innovation agency crafting high-end digital experiences for the world's most ambitious brands. We specialize in UI/UX design, web development, and digital solutions.",
  openGraph: {
    title: "VDS — Digital Innovation Agency",
    description: "Transforming Ideas Into Digital Experiences.",
    url: "https://your-website-url.com", // Replace with your actual domain
    siteName: "VDS",
    images: [
      {
        url: '/og-image.png', // Create and place an Open Graph image in your /public folder
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "VDS — Digital Innovation Agency",
    description: "Transforming Ideas Into Digital Experiences.",
    images: ['/og-image.png'], // Use the same OG image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <GoogleAnalytics gaId="G-NTX51SXW20" />
      <Analytics />
      <body className="min-h-full flex flex-col bg-[#050b16] text-[#f8fafc] font-sans m-0">
        {children}
      </body>
    </html>
  );
}
