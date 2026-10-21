"use client";

import { useSyncExternalStore } from "react";
import type { SiteLocale } from "./LanguageSwitch";
import { THEME_STORAGE_KEY } from "./theme";

const themeEvent = "portfolio-theme-change";

function snapshot() {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function subscribe(notify: () => void) {
  const media = window.matchMedia("(prefers-color-scheme: light)");
  function syncPreference() {
    let saved;
    try { saved = localStorage.getItem(THEME_STORAGE_KEY); } catch {}
    document.documentElement.dataset.theme = saved === "light" || saved === "dark"
      ? saved : media.matches ? "light" : "dark";
    notify();
  }
  function onStorage(event: StorageEvent) {
    if (event.key === THEME_STORAGE_KEY || event.key === null) syncPreference();
  }
  window.addEventListener(themeEvent, notify);
  window.addEventListener("storage", onStorage);
  media.addEventListener("change", syncPreference);
  return () => {
    window.removeEventListener(themeEvent, notify);
    window.removeEventListener("storage", onStorage);
    media.removeEventListener("change", syncPreference);
  };
}

export default function ThemeToggle({ locale }: { locale: SiteLocale }) {
  const theme = useSyncExternalStore(subscribe, snapshot, () => "dark");
  const label = locale === "vi" ? "Giao diện sáng" : "Light mode";

  function toggle() {
    const next = snapshot() === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem(THEME_STORAGE_KEY, next); } catch {}
    window.dispatchEvent(new Event(themeEvent));
  }

  return (
    <button type="button" className="lab-theme-toggle" aria-label={label} aria-pressed={theme === "light"} onClick={toggle}>
      <svg className="lab-theme-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
      </svg>
      <svg className="lab-theme-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M20.5 13.3A8.5 8.5 0 0 1 10.7 3.5a8.5 8.5 0 1 0 9.8 9.8Z" />
      </svg>
    </button>
  );
}
