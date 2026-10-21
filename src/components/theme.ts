export const THEME_STORAGE_KEY = "portfolio-theme";

// Run before the page paints so a saved light theme does not flash dark.
export const themeInitScript = `(() => {
  let saved;
  try { saved = localStorage.getItem("${THEME_STORAGE_KEY}"); } catch {}
  document.documentElement.dataset.theme = saved === "light" || saved === "dark"
    ? saved : window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
})();`;
