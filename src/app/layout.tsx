import type { Metadata } from "next";
import { headers } from "next/headers";
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

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const locale = (await headers()).get("x-site-locale") === "vi" ? "vi" : "en";
  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
