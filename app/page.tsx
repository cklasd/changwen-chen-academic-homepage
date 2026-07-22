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
    education: "教育经历",
    honors: "部分荣誉",
    portraitLabel: "个人照片",
    portraitNote: "照片待提供",
    researchLabel: "研究概述",
    areas: "研究领域",
    projects: "部分研究项目",
    workLabel: "代表性成果",
    teachingLabel: "教学理念",
    experience: "教学经历",
    scholar: "查看谷歌学术",
    email: "发送邮件",
    imageDraft: "图片区域",
    principalInvestigator: "项目负责人",
  },
  en: {
    home: "Home",
    about: "About",
    research: "Research",
    work: "Publications",
    teaching: "Teaching",
    contact: "Contact",
    profileLabel: "Personal Statement",
    education: "Education",
    honors: "Selected Recognition",
    portraitLabel: "Portrait",
    portraitNote: "Image to be provided",
    researchLabel: "Research Statement",
    areas: "Research Areas",
    projects: "Selected Projects",
    workLabel: "Selected Publications",
    teachingLabel: "Teaching Philosophy",
    experience: "Teaching Experience",
    scholar: "View Google Scholar",
    email: "Send an email",
    imageDraft: "Image space",
    principalInvestigator: "Principal Investigator",
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

const profileStatement = {
  zh: [
    "我的研究以新闻传播史论、传播政治经济学与马克思主义新闻观为主要轴线，关注新闻媒介与社会发展之间的结构性关系。我从社会结构与历史变迁出发，分析媒介技术、制度安排与日常生活经验如何相互塑造。",
    "这些研究试图在中国现代化的具体进程中理解传播实践，并将其中形成的问题、机制与经验转化为能够参与更广泛理论讨论的概念资源。",
  ],
  en: [
    "My research brings together the history and theory of journalism and communication, the political economy of communication, and Marxist perspectives on journalism. I examine the structural relations between media and social development, with particular attention to how technologies, institutions, and everyday experience shape one another through historical change.",
    "This work approaches communication practices through the situated processes of Chinese modernization and develops their problems, mechanisms, and experiences as conceptual resources for broader theoretical inquiry.",
  ],
} as const;

const researchStatement = {
  zh: [
    "我的研究形成两条彼此关联的路径。第一条路径从传播与发展的视角重新考察新闻媒介在知识生产、社会动员与国家建设中的历史角色，强调中国新闻传播实践与现代化总体进程之间的结构性联系。",
    "第二条路径聚焦数字媒介环境中的平台化、流量逻辑、技术维修与劳动文化，分析可见性分配、价值计量、排序与运营机制如何组织内容生产和意义流通，并由此重塑公共知识与日常文化实践。",
  ],
  en: [
    "My research develops along two connected paths. The first reconsiders the historical role of journalism and communication in knowledge production, social mobilization, and state building, locating Chinese media practices within the broader structures of modernization and development.",
    "The second investigates platformization, traffic logic, technological repair, and cultures of labor in digital media environments. It asks how visibility, valuation, ranking, and operational systems organize content production and meaning circulation, thereby reshaping public knowledge and everyday cultural practice.",
  ],
} as const;

const teachingStatement = {
  zh: [
    "我把教学理解为价值塑造、知识传授与研究能力训练相互贯通的过程。课堂以师生平等、问题导向与沟通启发为基础，引导学生从现实传播问题出发，建立清晰的概念区分与可检验的分析路径。",
    "教学中重视将新闻传播史论、马克思主义新闻观与数字媒介研究的前沿问题相联系，并通过研究设计、案例讨论与协作练习，训练学生提出问题、组织证据和展开批判性思考。",
  ],
  en: [
    "I approach teaching as an integrated process of intellectual formation, knowledge building, and research training. My classroom emphasizes equality, dialogue, and problem-oriented inquiry, helping students move from concrete communication problems to precise concepts and testable analytical paths.",
    "I connect the history and theory of journalism, Marxist perspectives on journalism, and contemporary questions in digital media. Research design, case discussion, and collaborative exercises help students formulate questions, organize evidence, and develop critical analysis.",
  ],
} as const;

const researchAreas = [
  { zh: "新闻传播史论", en: "History and Theory of Journalism and Communication" },
  { zh: "批判文化研究", en: "Critical Cultural Studies" },
  { zh: "媒介技术的文化政治", en: "Cultural Politics of Media Technologies" },
] as const;

const education = [
  {
    year: "2024",
    institution: { zh: "新加坡国立大学", en: "National University of Singapore" },
    degree: { zh: "哲学博士（传播与新媒体）", en: "Ph.D. in Communications and New Media" },
  },
  {
    year: "2019",
    institution: { zh: "清华大学", en: "Tsinghua University" },
    degree: { zh: "文学硕士（新闻传播学）", en: "M.A. in Journalism and Communication" },
  },
  {
    year: "2015",
    institution: { zh: "武汉大学", en: "Wuhan University" },
    degree: { zh: "文学学士（新闻学，第二学位）", en: "B.A. in Journalism (second degree)" },
  },
  {
    year: "2015",
    institution: { zh: "武汉理工大学", en: "Wuhan University of Technology" },
    degree: {
      zh: "理学学士（资源环境与城乡规划管理）",
      en: "B.Sc. in Resources, Environment and Urban-Rural Planning Management",
    },
  },
] as const;

const honors = [
  {
    year: "2025",
    zh: "海外博士后引才专项，教育部",
    en: "Overseas Postdoctoral Recruitment Program, Ministry of Education",
  },
  {
    year: "2024",
    zh: "Top Graduate，新加坡国立大学人文与社会科学学院",
    en: "Top Graduate, Faculty of Arts and Social Sciences, National University of Singapore",
  },
  {
    year: "2024",
    zh: "学术新秀奖，第五届青年新媒体学术研究“启皓奖”",
    en: "Academic Rising Star Award, Fifth Qihao Awards for Young New Media Scholarship",
  },
  {
    year: "2022",
    zh: "最佳论文奖，第十九届中国互联网研究年会",
    en: "Best Paper Award, 19th Chinese Internet Research Conference",
  },
] as const;

const projects = [
  {
    years: "2025–2026",
    title: {
      zh: "“十五五”时期县域国际传播中心建设与高水平对外传播路径研究",
      en: "County-Level International Communication Centers and High-Level External Communication during the 15th Five-Year Plan Period",
    },
    source: {
      zh: "清华大学习近平新时代中国特色社会主义思想研究院青年项目",
      en: "Youth Project, Institute for Xi Jinping Thought on Socialism with Chinese Characteristics for a New Era, Tsinghua University",
    },
  },
  {
    years: "2024–2026",
    title: {
      zh: "社交媒介中青年内卷文化的扩散机制及其治理策略研究",
      en: "The Diffusion and Governance of Youth Involution Culture on Social Media",
    },
    source: {
      zh: "中国博士后科学基金第77批面上资助项目",
      en: "General Program, China Postdoctoral Science Foundation (77th Round)",
    },
  },
  {
    years: "2021–2023",
    title: {
      zh: "劳动的一般教育学：转型中国的劳动文化",
      en: "General Pedagogy of Labor: Work Culture in Transitional China",
    },
    source: {
      zh: "新加坡国立大学研究生科研支持计划",
      en: "Graduate Research Support Scheme, National University of Singapore",
    },
  },
] as const;

const publications = [
  {
    year: "2026",
    authors: "Changwen Chen",
    title: "Learning in (Re)Production: Spare-time Learning and the Reproduction of Gendered Labor in Socialist China",
    venue: "Critical Asian Studies, Online First, 1–26",
    href: "https://doi.org/10.1080/14672715.2026.2642704",
  },
  {
    year: "2026",
    authors: "陈昶文",
    title: "作为“公共知识”的新闻：马克思主义新闻观视野下新闻生产的群众路线",
    venue: "《传媒》第3期，81–83",
  },
  {
    year: "2025",
    authors: "陈昶文",
    title: "走向信息社会：现代性焦虑与“中华学习机”的媒介考古",
    venue: "《国际新闻界》47(12)，149–169",
    href: "https://doi.org/10.13495/j.cnki.cjjc.2025.12.007",
  },
  {
    year: "2025",
    authors: "Yifan Wang & Changwen Chen",
    title: "Parasitic Activism: Grassroots Electronics Repair in and against Big Tech",
    venue: "New Media & Society, Online First, 1–21",
    href: "https://doi.org/10.1177/14614448251403488",
  },
  {
    year: "2025",
    authors: "陈昶文、曹钺",
    title: "生成式人工智能对都市文职白领的技能重构",
    venue: "《中国青年社会科学》44(3)，56–68",
    href: "https://doi.org/10.16034/j.cnki.10-1318/c.2025.03.006",
  },
  {
    year: "2024",
    authors: "陈昶文",
    title: "群众业余学习：全球南方的发展传播学及其替代性范式",
    venue: "《清华大学学报（哲学社会科学版）》39(2)，175–184",
  },
  {
    year: "2024",
    authors: "Changwen Chen & Renyi Hong",
    title: "Business of Involution: Self-Study Rooms and Work Culture in China",
    venue: "Journal of Cultural Economy, 17(3), 396–412",
    href: "https://doi.org/10.1080/17530350.2023.2246988",
  },
  {
    year: "2023",
    authors: "Changwen Chen, Ziyi Wang & Joel Gn",
    title: "Serve the Traffic: The Logic of Traffic and Its Politics on WeChat Platform",
    venue: "Social Media + Society, 9(3), 1–11",
    href: "https://doi.org/10.1177/20563051231193025",
  },
  {
    year: "2023",
    authors: "Changwen Chen",
    title: "Revisiting Dallas Smythe’s ‘Cultural Screening’: Maoist Class Politics and the Technology Revolution in Socialist China",
    venue: "Chinese Journal of Communication, 16(4), 376–394",
    href: "https://doi.org/10.1080/17544750.2023.2208243",
  },
  {
    year: "2019",
    authors: "陈昶文",
    title: "“流量逻辑”如何影响内容生产？基于微信公众号的实证考察",
    venue: "《新闻春秋》第5期，4–20",
  },
] as const;

const teachingExperience = [
  {
    years: "2024–2026",
    zh: "受邀参与清华大学研究生课程《传播学理论研究》《全球新闻传播思想史》《传播学研究方法》的专题讲授与学术研讨。",
    en: "Guest teaching and seminars in graduate courses at Tsinghua University, including Communication Theory, Global Histories of Journalism and Communication Thought, and Communication Research Methods.",
  },
  {
    years: "2019–2020",
    zh: "新加坡国立大学传播与新媒体系《量化研究方法》教学助理，独立承担英文小班授课、研究设计指导、作业批改与评分。",
    en: "Teaching Assistant for Quantitative Research Methods at the National University of Singapore, leading English-language tutorials, research-design exercises, assessment, and grading.",
  },
  {
    years: "2018",
    zh: "清华大学《学术之道》《新闻中的文化》《老子与论语》课程教学助理，负责专题讨论及相关教学支持。",
    en: "Teaching Assistant at Tsinghua University for The Way of Scholarship, Culture in the News, and Laozi and the Analects, facilitating seminars and supporting course instruction.",
  },
] as const;

function SectionTitle({ number, primary, secondary, id }: { number: string; primary: string; secondary: string; id: string }) {
  return (
    <div className="section-heading">
      <p className="section-number">{number}</p>
      <h2 id={id}>
        {primary}
        <span lang={secondary.match(/[\u4e00-\u9fff]/) ? "zh-CN" : "en"}>{secondary}</span>
      </h2>
    </div>
  );
}

function StatementBlock({ label, paragraphs, locale }: { label: string; paragraphs: readonly string[]; locale: Locale }) {
  return (
    <div className="statement-block">
      <p className="subsection-label">{label}</p>
      <div className="statement-copy" lang={locale === "zh" ? "zh-CN" : "en"}>
        {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
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
        <a className="mark" href="#home" aria-label={t.home}>CC / 陈昶文</a>
        <nav className="site-nav" aria-label={locale === "zh" ? "主要导航" : "Primary navigation"}>
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>
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
        <section className="hero" id="home" aria-labelledby="page-title">
          <div className="hero-title">
            <p className="eyebrow">Academic Profile · 学术主页</p>
            <h1 id="page-title">
              {locale === "zh" ? "陈昶文" : "Changwen Chen"}
              <span lang={alternateLocale}>{locale === "zh" ? "Changwen Chen" : "陈昶文"}</span>
            </h1>
          </div>
          <div className="hero-copy">
            <p className="role-primary">
              {locale === "zh" ? "清华大学新闻与传播学院助理教授" : "Assistant Professor, School of Journalism and Communication, Tsinghua University"}
            </p>
            <p className="role-secondary" lang={alternateLocale}>
              {locale === "zh" ? "Assistant Professor, School of Journalism and Communication, Tsinghua University" : "清华大学新闻与传播学院助理教授"}
            </p>
            <div className="actions">
              <a className="action" href="mailto:changwenccw@gmail.com">{t.email}</a>
              <a className="action" href="https://scholar.google.com/citations?hl=en&user=TZzbU8oAAAAJ&view_op=list_works&sortby=pubdate" target="_blank" rel="noreferrer">{t.scholar}</a>
            </div>
          </div>
        </section>

        <section className="editorial-section about-section" id="about" aria-labelledby="about-title">
          <SectionTitle number="01 / PROFILE" id="about-title" primary={t.about} secondary={locale === "zh" ? "About" : "简介"} />
          <div className="about-content">
            <div className="profile-content">
              <StatementBlock label={t.profileLabel} paragraphs={profileStatement[locale]} locale={locale} />
              <div className="profile-meta-grid">
                <div>
                  <p className="subsection-label">{t.education}</p>
                  <ol className="timeline-list">
                    {education.map((item) => (
                      <li key={`${item.year}-${item.institution.en}`}>
                        <span className="timeline-year">{item.year}</span>
                        <div><strong>{item.institution[locale]}</strong><p>{item.degree[locale]}</p></div>
                      </li>
                    ))}
                  </ol>
                </div>
                <div>
                  <p className="subsection-label">{t.honors}</p>
                  <ol className="timeline-list compact">
                    {honors.map((item) => (
                      <li key={`${item.year}-${item.en}`}>
                        <span className="timeline-year">{item.year}</span>
                        <div><p>{item[locale]}</p></div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
            <figure className="portrait-placeholder">
              <div className="portrait-index">{t.imageDraft} / 01</div>
              <div className="portrait-center"><span className="portrait-cross" aria-hidden="true" /><strong>{t.portraitLabel}</strong><small>{t.portraitNote}</small></div>
              <figcaption>{locale === "zh" ? "建议使用竖幅个人照片" : "Portrait orientation recommended"}</figcaption>
            </figure>
          </div>
        </section>

        <section className="editorial-section research-section" id="research" aria-labelledby="research-title">
          <SectionTitle number="02 / RESEARCH" id="research-title" primary={t.research} secondary={locale === "zh" ? "Research" : "研究"} />
          <div className="section-body">
            <StatementBlock label={t.researchLabel} paragraphs={researchStatement[locale]} locale={locale} />
            <div className="areas-wrap">
              <p className="subsection-label">{t.areas}</p>
              <ol className="research-list">
                {researchAreas.map((area) => (
                  <li key={area.en}><span className="area-primary">{area[locale]}</span><span className="area-secondary" lang={alternateLocale}>{locale === "zh" ? area.en : area.zh}</span></li>
                ))}
              </ol>
            </div>
            <div className="projects-wrap">
              <p className="subsection-label">{t.projects}</p>
              <ol className="project-list">
                {projects.map((project) => (
                  <li key={project.title.en}>
                    <span className="project-years">{project.years}</span>
                    <div><h3>{project.title[locale]}</h3><p>{project.source[locale]}</p></div>
                    <span className="project-role">{t.principalInvestigator}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="editorial-section" id="work" aria-labelledby="work-title">
          <SectionTitle number="03 / SELECTED WORK" id="work-title" primary={t.work} secondary={locale === "zh" ? "Selected Work" : "学术成果"} />
          <div className="section-body">
            <p className="subsection-label">{t.workLabel}</p>
            <ol className="publication-list">
              {publications.map((publication) => (
                <li key={publication.title}>
                  <span className="publication-year">{publication.year}</span>
                  <div className="publication-copy">
                    <p>{publication.authors}</p>
                    <h3>{publication.title}</h3>
                    <span>{publication.venue}</span>
                  </div>
                  {"href" in publication ? <a href={publication.href} target="_blank" rel="noreferrer" aria-label={`${publication.title} DOI`}>↗</a> : <span className="publication-no-link" aria-hidden="true">·</span>}
                </li>
              ))}
            </ol>
            <a className="scholar-strip" href="https://scholar.google.com/citations?hl=en&user=TZzbU8oAAAAJ&view_op=list_works&sortby=pubdate" target="_blank" rel="noreferrer"><span>Google Scholar</span><strong>{t.scholar}</strong><span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <section className="editorial-section" id="teaching" aria-labelledby="teaching-title">
          <SectionTitle number="04 / TEACHING" id="teaching-title" primary={t.teaching} secondary={locale === "zh" ? "Teaching" : "教学"} />
          <div className="section-body teaching-content">
            <StatementBlock label={t.teachingLabel} paragraphs={teachingStatement[locale]} locale={locale} />
            <div className="experience-wrap">
              <p className="subsection-label">{t.experience}</p>
              <ol className="experience-list">
                {teachingExperience.map((item) => (
                  <li key={item.years}><span>{item.years}</span><p>{item[locale]}</p></li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div><p className="section-number">05 / CONTACT</p><h2 id="contact-title">{t.contact}<span lang={alternateLocale}>{locale === "zh" ? "Contact" : "联系"}</span></h2></div>
          <div className="contact-copy"><p>{locale === "zh" ? "清华大学新闻与传播学院" : "School of Journalism and Communication, Tsinghua University"}</p><a href="mailto:changwenccw@gmail.com">changwenccw@gmail.com</a></div>
        </section>
      </main>

      <footer><span>© {new Date().getFullYear()} 陈昶文 / Changwen Chen</span><span>清华大学新闻与传播学院 · School of Journalism and Communication, Tsinghua University</span></footer>
    </div>
  );
}
