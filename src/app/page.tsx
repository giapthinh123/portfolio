import type { Metadata } from "next";
import { Suspense } from "react";
import AIStudioHome from "@/components/AIStudioHome";
import LocalizedHome from "@/components/LocalizedHome";

export const metadata: Metadata = {
  title: "Thịnh Giáp | AI Systems Lab",
  description:
    "AI and backend engineering portfolio of Giap Hoang Thinh — RAG, computer vision, research systems, and practical product engineering.",
  openGraph: {
    title: "Thịnh Giáp | AI Systems Lab",
    description: "Building useful systems around AI: retrieval, models, APIs, and product interfaces.",
    type: "website",
  },
};

export default function Home() {
  return <Suspense fallback={<AIStudioHome locale="en" />}><LocalizedHome /></Suspense>;
}
