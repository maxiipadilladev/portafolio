import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk"
});

export const metadata: Metadata = {
  title: "Maximiliano Padilla - Full-Stack Developer | SaaS Products & AI Integration",
  description: "Full-stack developer specializing in SaaS products from scratch to revenue. RunaFit: 500+ bookings/month, +25% occupancy. 2nd Place NASA Space Apps. Available for projects.",
  keywords: ["Full-stack developer", "SaaS developer", "Next.js", "React", "Supabase", "AI integration", "RunaFit", "NASA Space Apps", "Web development"],
  authors: [{ name: "Maximiliano Padilla" }],
  creator: "Maximiliano Padilla",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://maxiipadi.dev",
    title: "Maximiliano Padilla - Full-Stack Developer | SaaS Products",
    description: "Building SaaS products from scratch to revenue in weeks. RunaFit: 500+ bookings/month. 2nd Place NASA Space Apps Challenge.",
    siteName: "Maximiliano Padilla Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Maximiliano Padilla - Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maximiliano Padilla - Full-Stack Developer",
    description: "Building SaaS products from scratch to revenue in weeks",
    images: ["/og-image.jpg"],
    creator: "@maxiipadi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-background text-text selection:bg-primary selection:text-white`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
