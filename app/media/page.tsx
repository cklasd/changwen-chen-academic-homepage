import type { Metadata } from "next";
import PublicMediaPage from "../PublicMediaPage";

export const metadata: Metadata = {
  title: "公共媒体 / Public Work | 陈昶文",
  description: "陈昶文的媒体文章、播客与公共对谈。",
};

export default function MediaPage() {
  return <PublicMediaPage />;
}
