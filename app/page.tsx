"use client";

import { useState } from "react";

type Locale = "zh" | "en";

const copy = {
  zh: {
    home: "首页",
    about: "简介",
    research: "研究",
    work: "成果",
    teaching: "教学",
    contact: "联系",
    profileLabel: "个人自述",
    profileNote: "此处预留个人自述。可在后续补充学术经历、研究路径与持续关注的问题。",
    portraitLabel: "个人照片",
    portraitNote: "照片待提供",
    researchLabel: "研究概述",
    researchNote: "此处预留对研究计划、核心问题与理论关切的整体概括。",
    areas: "研究领域",
    workLabel: "学术成果",
    workNote: "此处预留代表性论文、著作、书评及其他学术成果。",
    teachingLabel: "教学",
    teachingNote: "此处预留教学理念、课程介绍、教学材料与相关链接。",
    scholar: "查看谷歌学术",
    email: "发送邮件",
    draft: "内容待补充",
    imageDraft: "图片区域",
  },
  en: {
    home: "Home",
    about: "About",
    research: "Research",
    work: "Publications",
    teaching: "Teaching",
    contact: "Contact",
    profileLabel: "Personal Statement",
    profileNote: "Reserved for a personal statement on academic formation, research trajectory, and enduring questions.",
    portraitLabel: "Portrait",
    portraitNote: "Image to be provided",
    researchLabel: "Research Statement",
    researchNote: "Reserved for an overview of the research agenda, central questions, and theoretical concerns.",
    areas: "Research Areas",
    workLabel: "Selected Work",
    workNote: "Reserved for selected articles, books, reviews, and other scholarly work.",
    teachingLabel: "Teaching",
    teachingNote: "Reserved for teaching philosophy, course descriptions, materials, and related links.",
    scholar: "View Google Scholar",
    email: "Send an email",
    draft: "Content to be added",
    imageDraft: "Image space",
  },
} as const;

const navItems = [
  { id: "home", zh: "首页", en: "Home" },
  { id: "about", zh: "简介", en: "About" },
  { id: "research", zh: "研究", en: "Research" },
  { id: "work", zh: "成果", en: "Publications" },
  { id: "teaching", zh: "教学", en: "Teaching" },
  { id: "contact", zh: "联系", en: "Contact" },
] as const;

const researchAreas = [
  {
    zh: "新闻传播史论",
    en: "History and Theory of Journalism and Communication",
  },
  { zh: "批判文化研究", en: "Critical Cultural Studies" },
  {
    zh: "媒介技术的文化政治",
    en: "Cultural Politics of Media Technologies",
  },
] as const;

function SectionTitle({
  number,
  primary,
  secondary,
  id,
}: {
  number: string;
  primary: string;
  secondary: string;
  id: string;
}) {
  return (
    <div className="section-heading">
      <p className="section-number">{number}</p>
      <h2 id={id}>
        {primary}
        <span lang={secondary.match(/[\u4e00-\u9fff]/) ? "zh-CN" : "en"}>
          {secondary}
        </span>
      </h2>
    </div>
  );
}

