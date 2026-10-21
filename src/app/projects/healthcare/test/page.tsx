"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HealthcareMockupRedirect() {
  const router = useRouter();
  useEffect(() => { router.replace("/projects/healthcare/" + window.location.search); }, [router]);
  return <Link href="/projects/healthcare/">Healthcare AI</Link>;
}
