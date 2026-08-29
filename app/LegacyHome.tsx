"use client";

import { useState } from "react";

type Locale = "zh" | "en";

const copy = {
  zh: {
    home: "首页",
    about: "简介",
    work: "研究成果",
    publicWork: "公共表达",
    publicWriting: "媒体文章",
    podcastTalks: "播客与对谈",
    teaching: "教学",
    profileLabel: "个人研究自述",
    workLabel: "近期成果",
    courses: "开设课程",
    scholar: "查看谷歌学术",
    email: "发送邮件",
    showMore: "展开全文",
    showLess: "收起全文",
  },
  en: {
    home: "Home",
    about: "About",
    work: "Publications",
    publicWork: "Public Work",
    publicWriting: "Public Writing",
    podcastTalks: "Podcast & Talks",
    teaching: "Teaching",
    profileLabel: "Research Statement",
    workLabel: "Recent Publications",
    courses: "Courses Taught",
    scholar: "View Google Scholar",
    email: "Send an email",
    showMore: "Show more",
    showLess: "Show less",
  },
} as const;

const navItems = [
  { id: "home", zh: "首页", en: "Home" },
  { id: "about", zh: "简介", en: "About" },
  { id: "work", zh: "研究成果", en: "Publications" },
  { id: "writing", zh: "公共表达", en: "Public Work" },
  { id: "teaching", zh: "教学", en: "Teaching" },
] as const;

