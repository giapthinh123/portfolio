"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import type { SiteLocale } from "./LanguageSwitch";

export default function useSiteLocale(): SiteLocale {
  const params = useSearchParams();
  const locale = params.get("lang") === "vi" ? "vi" : "en";
  useEffect(() => { document.documentElement.lang = locale; }, [locale]);
  return locale;
}
