"use client";

import { useEffect } from "react";
import useSiteLocale from "@/components/useSiteLocale";
import HealthcareProject from "./HealthcareProject";

export default function LocalizedHealthcareProject() {
  const language = useSiteLocale();
  useEffect(() => {
    document.title = language === "vi" ? "AI y tế VMEC | Thịnh Giáp" : "VMEC Healthcare AI | Thịnh Giáp";
  }, [language]);
  return <HealthcareProject language={language} />;
}
