import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
    "AI and backend engineering portfolio of Giap Hoang Thinh — RAG, computer vision, research systems, and practical product engineering.",
  authors: [{ name: "Thịnh Giáp", url: "https://github.com/giapthinh123" }],
  openGraph: {
    title: "Thịnh Giáp | AI Systems Lab",
    description: "Building useful systems around AI: retrieval, models, APIs, and product interfaces.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
