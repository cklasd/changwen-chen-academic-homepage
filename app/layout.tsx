import type { Metadata } from "next";
import "./globals.css";

const canonicalOrigin = process.env.NEXT_PUBLIC_SITE_URL ?? "https://changwenchen.com";
const socialImage = new URL("/og.png", canonicalOrigin).toString();

export const metadata: Metadata = {
  metadataBase: new URL(canonicalOrigin),
  title: "陈昶文 / Changwen Chen",
  description:
    "陈昶文，清华大学新闻与传播学院助理教授。研究聚焦新闻传播史论、传播政治经济学、批判文化研究与媒介技术的文化政治。",
  openGraph: {
    title: "陈昶文 / Changwen Chen",
    description: "Research on journalism and communication history, cultural politics, media technologies, and social development.",
    type: "website",
    url: canonicalOrigin,
    images: [{ url: socialImage, width: 1200, height: 630, alt: "陈昶文 / Changwen Chen" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "陈昶文 / Changwen Chen",
    description: "Personal academic homepage",
    images: [socialImage],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
        <script
          type="module"
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token":"74abee75a8124236b0ac788211de2f80"}'
        ></script>
      </body>
    </html>
  );
}
