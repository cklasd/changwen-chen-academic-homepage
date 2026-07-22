import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host?.includes("localhost") ? "http" : "https");
  const origin = host ? `${protocol}://${host}` : "http://localhost:3000";
  const socialImage = new URL("/og.png", origin).toString();

  return {
    title: "陈昶文 / Changwen Chen",
    description:
      "陈昶文，清华大学新闻与传播学院助理教授。研究领域包括新闻传播史论、批判文化研究与媒介技术的文化政治。",
    openGraph: {
      title: "陈昶文 / Changwen Chen",
      description: "Assistant Professor, School of Journalism and Communication, Tsinghua University",
      type: "website",
      url: origin,
      images: [{ url: socialImage, width: 1200, height: 630, alt: "陈昶文 / Changwen Chen" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "陈昶文 / Changwen Chen",
      description: "Personal academic homepage",
      images: [socialImage],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
