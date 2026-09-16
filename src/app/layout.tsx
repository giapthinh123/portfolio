import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thịnh Giáp | AI · Computer Vision · Full-stack",
  description:
    "Portfolio của Thịnh Giáp (giapthinh123) — AI/CV và full-stack. Dự án healthcare, YOLO, Flask, Java Servlet và hơn thế nữa.",
  authors: [{ name: "Thịnh Giáp", url: "https://github.com/giapthinh123" }],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
