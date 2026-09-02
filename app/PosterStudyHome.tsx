"use client";

import { useState } from "react";
import { sitePath } from "./site-paths";
import { podcastTalks, profileStatement, publications, publicWriting } from "./LegacyHome";

type Locale = "zh" | "en";

const copy = {
  zh: {
    home: "首页",
    about: "简介",
    publications: "研究成果",
    publicWork: "公共表达",
    statement: "个人研究自述",
    recent: "近期成果",
    writing: "媒体文章",
    podcast: "播客与对谈",
    email: "发送邮件",
    scholar: "查看谷歌学术",
    expand: "展开全文",
    collapse: "收起全文",
    current: "返回当前版",
  },
  en: {
    home: "Home",
    about: "About",
    publications: "Publications",
    publicWork: "Public Work",
    statement: "Research Statement",
    recent: "Recent Publications",
    writing: "Public Writing",
    podcast: "Podcast & Talks",
    email: "Send an email",
    scholar: "View Google Scholar",
    expand: "Show more",
    collapse: "Show less",
    current: "Return to current version",
  },
} as const;

const navItems = [
  { id: "poster-home", zh: "首页", en: "Home" },
  { id: "poster-about", zh: "简介", en: "About" },
  { id: "poster-publications", zh: "研究成果", en: "Publications" },
  { id: "poster-public-work", zh: "公共表达", en: "Public Work" },
] as const;

function PosterHeading({
  number,
  title,
  secondary,
  id,
}: {
  number: string;
  title: string;
  secondary: string;
  id: string;
}) {
  return (
    <header className="poster-section-heading">
      <span>{number}</span>
      <div>
        <h2 id={id}>{title}</h2>
        <p>{secondary}</p>
      </div>
    </header>
  );
}

