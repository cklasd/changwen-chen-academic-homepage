import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the academic homepage", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>陈昶文 \/ Changwen Chen<\/title>/i);
  assert.match(html, /清华大学新闻与传播学院助理教授/);
  assert.match(html, /个人研究自述/);
  assert.match(html, /href="\/media\/"/);
});

test("server-renders the public media page", async () => {
  const response = await render("/media");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /公共媒体/);
  assert.match(html, /AI Isn’t Always Helping Chinese Office Workers Either/);
  assert.match(html, /人文清华播客/);
});
