"use client";

import { useState } from "react";
import { sitePath } from "./site-paths";

type Locale = "zh" | "en";

export const scholarUrl = "https://scholar.google.com/citations?hl=en&user=TZzbU8oAAAAJ&view_op=list_works&sortby=pubdate";

const copy = {
  zh: {
    home: "首页",
    about: "简介",
    work: "研究成果",
    publicWork: "公共媒体",
    publicWriting: "媒体文章",
    podcastTalks: "播客与对谈",
    profileLabel: "个人研究自述",
    workLabel: "近期成果",
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
    profileLabel: "Research Statement",
    workLabel: "Recent Publications",
    showMore: "Show more",
    showLess: "Show less",
  },
} as const;

const navItems = [
  { id: "about", zh: "简介", en: "About", href: "#about" },
  { id: "work", zh: "研究成果", en: "Publications", href: scholarUrl, external: true },
  { id: "writing", zh: "公共媒体", en: "Public Work", href: sitePath("/media/") },
] as const;

export const profileStatement = {
  zh: [
    "从学术体制琳琅满目的标签中，挑选出一组能够准确标定自己所做工作的概念，对我而言并非易事。因此，请允许我暂且绕开这些简洁的分类，用一种传统但也略显冗长的方式，来介绍我的研究。",
    "贯穿我研究的，是一个看似古老、却不断以新形式重返当下的问题：社会如何将思考与劳作分配给不同的人，又如何使这种分配显得顺理成章？",
    "思考与劳作，或者说脑力劳动与体力劳动的分工，起初表现为劳动过程中构想与执行的分离，但很快扩展为知识、能力、权威与资格的不均衡配置。它决定谁能够设计劳动过程、解释经验和参与决策，也决定谁主要承担操作、服从与执行。脑体分工作为一种社会秩序，因而不仅存在于不同劳动者之间，也被写入机器、程序和标准之中。当构想、知识与规则凝结为技术系统，劳动分工便获得了一种超越具体劳动者、并能够持续组织此后劳动过程的物质形式。",
    "从马克思主义的视角看，技术并非从社会外部降临的中性力量。机器、工具与技术系统凝结着先前的知识和劳动，是过去劳动的物化形态，即所谓“死劳动”（dead labor）。技术使过去的劳动进入现在，并参与组织当下的“活劳动”（living labor）。换句话说，死劳动会以机器、流程和标准的形式返回生产现场，并重新规定活劳动的节奏、动作与可能性。脑体劳动之间的分工，也因此进一步呈现为活劳动与死劳动之间的关系，并具体体现于劳动者与技术之间的关系。",
    "技术的政治性正产生于这一转换。技术由劳动者创造，却可能以一种外在于劳动者的力量重新面对劳动者。在资本主义的生产关系和脑体分工高度制度化的条件下，技术系统的设计权、解释权与控制权往往集中于规划、管理和专业技术岗位，直接从事生产与操作的劳动者则需要适应技术预先设定的程序。过去劳动由谁占有，以何种形式被写入技术，又如何反过来支配当下劳动，构成我理解“技术政治”的基本问题。在我的问题意识中，技术政治关涉的，正是劳动者能否理解、使用、修复和改造技术，以及他们能否参与决定技术应当如何组织生产与社会生活。",
    "“学习”是我进入这一问题的关键切口，因为它是社会分工得以再生产的重要机制。阿尔都塞关于教育作为意识形态国家机器的分析指出，学校在传授知识与技能的同时，也再生产劳动纪律、能力等级和既定的社会秩序。脑力劳动与体力劳动之间的界线，正是在“何种知识值得学习”、“谁有资格解释知识”、“不同的人被训练去承担何种工作”等日常过程中被内化和自然化。学习因此构成一个充满内在矛盾和现实可能性的社会场域：它把主体安置到既定分工之中，也潜藏着使他们获得理解、质疑和改造这种分工的可能性。",
    "全球六十年代（Global Sixties）使这一矛盾获得了直接的历史形式。从中国围绕教育与劳动关系展开的激进实验，到美国以校园为重要据点的反文化与反战运动，再到法国五月风暴中走上街头的学生，学校既是社会秩序传递知识、训练技能和塑造理想的制度，也是围绕知识权威、师生等级与社会分工展开斗争的场所。正是在这个意义上，我把学习理解为一个争夺可能性的场域。它的方向没有任何预先的保证，它完全取决于现实的权力关系如何围绕一系列问题展开：谁有权界定知识，学习如何被组织，能力如何得到评价，以及学习所得能否转化为劳动者介入技术与劳动过程的现实能力。换言之，学习可能巩固脑体分工，也可能重新打开被专业化和技术控制封闭的知识边界。值得追问的是，怎样的历史关系与制度条件，使其中某一种可能性获得支配性地位。",
    "与“学习”相连的另一个概念是“业余”。“业余”一词本身早已被组织进资本主义的脑体分工与专业化秩序之中，并携带着这套分工赋予的文化等级意涵。在日常语言中，把一个人或一项工作称为“业余”，通常暗示其所受训练不足、能力有限或成果不够可靠。但是，“业余”与“不专业”之间看似自然的对立，或许正是专业化秩序分配知识资格、判断权与发言权的一种方式：专业身份被确认为能力与权威的制度凭证，未被纳入这一身份体系的知识实践则更容易被归入较低等级，进而失去被承认为知识的资格。因而，业余同学习一样，也是一个需要争夺的场域：专业与业余的边界如何形成、由谁划定，以及这种边界又如何将进入知识、技术与文化生产的资格分配给不同的主体。这种争夺事关每一个人的尊严政治：人民群众的知识与创造何以被贬抑为不够专业，又能在何种制度和实践条件下重新获得参与、解释与判断的现实权力。",
    "这一问题最终将我带向对社会发展的关注。社会发展既是生产能力和物质条件的提升，也应该体现为一个社会如何分配学习、思考、创造和控制技术的机会与能力。技术进步可以扩大社会的生产能力，也可能把更多知识从劳动者身上抽离出来，转化并封装于由少数主体控制的技术系统之中。社会发展的公平性，需要通过劳动者能否共享知识、能否发展自身能力、能否参与技术与劳动过程的组织来衡量。脑体分工、技术控制与知识分配在这里汇合为同一个问题：社会由广大人民群众积累起来的能力，究竟以何种方式重新回到人民群众的手中。",
    "我沿着两条相互检验、共同推进的路径追踪这一问题。一条路径进入当代社会，考察新的媒介与技术条件如何重组劳动过程、知识权威和主体经验，以及劳动者如何在日常实践中适应、协商或改变技术所规定的关系。当代经验在这里构成重新提出历史问题的入口：数字化、自动化与平台化所呈现的知识集中和技术控制，促使我追问这些关系延续了哪些更长时段的社会分工机制，又在什么意义上构成了新的历史条件。另一条路径转向历史，尤其将毛时代的社会实践视为尚未耗尽的思想资源。所谓“以毛时代历史实践来思考”，意味着将目光投向那些试图重新安排劳动、学习、技术与知识关系的艰难尝试，分析它们针对何种矛盾、依靠哪些制度和实践机制、为何遭遇历史的限度，又留下了哪些未完成的可能性。",
    "当分析尺度从社会内部延伸至全球知识秩序，知识生产的去殖民化便成为上述问题意识在全球尺度上的进一步展开。世界范围内的知识与技术生产同样存在构想与执行、理论与经验、命名者与被命名者之间的不对称配置。处于中心位置的国家与知识机构掌握概念、标准和技术体系的生产权，后发社会则更多被置于提供经验材料、接受既有理论解释的位置。最终，作为非西方地区的学者，我们不得不面对一种特殊的知识处境：后发社会的经验需要先被翻译为中心知识体系能够辨认的语言，才能获得进入理论讨论的资格。",
    "这种全球知识分工与社会内部的脑体分工发生于不同尺度，却具有相近的结构机制：承担实践的人缺少解释实践的概念权力，生产概念的人则能够把特定历史经验提升为普遍性的理论语言。技术进一步使这种关系获得物质形式，因为技术标准、知识体系与生产工具能够跨越空间，并在新的社会环境中重新配置劳动、知识与能力。因此，知识去殖民化的任务，在于重组经验、概念与技术之间的生产关系，使地方历史从等待解释的材料转化为能够生产概念的思想资源，使后发社会获得理解自身经验、组织自身知识并参与技术选择的能力。",
    "在新闻传播学的学科体系内，我的研究可以概括为三个相互贯通的方向：新闻传播史论、批判文化研究与媒介技术的文化政治。新闻传播史论使我能够追踪新闻、知识与社会发展之间关系的历史形成；批判文化研究使我关注劳动分工如何进入日常生活、主体经验与社会常识；媒介技术的文化政治则把技术重新置于劳动、知识与权力的关系之中，考察技术如何凝结既有社会关系，又如何参与组织新的文化与社会秩序。这三个方向分别从历史形成、日常经验与技术政治三个层面，展开同一个问题：知识与技术如何成为社会分工的力量，以及普通人如何重新取得参与知识和技术生产的能力。",
    "我将自己置于马克思主义与历史唯物主义的思想传统之中。这一立场首先意味着一种关于社会的基本判断：劳动形式、技术体系与知识秩序都形成于具体的生产方式、制度安排与历史斗争，并在历史矛盾运动中不断变化。批判的工作，在于重新揭示看似自然的社会形式背后的生产过程、关系结构与历史条件。新闻传播学既是我的专业归属，也是我进入现代知识秩序的一扇具体入口。沿着新闻、媒介与技术，我所讨论的问题逐渐延伸至劳动组织、知识生产、社会发展与历史变迁之间更广阔的关系。因此，相比于“你的研究与新闻传播学科有何关系”，我更愿意回应另一个问题：“你的研究与千千万万的普通人有何关系”。",
    "在研究方法上，我主要采用档案研究、口述史、深度访谈、参与式观察与田野调查。历史化是这些方法共同的认识原则，它要求把对象放回使其得以形成的社会历史语境，考察不同力量如何在特定的历史情势中相遇、结合、冲突并沉淀为制度。文化研究中的激进语境主义（radical contextualism）与历史情势分析（historical conjunctural analysis）对我具有重要影响：社会现象只有置于具体关系之中才能得到充分解释，而所谓历史情势，也正是多重社会力量在特定时刻相遇、连接并产生结构性效果的动态过程。",
    "总而言之，我的研究始终致力于对既成社会形式进行去自然化（denaturalization）与重新问题化（reproblematization）。当专业化被视为效率的自然结果，当技术控制被解释为知识能力差异的必然结果，当既有分工被理解为社会运行不可改变的条件，历史化的工作便要重新追问：这些关系在何种条件下形成，它们如何被写入知识、制度与技术，又排除了哪些可能的社会安排。我所理解的研究意义，正在于让那些已经失去问题形态的事物重新成为问题，并使那些被凝结于技术与社会分工之中的集体能力，再次显现出共同占有与重新组织的历史可能性。",
  ],
  en: [
    "I find it difficult to select, from the academy’s dazzling array of labels, a set of concepts capable of locating the work I do with any precision. Allow me, then, to set these concise classifications aside for the moment and introduce my research in a more traditional, if somewhat long-winded, form.",
    "Running through my research is a question that may seem old, yet continually returns to the present in new forms: how does society distribute thinking and labor among different people, and how does it make that distribution appear natural?",
    "The division between thinking and labor, or between mental and manual labor, first appears within the labor process as a separation of conception from execution. It soon extends, however, into the unequal distribution of knowledge, capacities, authority, and recognized standing. It determines who is able to design labor processes, interpret experience, and participate in decision-making, as well as who is expected primarily to perform operations, obey instructions, and carry out decisions. As a form of social order, this division exists not only among different groups of workers but is also inscribed in machines, programs, and standards. Once plans, knowledge, and rules are condensed into technical systems, the division of labor acquires a material form that transcends particular workers and continues to organize the labor processes that follow.",
    "From a Marxist perspective, technology is not a neutral force that enters society from the outside. Machines, tools, and technical systems congeal earlier knowledge and labor; they are the objectified form of past labor, or “dead labor.” Technology brings past labor into the present, where it helps organize “living labor.” In other words, dead labor returns to production in the form of machines, procedures, and standards, redefining the rhythms, movements, and possibilities of living labor. The division between mental and manual labor thus further assumes the form of a relation between living and dead labor, concretely embodied in the relation between workers and technology.",
    "The politics of technology arises from precisely this transformation. Technology is created by workers, yet it can return to confront them as a force external to their activity. Under capitalist relations of production, where the division between mental and manual labor is deeply institutionalized, the power to design, interpret, and control technical systems tends to be concentrated in planning, management, and professional technical positions. Workers directly engaged in production and operation must then adapt to procedures predetermined by technology. Who appropriates past labor, how that labor is inscribed in technology, and how it in turn governs labor in the present constitute the central problem in my account of the politics of technology. At stake in technological politics, as I understand it, is precisely whether workers can understand, use, repair, and transform technology, and whether they can participate in deciding how technology should organize production and social life.",
    "Learning is a key entry point into this problem because it is a crucial mechanism through which the social division of labor is reproduced. Althusser’s analysis of education as an ideological state apparatus shows that schools reproduce labor discipline, hierarchies of competence, and the established social order even as they impart knowledge and skills. The boundary between mental and manual labor is internalized and naturalized through everyday processes that determine “what knowledge is worth learning,” “who is authorized to interpret knowledge,” and “what kinds of work different people are trained to perform.” Learning therefore constitutes a social field charged with internal contradictions and real possibilities: it places subjects within an established division of labor while also containing the possibility that they may learn to understand, question, and transform it.",
    "The Global Sixties gave this contradiction a direct historical form. From radical experiments in China around the relationship between education and labor, through campus-centered countercultural and antiwar movements in the United States, to the students who took to the streets during May 1968 in France, schools functioned both as institutions through which the social order transmitted knowledge, trained skills, and shaped aspirations, and as sites of struggle over epistemic authority, hierarchies between teachers and students, and the division of labor. It is in this sense that I understand learning as a field in which possibilities are contested. Its direction is never guaranteed in advance; it depends entirely on how real relations of power are organized around a series of questions: who has the authority to define knowledge, how learning is organized, how capacities are evaluated, and whether what is learned can become an effective capacity for workers to intervene in technology and the labor process. Learning may consolidate the division between mental and manual labor, or it may reopen boundaries of knowledge closed by professionalization and technological control. The question is what historical relations and institutional conditions allow one of these possibilities to assume a dominant position.",
    "A second concept closely connected to learning is the “amateur.” The term has long been organized within the capitalist division between mental and manual labor and the order of professionalization, and it carries the cultural hierarchies produced by that order. In ordinary usage, to describe a person or a piece of work as “amateur” usually implies inadequate training, limited competence, or unreliable results. Yet the apparently natural opposition between “amateur” and “professional” may itself be one of the ways in which a professionalized order distributes epistemic standing, powers of judgment, and the right to speak. Professional identity becomes an institutional credential for competence and authority, while knowledge practices outside this identity system are more readily assigned an inferior status and thereby denied recognition as knowledge. Like learning, the amateur is therefore a field to be contested: how is the boundary between professional and amateur produced, who has the authority to draw it, and how does that boundary distribute access to the production of knowledge, technology, and culture among different subjects? This contest concerns a politics of dignity that bears on everyone: why are the knowledge and creativity of ordinary people devalued as insufficiently professional, and under what institutional and practical conditions might they regain the effective power to participate, interpret, and judge?",
    "These questions lead me, finally, to social development. Social development entails expanding productive capacity and improving material conditions, but it should also be understood through how a society distributes the opportunities and capacities to learn, think, create, and exercise control over technology. Technological progress can expand society’s productive capacity while extracting knowledge from workers, transforming it, and enclosing it within technical systems controlled by a small number of actors. Whether development is equitable must therefore be measured by whether workers can share knowledge, develop their own capacities, and participate in organizing technology and the labor process. The division between mental and manual labor, technological control, and the distribution of knowledge converge here on the same question: how can capacities accumulated by the broad masses of the people be returned to the people themselves?",
    "I pursue this question along two paths that test and advance one another. The first focuses on contemporary society, examining how new media and technological conditions reorganize labor processes, epistemic authority, and subjective experience, and how workers adapt to, negotiate, or alter the relations prescribed by technology in everyday practice. Contemporary experience serves here as an entry point for posing historical questions anew: the concentration of knowledge and technical control associated with digitalization, automation, and platformization prompts me to ask which longer-term mechanisms of the social division of labor these relations extend, and in what sense they constitute new historical conditions. The second path turns to history, especially the social practices of the Mao era, as an intellectual resource whose possibilities have not been exhausted. To “think with Maoist practices in history” is to examine difficult attempts to reorganize relations among labor, learning, technology, and knowledge: which contradictions they addressed, which institutional and practical mechanisms they relied upon, why they encountered historical limits, and what unfinished possibilities they left behind.",
    "When the scale of analysis extends from relations within society to the global order of knowledge, the decolonization of knowledge production becomes a further unfolding of the same problematic at a global scale. Across the world, the production of knowledge and technology is structured by asymmetries between conception and execution, theory and experience, and those who name and those who are named. Countries and knowledge institutions at the center retain authority over the production of concepts, standards, and technical systems, while later-developing societies are more often placed in the position of supplying empirical materials and receiving explanation through established theories. Scholars working in non-Western contexts therefore confront a distinctive epistemic condition: their societies’ experiences must first be translated into a language legible to dominant knowledge systems before they can qualify for entry into theoretical debate.",
    "The global division of knowledge and the division between mental and manual labor within society occur at different scales, yet they share related structural mechanisms: those who undertake practical work lack the conceptual authority to interpret that work, while those who produce concepts can elevate particular historical experiences into the language of universal theory. Technology gives this relation a material form, since technical standards, knowledge systems, and instruments of production travel across space and reconfigure labor, knowledge, and capacity in new social settings. The task of decolonizing knowledge is therefore to reorganize the relations of production among experience, concept formation, and technology: to transform local histories from materials awaiting explanation into intellectual resources capable of generating concepts, and to enable later-developing societies to interpret their own experience, organize their own knowledge, and participate in technological decision-making.",
    "Within the disciplinary framework of journalism and communication, my work can be described through three interconnected areas: the history and theory of journalism and communication, critical cultural studies, and the cultural politics of media technologies. The first traces the historical formation of relations among journalism, knowledge, and social development; the second examines how the division of labor enters everyday life, subjective experience, and social common sense; the third situates media technologies within relations of labor, knowledge, and power, examining how technologies sediment existing social relations and participate in organizing new cultural and social orders. From the three respective levels of historical formation, everyday experience, and technological politics, these areas develop a common question: how do knowledge and technology become forces of social division, and how can ordinary people regain the capacity to participate in their production?",
    "I situate my work within the intellectual traditions of Marxism and historical materialism. This position begins from a basic understanding of society: forms of labor, technical systems, and knowledge orders arise within concrete modes of production, institutional arrangements, and historical struggles, and continue to change through the movement of historical contradictions. Critique brings back into view the processes of production, relational structures, and historical conditions beneath social forms that appear natural. Journalism and communication is both my disciplinary home and a concrete point of entry into the modern order of knowledge. Through journalism, media, and technology, the questions I address gradually extend to broader relations among the organization of labor, the production of knowledge, social development, and historical change. For this reason, rather than answer the question “What does your research have to do with journalism and communication?” I would prefer to respond to another: “What does your research have to do with millions of ordinary people?”",
    "Methodologically, I work primarily with archival research, oral history, in-depth interviews, participant observation, and fieldwork. Historicization is the epistemological principle shared by these methods: it returns the object of inquiry to the social and historical context in which it took shape, tracing how different forces meet, combine, and clash within a particular historical conjuncture and how those encounters become sedimented in institutions. My approach is strongly influenced by radical contextualism and historical conjunctural analysis in cultural studies. Social phenomena can be adequately explained only when situated within concrete relations; a historical conjuncture, in turn, is the dynamic process through which multiple social forces meet and become articulated at a particular moment, producing structural effects.",
    "Overall, my research is committed to the denaturalization and reproblematization of established social forms. When professionalization is treated as the natural outcome of efficiency, technological control as the necessary consequence of differences in knowledge and capacity, and existing divisions as immutable conditions of social order, historicization must ask anew: under what conditions did these relations take shape, how were they inscribed in knowledge, institutions, and technology, and what alternative social arrangements did they foreclose? As I understand it, the significance of research lies in turning things that have ceased to appear as problems back into questions, and in making visible once again the historical possibility of collectively appropriating and reorganizing the collective capacities congealed in technology and the social division of labor.",
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
    url: "https://www.xiaoyuzhoufm.com/episode/68e778b4525f51df386ddb64",
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
                <a
                  href={item.href}
                  target={"external" in item && item.external ? "_blank" : undefined}
                  rel={"external" in item && item.external ? "noreferrer" : undefined}
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
              <a className="action action--email" href="mailto:changwenccw@gmail.com">changwenccw@gmail.com</a>
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

      </main>

      <footer><span>© {new Date().getFullYear()} 陈昶文 / Changwen Chen</span><span>清华大学新闻与传播学院 · School of Journalism and Communication, Tsinghua University</span></footer>
    </div>
  );
}
