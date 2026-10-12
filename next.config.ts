import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGitHubPages ? "/portfolio" : "";

const nextConfig: NextConfig = {
  ...(isGitHubPages ? { output: "export", trailingSlash: true } : {}),
  basePath,
  images: { unoptimized: isGitHubPages },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;

if (process.env.NODE_ENV === "development" && !isGitHubPages) {
  import("@opennextjs/cloudflare").then((m) => m.initOpenNextCloudflareForDev());
}
