import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const outputRoot = new URL("../out/", import.meta.url);
const basePath = "/academic-homepage";

test("exports the required GitHub Pages files", async () => {
  await Promise.all([
    access(new URL("index.html", outputRoot)),
    access(new URL("media/index.html", outputRoot)),
    access(new URL(".nojekyll", outputRoot)),
  ]);
});

test("keeps internal navigation inside a project repository path", async () => {
  const [home, media] = await Promise.all([
    readFile(new URL("index.html", outputRoot), "utf8"),
    readFile(new URL("media/index.html", outputRoot), "utf8"),
  ]);

  assert.match(home, new RegExp(`href="${basePath}/media/"`));
  assert.match(home, new RegExp(`(?:href|src)="${basePath}/_next/`));
  assert.match(media, new RegExp(`href="${basePath}/#about"`));
  assert.match(media, /AI Isn’t Always Helping Chinese Office Workers Either/);
});
