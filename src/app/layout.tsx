import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "Vinay Pawar | Full Stack Developer",
  description:
    "Full Stack Developer with 6+ years of experience in React, Next.js, Node.js, and AI/LLM integrations. Available for new opportunities.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "Next.js",
    "Vinay Pawar",
    "Mumbai",
    "Portfolio",
  ],
  authors: [{ name: "Vinay Pawar" }],
  openGraph: {
    title: "Vinay Pawar | Full Stack Developer",
    description:
      "Full Stack Developer with 6+ years of experience building scalable web applications.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinay Pawar | Full Stack Developer",
    description:
      "Full Stack Developer with 6+ years of experience in React, Next.js, Node.js.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${firaCode.variable}`}>
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
