"use client";

import { useState } from "react";
import { courses, profileStatement, publications, researchAreas } from "./LegacyHome";

type Locale = "zh" | "en";

const ui = {
  zh: {
    statement: "个人研究自述",
    statementEn: "Research Statement",
    publications: "代表性成果",
    publicationsEn: "Selected Publications",
    teaching: "开设课程",
    teachingEn: "Courses Taught",
    scholar: "谷歌学术",
    email: "电子邮件",
    previous: "查看上一版",
    affiliation: "清华大学新闻与传播学院助理教授",
    affiliationAlt: "Assistant Professor, School of Journalism and Communication, Tsinghua University",
    thesis: "思考如何从劳动中分离，又如何重新回到劳动者手中？",
    thesisAlt: "How is thinking separated from labor, and how might it return to those who labor?",
    fieldLabel: "学科定位",
    conceptLabel: "问题线索",
    indexLabel: "论述索引",
    selected: "选录",
  },
  en: {
    statement: "Research Statement",
    statementEn: "个人研究自述",
    publications: "Selected Publications",
    publicationsEn: "代表性成果",
    teaching: "Courses Taught",
    teachingEn: "开设课程",
    scholar: "Google Scholar",
    email: "Email",
    previous: "Previous version",
    affiliation: "Assistant Professor, School of Journalism and Communication, Tsinghua University",
    affiliationAlt: "清华大学新闻与传播学院助理教授",
    thesis: "How is thinking separated from labor, and how might it return to those who labor?",
    thesisAlt: "思考如何从劳动中分离，又如何重新回到劳动者手中？",
    fieldLabel: "Disciplinary location",
    conceptLabel: "Conceptual coordinates",
    indexLabel: "Argument index",
    selected: "Selected",
  },
} as const;

const navigation = [
  { id: "statement", zh: "自述", en: "Statement" },
  { id: "publications", zh: "成果", en: "Publications" },
  { id: "teaching", zh: "教学", en: "Teaching" },
] as const;

const concepts = [
  { zh: "劳动", en: "Labour" },
  { zh: "技术", en: "Technology" },
  { zh: "学习", en: "Learning" },
  { zh: "业余", en: "The Amateur" },
  { zh: "去殖民化", en: "Decolonization" },
] as const;

const statementChapters = [
  { id: "locating", zh: "定位研究", en: "Locating the work", paragraphs: [0, 1] },
  { id: "labour-technology", zh: "劳动与技术", en: "Labour & technology", paragraphs: [2, 3, 4] },
  { id: "learning-amateur", zh: "学习与业余", en: "Learning & the amateur", paragraphs: [5, 6, 7] },
  { id: "history", zh: "历史路径", en: "History as method", paragraphs: [8] },
  { id: "decolonization", zh: "知识去殖民化", en: "Decolonizing knowledge", paragraphs: [9, 10] },
  { id: "position-method", zh: "学科、立场与方法", en: "Discipline, position & method", paragraphs: [11, 12, 13, 14] },
] as const;