export const profileStatement = {
  zh: [
    "我很难从学术体制所提供的琳琅满目的标签中，挑选出一组足以准确标定自己所做工作的名称。因此，请允许我暂且绕开这些简洁的分类，用一种最传统、或许也略显冗长的方式，来介绍我的研究。",
    "贯穿我研究的是一个看似古老、却不断以新形式返回的问题：社会如何把思考与劳作分配给不同的人，又如何使这种分配显得顺理成章？",
    "脑力劳动与体力劳动的分工，起初表现为劳动过程中构想与执行的分离，继而扩展为知识、能力、权威与发言资格的不均衡配置。它决定谁能够设计劳动、解释经验和参与决策，也决定谁主要承担操作、服从与执行。脑体分工因而不仅存在于不同劳动者之间，也被写入机器、程序、标准和制度流程之中。当构想、知识与规则凝结为技术系统，劳动分工便获得了一种超越个体、持续组织后来劳动过程的物质形式。",
    "从马克思主义的视角看，技术并非从社会外部降临的中性力量。机器、工具与技术系统凝结着先前的知识和劳动，是过去劳动的物化形态，即所谓“死劳动”（dead labor）。技术使过去的劳动进入现在，并参与组织当下的“活劳动”（living labor）。在特定生产关系中，死劳动以机器、流程和标准的形式返回生产现场，规定活劳动的节奏、动作与可能性。脑体劳动之间的分工，也因此表现为活劳动与物化劳动之间的关系，表现为劳动者与技术之间的关系。",
    "技术的政治性正产生于这一转换。技术由劳动创造，却可能以一种外在于劳动者的力量重新面对劳动者。在脑体分工高度制度化的条件下，技术系统的设计权、解释权与控制权往往集中于规划、管理和专业技术位置，直接从事生产与操作的劳动者则需要适应技术已经写定的程序。过去劳动由谁占有，以何种形式被写入技术，又如何反过来支配当下劳动，构成我理解“技术政治”的基本问题。技术政治由此关涉的是，劳动者能否理解、使用、修复和改造技术，以及他们能否参与决定技术应当如何组织生产与社会生活。",
    "“学习”是我进入这一问题的关键切口，也是社会分工得以再生产的具体机制。阿尔都塞关于教育作为意识形态国家机器的分析指出，学校在传授知识与技能的同时，也再生产劳动纪律、能力等级和既定的社会位置。脑力劳动与体力劳动之间的界线，正是在何种知识值得学习、谁有资格解释知识、不同的人被训练去承担何种工作等日常过程中被内化和自然化。学习因此构成一个内含矛盾的社会场域：它把主体配置到既定分工之中，也可能使他们获得理解、质疑和改造这种分工的能力。",
    "全球六十年代使这一矛盾获得了鲜明的历史形式。从中国围绕教育与劳动关系展开的政治实验，到美国以校园为重要据点的反文化与反战运动，再到法国五月风暴，学校既是社会秩序传递知识、甄别能力和配置位置的制度，也是围绕知识权威、教育组织与社会分工展开争夺的重要场所。正是在这个意义上，我把学习理解为斗争的场域。它的政治方向不由“学习”本身预先保证，而取决于知识由谁界定、学习如何组织、能力如何评价，以及学习所得能否转化为劳动者介入技术与劳动过程的现实权力。学习可能巩固脑体分工，也可能重新打开被专业化和技术控制封闭的知识边界；研究需要解释的是，具体的历史关系如何使其中一种可能获得支配性力量。",
    "与“学习”相连的另一个概念是“业余”。“业余”本身已经被组织进脑体分工与专业化的关系之中，并承载着这套分工赋予的文化等级。在日常语言中，把一个人或一项工作称为“业余”，通常暗示其所受训练不足、能力有限或成果不够可靠。“业余”与“不专业”之间看似自然的对应，正是专业化秩序分配知识资格与发言权的一种方式：专业身份被确认为能力与权威的制度凭证，未被纳入这一身份体系的知识实践则更容易被归入较低等级。因而，业余同学习一样，也是一个需要争夺的场域。将业余重新提出为政治问题，需要把分析对象从二者何者更优转向二元结构本身，追问专业与业余的边界如何形成、由谁划定，又如何把进入知识、技术与文化生产的资格分配给不同主体。这种争夺指向一个更具体的问题：普通人的知识与创造何以被贬抑为不够专业，又能在何种制度和实践条件下获得参与、解释与判断的现实权力。",
    "这一问题最终通向我对社会发展的理解。社会发展体现为生产能力和物质条件的变化，也体现为一个社会如何分配学习、思考、创造和控制技术的机会。技术进步可以扩大社会的生产能力，也可能把更多知识从劳动者身上抽离出来，并将其封装在由少数主体控制的技术系统之中。社会发展的公平性，因而需要通过劳动者能否共享知识、能否发展自身能力、能否参与技术与劳动过程的组织来衡量。脑体分工、技术控制与知识分配在这里汇合为同一个问题：社会积累起来的能力，究竟以何种方式重新回到社会成员手中。",
    "我沿着两条相互检验、共同推进的路径追踪这一问题。一条路径进入当代社会，考察新的媒介与技术条件如何重组劳动过程、知识权威和主体经验，以及劳动者如何在日常实践中适应、协商或改变技术所规定的关系。当代经验在这里承担着提出历史问题的作用：数字化、自动化与平台化所呈现的知识集中和技术控制，促使我追问这些关系承接了何种更长时段的分工机制，又在哪些方面形成了新的历史条件。另一条路径转向历史，尤其将毛时代的社会实践视为尚未耗尽的思想资源。所谓“以毛时代历史实践来思考”（thinking with Maoist practices in history），意味着考察那些重新安排劳动、学习、技术与知识关系的尝试，分析它们针对何种矛盾、依靠哪些制度和实践机制、为何遭遇限度，又留下了哪些未完成的可能性。",
    "将分析尺度从社会内部推向全球知识秩序，知识去殖民化便显现为同一问题的另一种形态。世界范围内的知识与技术生产同样存在构想与执行、理论与经验、命名者与被命名者之间的不对称配置。在许多领域，处于中心位置的国家与知识机构掌握概念、标准和技术体系的生产权，后发社会则更多承担物质生产、提供经验材料并接受既有理论的解释。由此形成一种特殊的知识处境：后发社会的经验需要先被翻译为中心知识体系能够辨认的语言，才获得进入理论讨论的资格。",
    "这种全球知识分工与社会内部的脑体分工分处不同尺度，却共享相近的结构机制：承担实践的人缺少解释实践的概念权力，生产概念的人则能够把特定历史经验提升为普遍性的理论语言。技术进一步使这种关系获得物质形式，因为技术标准、知识体系与生产工具能够跨越空间，在新的社会环境中重新安排劳动与能力。知识去殖民化的任务，因而在于重组经验、概念与技术之间的生产关系，使地方历史从等待解释的材料转化为能够生产概念的思想资源，使后发社会获得理解自身经验、组织自身知识并参与技术选择的能力。",
    "在新闻传播学的学科体系内，我的研究可以概括为三个相互贯通的方向：新闻传播史论、批判文化研究与媒介技术的文化政治。新闻传播史论使我能够追踪新闻、知识与社会发展之间关系的历史形成；批判文化研究使我关注劳动分工如何进入日常生活、主体经验与社会常识；媒介技术的文化政治则把技术重新置于劳动、知识与权力的关系之中，考察技术如何凝结既有社会关系，又如何参与组织新的文化与社会秩序。这三个方向共同围绕同一问题展开：知识与技术如何成为社会分工的力量，以及普通人如何重新取得参与知识和技术生产的能力。",
    "我将自己置于马克思主义与历史唯物主义的思想传统之中。这一立场首先意味着一种关于社会的基本判断：劳动形式、技术体系与知识秩序都形成于具体的生产方式、制度安排与历史斗争，并在矛盾运动中持续变化。批判的工作，在于重新揭示看似自然的社会形式背后的生产过程、关系结构与历史条件。新闻传播学既是我的专业归属，也是我进入现代知识秩序的一扇具体入口。沿着新闻、媒介与技术，我所讨论的问题逐渐进入劳动组织、知识生产、社会发展与历史变迁之间更广阔的关系。",
    "在研究方法上，我主要采用口述史、深度访谈、参与式观察与田野调查。历史化构成这些方法共同的认识原则。它要求把对象放回使其得以形成的关系网络，考察不同力量如何在特定的历史情势中相遇、结合、冲突并沉淀为制度。文化研究中的激进语境主义（radical contextualism）与历史情势分析（historical conjunctural analysis）对我具有重要影响：社会现象需要在具体关系中获得解释，历史情势则是多重力量暂时结合并形成结构性效果的动态过程。",
    "我的研究由此始终致力于对既成社会形式进行去自然化（denaturalization）与重新问题化（reproblematization）。当专业化被视为效率的自然结果，当技术控制被解释为知识能力的必然差异，当既有分工被理解为社会运行不可改变的条件，历史化的工作便是重新追问：这些关系在何种条件下形成，它们如何被写入知识、制度与技术，又排除了哪些可能的社会安排。研究的意义，正在于使已经失去问题形态的事物重新成为问题，也使那些被凝固在技术与分工之中的社会能力，再次显露出被共同占有和重新组织的可能。",
  ],
  en: [
    "Faced with the academy’s dazzling array of labels, I have struggled to find a set that adequately describes what I do. So allow me, for the moment, to set those tidy classifications aside and introduce my research in the most traditional, and perhaps slightly long-winded, way: in prose.",
    "My work is organized around a question that may sound old but keeps returning in new forms: how does society assign thinking and labor to different people, and how does it make that division seem natural?",
    "The division between mental and manual labor begins with the separation of conception from execution within the labor process. It then extends into the unequal distribution of knowledge, capacity, authority, and the right to speak. It shapes who gets to design work, interpret experience, and take part in decisions, and who is expected to operate, obey, and carry them out. This division is embedded not only in relations among workers but also in machines, programs, standards, and institutional routines. Once knowledge, plans, and rules are built into technical systems, the division of labor takes on a material form that outlives any individual and continues to organize the labor that follows.",
    "From a Marxist perspective, technology is no neutral force arriving from outside society. Machines, tools, and technical systems embody earlier forms of knowledge and labor. They are materialized past labor, what Marx calls “dead labor.” Technology carries that past labor into the present, where it helps organize “living labor.” Under particular relations of production, dead labor returns to the workplace as machinery, procedures, and standards that set the rhythms, movements, and possibilities of living labor. The division between mental and manual labor thus also takes shape as a relation between living and objectified labor, between workers and technology.",
    "Technology becomes political through this reversal. Although created by labor, it can confront workers as an external power. Where the division between mental and manual labor is deeply institutionalized, control over the design and interpretation of technical systems tends to sit with planners, managers, and technical experts, while workers directly engaged in production must adapt to procedures already encoded in the technology. My concern with the politics of technology begins here: who appropriates past labor, how is it built into technical systems, and how does it come to govern labor in the present? These questions ultimately concern whether workers can understand, use, repair, and transform technology, and whether they can help determine how it organizes production and social life.",
    "Learning is my principal way into this problem, and it is also one of the mechanisms through which the division of labor is reproduced. Althusser’s account of education as an ideological state apparatus shows how schools transmit knowledge and skill while reproducing labor discipline, hierarchies of competence, and established social positions. The boundary between mental and manual labor is naturalized through ordinary decisions about what counts as knowledge, who is authorized to interpret it, and what kinds of work different people are trained to perform. Learning is therefore a contradictory social field: it assigns subjects to an existing division of labor while potentially giving them the capacity to understand, contest, and reorganize it.",
    "During the global 1960s, this contradiction became especially visible. From political experiments around education and labor in China, through campus-based countercultural and antiwar movements in the United States, to May 1968 in France, schools served both as institutions that transmitted social order and as key sites where knowledge, authority, educational organization, and the division of labor were contested. I therefore approach learning as a site of struggle. Its political direction is not guaranteed by learning itself; it depends on who defines knowledge, how learning is organized, how capacities are judged, and whether what is learned can become a material power through which workers intervene in technology and the labor process. Learning can stabilize the division between mental and manual labor or reopen the boundaries of knowledge secured by professionalization and technological control. The task is to explain how concrete historical relations give one possibility force over the other.",
    "Amateur practice is closely connected to learning because it, too, is a contested field already shaped by the division of labor. In ordinary usage, to call a person or a piece of work “amateur” is usually to question their training, competence, or reliability. The apparently self-evident equation of the amateur with the unprofessional is one way professionalized orders allocate epistemic standing: professional credentials serve as institutional warrants of competence and authority, while practices outside recognized jurisdictions are more readily assigned a lower status. Reclaiming the amateur therefore cannot consist in simply reversing this hierarchy or treating amateur practice as an emancipatory substitute for professional expertise. The object of critique is the dichotomy itself: how the boundary between professional and amateur is made, who has the authority to draw it, and how it distributes access to the production of knowledge, technology, and culture. The politics of the amateur turns on a concrete question: under what institutional and practical conditions can forms of knowledge and creation associated with ordinary people cease to be dismissed as insufficiently professional and acquire material powers of participation, interpretation, and judgment?",
    "These concerns also shape how I think about social development. Development involves changes in productive capacity and material conditions, as well as how a society distributes opportunities to learn, think, create, and exercise control over technology. Technological advances may expand collective productive capacity while removing knowledge from workers and enclosing it in systems controlled by a small number of actors. A more equitable form of development would therefore be measured by whether workers can share knowledge, develop their capacities, and participate in organizing technology and the labor process. The division of mental and manual labor, technological control, and the distribution of knowledge converge on a single question: how can the capacities accumulated by society be placed back in the hands of its members?",
    "I pursue this question along two paths that test and advance one another. The first focuses on the present, examining how new media and technological arrangements reorganize labor processes, epistemic authority, and subjective experience, as well as how workers accommodate, negotiate, or alter the relations prescribed by technology in everyday practice. Contemporary developments pose questions for historical inquiry: the concentration of knowledge and technical control associated with digitalization, automation, and platforms prompts me to ask which longer histories of the division of labor these arrangements inherit and where they create genuinely new conditions. The second path turns to history, especially Mao-era social practices, as an intellectual resource whose possibilities have yet to be exhausted. To think with Maoist practices in history is to examine attempts to reorganize relations among labor, learning, technology, and knowledge: the contradictions they addressed, the institutional and practical mechanisms on which they relied, the limits they encountered, and the possibilities they left unfinished.",
    "At the scale of the global knowledge order, decolonization appears as another expression of the same problem. The production of knowledge and technology is organized through asymmetries between conception and execution, theory and experience, and those who name the world and those who are named by it. In many fields, countries and institutions at the center retain authority over concepts, standards, and technical systems, while late-developing societies are more often assigned the work of material production, the supply of empirical cases, and the application of theories made elsewhere. Their experiences must first be translated into a language legible to dominant knowledge systems before they are admitted into theoretical debate.",
    "The global division of knowledge and the division between mental and manual labor within a society operate at different scales, but they share a structural logic. Those who do the practical work often lack the conceptual authority to explain it; those who produce concepts can turn historically specific experiences into the language of universal theory. Technology gives this relation material durability, as standards, knowledge systems, and instruments of production travel across space and reorganize labor and capacity in new settings. Decolonizing knowledge therefore entails reorganizing relations among experience, concept formation, and technology. Local histories must become more than raw material waiting to be explained; they must also be recognized as resources for producing concepts. This is how late-developing societies can strengthen their capacity to interpret their own experiences, organize their own knowledge, and participate in technological choice.",
    "Within journalism and communication, I describe my work through three closely connected areas: the history and theory of journalism and communication, critical cultural studies, and the cultural politics of media technologies. The first traces the historical formation of relations among journalism, knowledge, and social development. The second examines how divisions of labor enter everyday life, subjective experience, and common sense. The third returns technology to the relations of labor, knowledge, and power, asking how technical forms sediment existing social relations and help organize new cultural and social orders. These areas all lead back to the same question: how do knowledge and technology become forces of social division, and how might ordinary people regain the capacity to participate in their production?",
    "I work within the intellectual traditions of Marxism and historical materialism. This position begins from a basic premise: forms of labor, technical systems, and orders of knowledge emerge from concrete modes of production, institutional arrangements, and historical struggles, and they continue to change through contradiction. Critical inquiry traces the processes, relations, and historical conditions hidden beneath social forms that appear natural. Journalism and communication is both my disciplinary home and my point of entry into the modern order of knowledge. Through journalism, media, and technology, my research opens onto wider relations among the organization of labor, the production of knowledge, social development, and historical change.",
    "Methodologically, I work primarily with oral history, in-depth interviews, participant observation, and fieldwork. Historicization is the epistemological principle that connects these methods. It places an object back within the network of relations that made it possible and asks how different forces met, combined, clashed, and sedimented into institutions in a particular historical conjuncture. My approach draws especially on radical contextualism and historical conjunctural analysis: social phenomena become intelligible through the concrete relations in which they are embedded, while a conjuncture names the shifting alignment through which multiple forces temporarily acquire structural effects.",
    "I am therefore committed to denaturalization and reproblematization. When professionalization appears as the natural outcome of efficiency, technological control as the necessary consequence of unequal knowledge, or established divisions as immutable conditions of social order, historicization reopens the questions that such explanations close down. Under what conditions did these relations emerge? How were they inscribed in knowledge, institutions, and technology? What other ways of organizing society did they rule out? For me, research matters because it can make problems visible again where they have ceased to appear as problems, and because it can reopen the possibility that capacities congealed in technology and the division of labor might be held in common and organized differently.",
  ],
} as const;

