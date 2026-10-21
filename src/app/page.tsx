import type { Metadata } from "next";
import { Suspense } from "react";
import AIStudioHome from "@/components/AIStudioHome";
import LocalizedHome from "@/components/LocalizedHome";

export const metadata: Metadata = {
  title: "Thịnh Giáp | AI Systems Lab",
  description:
    "AI and backend engineering portfolio of Giap Hoang Thinh — Agentic AI, multi-agent orchestration, RAG, scalable Python services, and event-driven workflows.",
  openGraph: {
    title: "Thịnh Giáp | AI Systems Lab",
    description: "Agentic AI platforms, multi-agent orchestration, RAG, and production-oriented Python backend architecture.",
    type: "website",
  },
};

export default function Home() {
  return <Suspense fallback={<AIStudioHome locale="en" />}><LocalizedHome /></Suspense>;
}