export default function PosterStudyHome() {
  const [locale, setLocale] = useState<Locale>("zh");
  const [expanded, setExpanded] = useState(false);
  const t = copy[locale];
  const paragraphs = profileStatement[locale];
  const visibleParagraphs = expanded ? paragraphs : paragraphs.slice(0, 5);

  return (
    <div className="poster-site" data-locale={locale}>
      <div className="poster-edition" aria-hidden="true">试验版 / VISUAL STUDY</div>

      <header className="poster-masthead">
        <a className="poster-mark" href="#poster-home" aria-label={t.home}>
          <strong>陈</strong>
          <span>CC / CHANGWEN CHEN</span>
        </a>

        <nav aria-label={locale === "zh" ? "主要导航" : "Primary navigation"}>
          {navItems.map((item, index) => (
            <a key={item.id} href={`#${item.id}`}>
              <b>{String(index + 1).padStart(2, "0")}</b>
              {item[locale]}
              <span>{locale === "zh" ? item.en : item.zh}</span>
            </a>
          ))}
        </nav>

        <div className="poster-locale" aria-label={locale === "zh" ? "语言选择" : "Language selection"}>
          <button type="button" aria-pressed={locale === "zh"} onClick={() => setLocale("zh")}>中</button>
          <button type="button" aria-pressed={locale === "en"} onClick={() => setLocale("en")}>EN</button>
        </div>
      </header>

      <main>
        <section className="poster-hero" id="poster-home" aria-labelledby="poster-page-title">
          <div className="poster-hero-name">
            <p>ACADEMIC PROFILE / 学术主页</p>
            <h1 id="poster-page-title">
              <span className="poster-brush-name">{locale === "zh" ? "陈昶文" : "Changwen Chen"}</span>
              <small>{locale === "zh" ? "CHANGWEN CHEN" : "陈昶文"}</small>
            </h1>
          </div>

          <div className="poster-hero-role">
            <p className="poster-role-primary">
              {locale === "zh"
                ? "清华大学新闻与传播学院助理教授"
                : "Assistant Professor, School of Journalism and Communication, Tsinghua University"}
            </p>
            <p className="poster-role-secondary">
              {locale === "zh"
                ? "Assistant Professor, School of Journalism and Communication, Tsinghua University"
                : "清华大学新闻与传播学院助理教授"}
            </p>
            <div className="poster-actions">
              <a href="mailto:changwenccw@gmail.com">{t.email}<span aria-hidden="true">↗</span></a>
              <a href="https://scholar.google.com/citations?hl=en&user=TZzbU8oAAAAJ&view_op=list_works&sortby=pubdate" target="_blank" rel="noreferrer">
                {t.scholar}<span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <blockquote lang={locale === "zh" ? "zh-CN" : "en"}>
            <span aria-hidden="true">“</span>
            {paragraphs[1]}
          </blockquote>
        </section>

        <section className="poster-section poster-about" id="poster-about" aria-labelledby="poster-about-title">
          <PosterHeading
            number="01 / PROFILE"
            id="poster-about-title"
            title={t.about}
            secondary={locale === "zh" ? "ABOUT" : "简介"}
          />
          <div className="poster-section-body">
            <p className="poster-subhead">{t.statement}</p>
            <div className="poster-statement" id="poster-statement-copy" lang={locale === "zh" ? "zh-CN" : "en"}>
              {visibleParagraphs.map((paragraph, index) => (
                <p key={paragraph} className={index === 1 ? "poster-statement-lead" : undefined}>{paragraph}</p>
              ))}
            </div>
            <button
              className="poster-toggle"
              type="button"
              aria-expanded={expanded}
              aria-controls="poster-statement-copy"
              onClick={() => setExpanded((value) => !value)}
            >
              <span>{expanded ? t.collapse : t.expand}</span>
              <b aria-hidden="true">{expanded ? "−" : "+"}</b>
            </button>
          </div>
        </section>

        <section className="poster-section" id="poster-publications" aria-labelledby="poster-publications-title">
          <PosterHeading
            number="02 / PUBLICATIONS"
            id="poster-publications-title"
            title={t.publications}
            secondary={locale === "zh" ? "PUBLICATIONS" : "研究成果"}
          />
          <div className="poster-section-body">
            <p className="poster-subhead">{t.recent}</p>
            <ol className="poster-list">
              {publications.map((publication, index) => (
                <li key={publication.title}>
                  <span className="poster-index">{String(index + 1).padStart(2, "0")}</span>
                  <span className="poster-year">{publication.year}</span>
                  <div>
                    <p>{publication.authors}</p>
                    <h3>
                      {"href" in publication ? (
                        <a href={publication.href} target="_blank" rel="noreferrer">
                          {publication.title}<span aria-hidden="true">↗</span>
                        </a>
                      ) : publication.title}
                    </h3>
                    <small>{publication.venue}</small>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="poster-section" id="poster-public-work" aria-labelledby="poster-public-work-title">
          <PosterHeading
            number="03 / PUBLIC WORK"
            id="poster-public-work-title"
            title={t.publicWork}
            secondary={locale === "zh" ? "PUBLIC WORK" : "公共表达"}
          />
          <div className="poster-section-body poster-public-grid">
            <div>
              <p className="poster-subhead">{t.writing}</p>
              <ol className="poster-list poster-list-compact">
                {publicWriting.map((article, index) => (
                  <li key={article.title}>
                    <span className="poster-index">{String(index + 1).padStart(2, "0")}</span>
                    <span className="poster-year">{article.year}</span>
                    <div>
                      <p>{article.authors}</p>
                      <h3><a href={article.url} target="_blank" rel="noreferrer">{article.title}<span aria-hidden="true">↗</span></a></h3>
                      <small>{article.details}</small>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <p className="poster-subhead">{t.podcast}</p>
              <ol className="poster-list poster-list-compact">
                {podcastTalks.map((episode, index) => (
                  <li key={episode.title}>
                    <span className="poster-index">{String(index + 1).padStart(2, "0")}</span>
                    <span className="poster-year">{episode.year}</span>
                    <div>
                      <p>{episode.authors[locale]}</p>
                      <h3><a href={episode.url} target="_blank" rel="noreferrer">{episode.title}<span aria-hidden="true">↗</span></a></h3>
                      <small>{episode.details[locale]}</small>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      </main>

      <footer className="poster-footer">
        <span>© {new Date().getFullYear()} 陈昶文 / Changwen Chen</span>
        <a href={sitePath("/")}>{t.current}<span aria-hidden="true">↗</span></a>
      </footer>
    </div>
  );
}
