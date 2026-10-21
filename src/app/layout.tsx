import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { themeInitScript } from "@/components/theme";
import "./globals.css";
import "./ai-systems.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: { icon: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/icon.svg` },
  title: "Thịnh Giáp | AI Systems Lab",
  description:
    "AI and backend engineering portfolio of Giap Hoang Thinh — Agentic AI, multi-agent orchestration, RAG, scalable Python services, and event-driven workflows.",
  authors: [{ name: "Thịnh Giáp", url: "https://github.com/giapthinh123" }],
  openGraph: {
    title: "Thịnh Giáp | AI Systems Lab",
    description: "Agentic AI platforms, multi-agent orchestration, RAG, and production-oriented Python backend architecture.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head><script id="portfolio-theme" dangerouslySetInnerHTML={{ __html: themeInitScript }} /></head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
