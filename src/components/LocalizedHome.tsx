"use client";

import { useEffect } from "react";
import AIStudioHome from "./AIStudioHome";
import useSiteLocale from "./useSiteLocale";

export default function LocalizedHome() {
  const locale = useSiteLocale();
  useEffect(() => {
    document.title = locale === "vi" ? "Thịnh Giáp | Kỹ sư AI & Backend" : "Thịnh Giáp | AI Systems Lab";
  }, [locale]);
  return <AIStudioHome locale={locale} />;
}
