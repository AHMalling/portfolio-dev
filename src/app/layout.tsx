import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://hellemalling.dk"),
  title: "Anders Helle Malling | Full-Stack Developer",
  description: "Full-stack developer based in Aarhus, Denmark. Available for freelance projects and full-time opportunities.",
  keywords: ["full-stack developer", "web developer", "Aarhus", "Denmark", "freelance", "React", "Next.js", "TypeScript"],
  openGraph: {
    title: "Anders Helle Malling | Full-Stack Developer",
    description: "Full-stack developer based in Aarhus, Denmark.",
    url: "https://hellemalling.dk",
    siteName: "Anders Helle Malling",
    locale: "en_US",
    type: "website",
    images: [{ url: "/profile.jpg", width: 800, height: 800, alt: "Anders Helle Malling" }],
  },
  twitter: {
    card: "summary",
    title: "Anders Helle Malling | Full-Stack Developer",
    description: "Full-stack developer based in Aarhus, Denmark. Available for freelance projects and full-time opportunities.",
    images: ["/profile.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}

      </body>
    </html>
  );
}
