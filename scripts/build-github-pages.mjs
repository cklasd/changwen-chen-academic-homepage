import { spawnSync } from "node:child_process";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const nextBin = require.resolve("next/dist/bin/next");
const basePathArgument = process.argv.find((argument) => argument.startsWith("--base-path="));
const basePath = basePathArgument?.slice("--base-path=".length) ?? process.env.PAGES_BASE_PATH ?? "";

const result = spawnSync(process.execPath, [nextBin, "build"], {
  stdio: "inherit",
  env: {
    ...process.env,
    GITHUB_PAGES: "true",
    PAGES_BASE_PATH: basePath,
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL ?? "https://changwenchen.com",
  },
});

process.exit(result.status ?? 1);
