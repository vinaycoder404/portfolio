import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Fira+Code:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