function DraftBlock({
  label,
  note,
  locale,
}: {
  label: string;
  note: string;
  locale: Locale;
}) {
  return (
    <div className="draft-block">
      <div className="draft-meta">
        <span>{copy[locale].draft}</span>
        <span aria-hidden="true">↘</span>
      </div>
      <h3>{label}</h3>
      <p>{note}</p>
      <div className="draft-lines" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>("zh");
  const t = copy[locale];
  const alternateLocale = locale === "zh" ? "en" : "zh-CN";

  return (
    <div className="site-shell" data-locale={locale}>
      <header className="masthead">
        <a className="mark" href="#home" aria-label={t.home}>
          CC / 陈昶文
        </a>

        <nav className="site-nav" aria-label={locale === "zh" ? "主要导航" : "Primary navigation"}>
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>
                  {item[locale]}
                  <span lang={locale === "zh" ? "en" : "zh-CN"}>
                    {locale === "zh" ? item.en : item.zh}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="language-switch" aria-label={locale === "zh" ? "语言选择" : "Language selection"}>
          <button
            type="button"
            aria-pressed={locale === "zh"}
            onClick={() => setLocale("zh")}
          >
            中
          </button>
          <button
            type="button"
            aria-pressed={locale === "en"}
            onClick={() => setLocale("en")}
          >
            EN
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home" aria-labelledby="page-title">
          <div className="hero-title">
            <p className="eyebrow">Academic Profile · 学术主页</p>
            <h1 id="page-title">
              {locale === "zh" ? "陈昶文" : "Changwen Chen"}
              <span lang={alternateLocale}>
                {locale === "zh" ? "Changwen Chen" : "陈昶文"}
              </span>
            </h1>
          </div>

          <div className="hero-copy">
            <p className="role-primary">
              {locale === "zh"
                ? "清华大学新闻与传播学院助理教授"
                : "Assistant Professor, School of Journalism and Communication, Tsinghua University"}
            </p>
            <p className="role-secondary" lang={alternateLocale}>
              {locale === "zh"
                ? "Assistant Professor, School of Journalism and Communication, Tsinghua University"
                : "清华大学新闻与传播学院助理教授"}
            </p>
            <div className="actions">
              <a className="action" href="mailto:changwenccw@gmail.com">
                {t.email}
              </a>
              <a
                className="action"
                href="https://scholar.google.com/citations?hl=en&user=TZzbU8oAAAAJ&view_op=list_works&sortby=pubdate"
                target="_blank"
                rel="noreferrer"
              >
                {t.scholar}
              </a>
            </div>
          </div>
        </section>

        <section className="editorial-section about-section" id="about" aria-labelledby="about-title">
          <SectionTitle
            number="01 / PROFILE"
            id="about-title"
            primary={t.about}
            secondary={locale === "zh" ? "About" : "简介"}
          />
          <div className="about-content">
            <DraftBlock label={t.profileLabel} note={t.profileNote} locale={locale} />
            <figure className="portrait-placeholder">
              <div className="portrait-index">{t.imageDraft} / 01</div>
              <div className="portrait-center">
                <span className="portrait-cross" aria-hidden="true" />
                <strong>{t.portraitLabel}</strong>
                <small>{t.portraitNote}</small>
              </div>
              <figcaption>{locale === "zh" ? "建议使用竖幅个人照片" : "Portrait orientation recommended"}</figcaption>
            </figure>
          </div>
        </section>

        <section className="editorial-section research-section" id="research" aria-labelledby="research-title">
          <SectionTitle
            number="02 / RESEARCH"
            id="research-title"
            primary={t.research}
            secondary={locale === "zh" ? "Research" : "研究"}
          />
          <div className="section-body">
            <DraftBlock label={t.researchLabel} note={t.researchNote} locale={locale} />
            <div className="areas-wrap">
              <p className="subsection-label">{t.areas}</p>
              <ol className="research-list">
                {researchAreas.map((area) => (
                  <li key={area.en}>
                    <span className="area-primary">{area[locale]}</span>
                    <span className="area-secondary" lang={alternateLocale}>
                      {locale === "zh" ? area.en : area.zh}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="editorial-section" id="work" aria-labelledby="work-title">
          <SectionTitle
            number="03 / SELECTED WORK"
            id="work-title"
            primary={t.work}
            secondary={locale === "zh" ? "Selected Work" : "学术成果"}
          />
          <div className="section-body">
            <DraftBlock label={t.workLabel} note={t.workNote} locale={locale} />
            <a
              className="scholar-strip"
              href="https://scholar.google.com/citations?hl=en&user=TZzbU8oAAAAJ&view_op=list_works&sortby=pubdate"
              target="_blank"
              rel="noreferrer"
            >
              <span>Google Scholar</span>
              <strong>{t.scholar}</strong>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="editorial-section" id="teaching" aria-labelledby="teaching-title">
          <SectionTitle
            number="04 / TEACHING"
            id="teaching-title"
            primary={t.teaching}
            secondary={locale === "zh" ? "Teaching" : "教学"}
          />
          <div className="section-body teaching-grid">
            <DraftBlock label={t.teachingLabel} note={t.teachingNote} locale={locale} />
            <div className="materials-placeholder">
              <span className="subsection-label">
                {locale === "zh" ? "课程与教学材料" : "Courses & Materials"}
              </span>
              <div className="material-row"><span>01</span><i /></div>
              <div className="material-row"><span>02</span><i /></div>
              <div className="material-row"><span>03</span><i /></div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div>
            <p className="section-number">05 / CONTACT</p>
            <h2 id="contact-title">
              {t.contact}
              <span lang={alternateLocale}>{locale === "zh" ? "Contact" : "联系"}</span>
            </h2>
          </div>
          <div className="contact-copy">
            <p>
              {locale === "zh"
                ? "清华大学新闻与传播学院"
                : "School of Journalism and Communication, Tsinghua University"}
            </p>
            <a href="mailto:changwenccw@gmail.com">changwenccw@gmail.com</a>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} 陈昶文 / Changwen Chen</span>
        <span>清华大学新闻与传播学院 · School of Journalism and Communication, Tsinghua University</span>
      </footer>
    </div>
  );
}