export const researchAreas = [
  { zh: "新闻传播史论", en: "History and Theory of Journalism and Communication" },
  { zh: "批判文化研究", en: "Critical Cultural Studies" },
  { zh: "媒介技术的文化政治", en: "Cultural Politics of Media Technologies" },
] as const;

export const publications = [
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

export const publicWriting = [
  {
    year: "2025",
    authors: "Changwen Chen",
    title: "AI Isn’t Always Helping Chinese Office Workers Either",
    details: "November 5, 2025 · Sixth Tone",
    url: "https://www.sixthtone.com/news/1017809",
  },
  {
    year: "2024",
    authors: "Yifan Wang & Changwen Chen",
    title: "The Unauthorized Repair of the World",
    details: "June 13, 2024 · e-flux Journal, no. 146",
    url: "https://www.e-flux.com/journal/146/613173/the-unauthorized-repair-of-the-world/",
  },
  {
    year: "2024",
    authors: "Changwen Chen",
    title: "Why Chinese Are Studying Solo, Together",
    details: "April 26, 2024 · Sixth Tone",
    url: "https://www.sixthtone.com/news/1015064",
  },
] as const;

export const podcastTalks = [
  {
    year: "2025",
    authors: { zh: "陈昶文（受访嘉宾）", en: "Changwen Chen (guest)" },
    title: "119 根本停不下来！为何我们不得不“内卷式学习”？",
    details: {
      zh: "2025年10月9日 · 人文清华播客：对话清华学者 · 1小时21分钟",
      en: "October 9, 2025 · Humanities Tsinghua Podcast · 1 hr 21 min",
    },
    url: "https://podcasts.apple.com/podcast/id1712419886?i=1000730977315",
  },
] as const;

export const courses = [
  { zh: "《中国新闻传播史》", en: "History of Journalism and Communication in China" },
  { zh: "《Mass Communication and Contemporary Chinese Society》", en: "Mass Communication and Contemporary Chinese Society" },
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
  const [expanded, setExpanded] = useState(false);
  const visibleParagraphs = expanded ? paragraphs : paragraphs.slice(0, 4);
  const toggleLabel = expanded ? copy[locale].showLess : copy[locale].showMore;

  return (
    <div className="statement-block">
      <p className="subsection-label">{label}</p>
      <div
        className={`statement-copy ${expanded ? "statement-copy--expanded" : "statement-copy--collapsed"}`}
        id="profile-statement-copy"
        lang={locale === "zh" ? "zh-CN" : "en"}
      >
        {visibleParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
      <button
        className="statement-toggle"
        type="button"
        aria-expanded={expanded}
        aria-controls="profile-statement-copy"
        onClick={() => setExpanded((current) => !current)}
      >
        {toggleLabel}
        <span aria-hidden="true">{expanded ? "−" : "+"}</span>
      </button>
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
            </div>
          </div>
        </section>

        <section className="editorial-section" id="work" aria-labelledby="work-title">
          <SectionTitle number="02 / PUBLICATIONS" id="work-title" primary={t.work} secondary={locale === "zh" ? "Publications" : "研究成果"} />
          <div className="section-body">
            <p className="subsection-label">{t.workLabel}</p>
            <ol className="publication-list">
              {publications.map((publication) => (
                <li key={publication.title}>
                  <span className="publication-year">{publication.year}</span>
                  <div className="publication-copy">
                    <p>{publication.authors}</p>
                    <h3>
                      {"href" in publication ? (
                        <a href={publication.href} target="_blank" rel="noreferrer">
                          {publication.title}<span aria-hidden="true">↗</span>
                        </a>
                      ) : publication.title}
                    </h3>
                    <span>{publication.venue}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="editorial-section" id="writing" aria-labelledby="writing-title">
          <SectionTitle number="03 / PUBLIC WORK" id="writing-title" primary={t.publicWork} secondary={locale === "zh" ? "Public Work" : "公共表达"} />
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

        <section className="editorial-section" id="teaching" aria-labelledby="teaching-title">
          <SectionTitle number="04 / TEACHING" id="teaching-title" primary={t.teaching} secondary={locale === "zh" ? "Teaching" : "教学"} />
          <div className="section-body teaching-content">
            <div className="experience-wrap experience-wrap--solo">
              <p className="subsection-label">{t.courses}</p>
              <ol className="course-list">
                {courses.map((course) => (
                  <li key={course.en}><span aria-hidden="true" /><p>{course[locale]}</p></li>
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
