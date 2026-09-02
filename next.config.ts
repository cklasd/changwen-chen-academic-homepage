import type { NextConfig } from "next";

const isGitHubPagesBuild = process.env.GITHUB_PAGES === "true";
const githubPagesBasePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  ...(isGitHubPagesBuild
    ? {
        output: "export" as const,
        trailingSlash: true,
        basePath: githubPagesBasePath,
        assetPrefix: githubPagesBasePath || undefined,
        images: { unoptimized: true },
        typescript: { tsconfigPath: "./tsconfig.github.json" },
      }
    : {}),
};

export default nextConfig;
