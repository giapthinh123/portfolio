import type { Metadata } from "next";
import { Suspense } from "react";
import HealthcareProject from "./HealthcareProject";
import LocalizedHealthcareProject from "./LocalizedHealthcareProject";

export const metadata: Metadata = {
  title: "Healthcare AI | Thịnh Giáp",
  description:
    "Personal healthcare AI research prototype by Thịnh Giáp. Not a clinically validated diagnostic or treatment tool.",
  openGraph: {
    title: "Healthcare AI | Thịnh Giáp",
    description:
      "Personal healthcare AI research prototype by Thịnh Giáp. Not a clinically validated diagnostic or treatment tool.",
    type: "article",
    locale: "en_US",
    siteName: "Thịnh Giáp | AI Systems Lab",
  },
};

export default function HealthcareProjectPage() {
  return <Suspense fallback={<HealthcareProject language="en" />}><LocalizedHealthcareProject /></Suspense>;
}