function BilingualTitle({ number, primary, secondary, id }: { number: string; primary: string; secondary: string; id: string }) {
  return (
    <div className="cm-section-title">
      <span>{number}</span>
      <h2 id={id}>{primary}</h2>
      <p>{secondary}</p>
    </div>
  );
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>("zh");
  const t = ui[locale];
  const alternateLanguage = locale === "zh" ? "en" : "zh-CN";

  return (
    <div className="cm-page" data-locale={locale}>
      <header className="cm-header">
        <a className="cm-wordmark" href="#top" aria-label={locale === "zh" ? "返回首页" : "Back to top"}>
          <span>CHANGWEN</span>
          <strong>陈昶文</strong>
        </a>
        <nav className="cm-nav" aria-label={locale === "zh" ? "主要导航" : "Primary navigation"}>
          {navigation.map((item) => <a key={item.id} href={`#${item.id}`}>{item[locale]}</a>)}
          <a href="/previous/">{t.previous}</a>
        </nav>
        <div className="cm-language" aria-label={locale === "zh" ? "语言选择" : "Language selection"}>
          <button type="button" aria-pressed={locale === "zh"} onClick={() => setLocale("zh")}>中文</button>
          <span>/</span>
          <button type="button" aria-pressed={locale === "en"} onClick={() => setLocale("en")}>EN</button>
        </div>
      </header>

      <main id="top">
        <section className="cm-hero" aria-labelledby="cm-name">
          <div className="cm-hero-meta">
            <p>ACADEMIC PROFILE</p>
            <span>JOURNALISM · MEDIA · TECHNOLOGY</span>
          </div>

          <div className="cm-identity">
            <h1 id="cm-name">{locale === "zh" ? "陈昶文" : "Changwen Chen"}</h1>
            <p className="cm-name-alt" lang={alternateLanguage}>{locale === "zh" ? "Changwen Chen" : "陈昶文"}</p>
          </div>

          <div className="cm-role">
            <p>{t.affiliation}</p>
            <span lang={alternateLanguage}>{t.affiliationAlt}</span>
            <div className="cm-links">
              <a href="mailto:changwenccw@gmail.com">{t.email}<span aria-hidden="true">↗</span></a>
              <a href="https://scholar.google.com/citations?hl=en&user=TZzbU8oAAAAJ&view_op=list_works&sortby=pubdate" target="_blank" rel="noreferrer">{t.scholar}<span aria-hidden="true">↗</span></a>
            </div>
          </div>

          <div className="cm-thesis">
            <span>THE QUESTION</span>
            <blockquote>{t.thesis}</blockquote>
            <p lang={alternateLanguage}>{t.thesisAlt}</p>
          </div>
        </section>

        <section className="cm-coordinate-band" aria-label={locale === "zh" ? "研究定位" : "Research coordinates"}>
          <div className="cm-coordinate-group cm-coordinate-fields">
            <p>{t.fieldLabel}</p>
            <ol>
              {researchAreas.map((area, index) => (
                <li key={area.en}>
                  <span>0{index + 1}</span>
                  <strong>{area[locale]}</strong>
                  <small lang={alternateLanguage}>{locale === "zh" ? area.en : area.zh}</small>
                </li>
              ))}
            </ol>
          </div>
          <div className="cm-coordinate-group cm-coordinate-concepts">
            <p>{t.conceptLabel}</p>
            <ol>
              {concepts.map((concept) => (
                <li key={concept.en}>
                  <strong>{concept[locale]}</strong>
                  <span lang={alternateLanguage}>{locale === "zh" ? concept.en : concept.zh}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="cm-statement cm-section" id="statement" aria-labelledby="statement-title">
          <BilingualTitle number="01" primary={t.statement} secondary={t.statementEn} id="statement-title" />
          <aside className="cm-statement-index">
            <p>{t.indexLabel}</p>
            <ol>
              {statementChapters.map((chapter, index) => (
                <li key={chapter.id}>
                  <a href={`#${chapter.id}`}><span>0{index + 1}</span>{chapter[locale]}</a>
                </li>
              ))}
            </ol>
          </aside>
          <article className="cm-statement-copy" lang={locale === "zh" ? "zh-CN" : "en"}>
            {statementChapters.map((chapter, chapterIndex) => (
              <section className="cm-chapter" id={chapter.id} key={chapter.id}>
                <header>
                  <span>0{chapterIndex + 1}</span>
                  <h3>{chapter[locale]}</h3>
                  <p lang={alternateLanguage}>{locale === "zh" ? chapter.en : chapter.zh}</p>
                </header>
                <div>
                  {chapter.paragraphs.map((paragraphIndex) => (
                    <p key={paragraphIndex}>{profileStatement[locale][paragraphIndex]}</p>
                  ))}
                </div>
              </section>
            ))}
          </article>
        </section>

        <section className="cm-section cm-publications" id="publications" aria-labelledby="publications-title">
          <BilingualTitle number="02" primary={t.publications} secondary={t.publicationsEn} id="publications-title" />
          <ol className="cm-publication-list">
            {publications.map((publication, index) => (
              <li key={publication.title}>
                <span className="cm-pub-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="cm-pub-year">{publication.year}</span>
                <div>
                  <p>{publication.authors}</p>
                  <h3>{publication.title}</h3>
                  <span>{publication.venue}</span>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="cm-section cm-teaching" id="teaching" aria-labelledby="teaching-title">
          <BilingualTitle number="03" primary={t.teaching} secondary={t.teachingEn} id="teaching-title" />
          <ol className="cm-course-list">
            {courses.map((course, index) => (
              <li key={course.en}>
                <span>0{index + 1}</span>
                <p>{course[locale]}</p>
              </li>
            ))}
          </ol>
        </section>
      </main>

      <footer className="cm-footer">
        <p>© {new Date().getFullYear()} 陈昶文 / Changwen Chen</p>
        <p>清华大学新闻与传播学院 · School of Journalism and Communication, Tsinghua University</p>
        <a href="/previous/">{t.previous} ↗</a>
      </footer>
    </div>
  );
}
