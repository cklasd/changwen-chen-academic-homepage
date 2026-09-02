"use client";

import { useState } from "react";
import { podcastTalks, publicWriting, scholarUrl } from "./LegacyHome";
import { sitePath } from "./site-paths";

type Locale = "zh" | "en";

const copy = {
  zh: {
    home: "首页",
    about: "简介",
    publications: "研究成果",
    publicMedia: "公共媒体",
    publicWriting: "媒体文章",
    podcastTalks: "播客与对谈",
  },
  en: {
    home: "Home",
    about: "About",
    publications: "Publications",
    publicMedia: "Public Work",
    publicWriting: "Public Writing",
    podcastTalks: "Podcast & Talks",
  },
} as const;

const navItems = [
  { id: "about", zh: "简介", en: "About", href: sitePath("/#about") },
  { id: "work", zh: "研究成果", en: "Publications", href: scholarUrl, external: true },
  { id: "media", zh: "公共媒体", en: "Public Work", href: sitePath("/media/") },
] as const;

function SectionTitle({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <div className="section-heading">
      <p className="section-number">02 / PUBLIC WORK</p>
      <h2 id="media-title">
        {t.publicMedia}
        <span lang={locale === "zh" ? "en" : "zh-CN"}>{locale === "zh" ? "Public Work" : "公共媒体"}</span>
      </h2>
    </div>
  );
}

export default function PublicMediaPage() {
  const [locale, setLocale] = useState<Locale>("zh");
  const t = copy[locale];

  return (
    <div className="site-shell" data-locale={locale}>
      <header className="masthead">
        <a className="mark" href={sitePath("/")} aria-label={t.home}>CC / 陈昶文</a>
        <nav className="site-nav" aria-label={locale === "zh" ? "主要导航" : "Primary navigation"}>
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  target={"external" in item && item.external ? "_blank" : undefined}
                  rel={"external" in item && item.external ? "noreferrer" : undefined}
                  aria-current={item.id === "media" ? "page" : undefined}
                >
                  {item[locale]}
                  <span lang={locale === "zh" ? "en" : "zh-CN"}>{locale === "zh" ? item.en : item.zh}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="language-switch" aria-label={locale === "zh" ? "语言选择" : "Language selection"}>
          <button type="button" aria-pressed={locale === "zh"} onClick={() => setLocale("zh")}>中</button>
          <button type="button" aria-pressed={locale === "en"} onClick={() => setLocale("en")}>EN</button>
        </div>
      </header>

      <main>
        <section className="editorial-section public-media-section" aria-labelledby="media-title">
          <SectionTitle locale={locale} />
          <div className="section-body">
            <div className="public-work-group">
              <p className="subsection-label">{t.publicWriting}</p>
              <ol className="publication-list public-writing-list">
                {publicWriting.map((article) => (
                  <li key={article.title}>
                    <span className="publication-year">{article.year}</span>
                    <div className="publication-copy">
                      <p>{article.authors}</p>
                      <h3>
                        <a href={article.url} target="_blank" rel="noreferrer">
                          {article.title}<span aria-hidden="true">↗</span>
                        </a>
                      </h3>
                      <span>{article.details}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="public-work-group">
              <p className="subsection-label">{t.podcastTalks}</p>
              <ol className="publication-list public-writing-list">
                {podcastTalks.map((episode) => (
                  <li key={episode.title}>
                    <span className="publication-year">{episode.year}</span>
                    <div className="publication-copy">
                      <p>{episode.authors[locale]}</p>
                      <h3>
                        <a href={episode.url} target="_blank" rel="noreferrer">
                          {episode.title}<span aria-hidden="true">↗</span>
                        </a>
                      </h3>
                      <span>{episode.details[locale]}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      </main>

      <footer><span>© {new Date().getFullYear()} 陈昶文 / Changwen Chen</span><span>清华大学新闻与传播学院 · School of Journalism and Communication, Tsinghua University</span></footer>
    </div>
  );
}
