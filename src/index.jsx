import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ArrowUpRight,
  Download,
  Sparkles,
  Code2,
  Smartphone,
  Server,
  CheckCircle2,
  Moon,
  Sun,
} from "lucide-react";

const RESUME_URL_PT = "/cv-nicolas.pdf";
const RESUME_URL_EN = "/cv-nicolas-en.pdf";

const Pill = ({ children, dark = false }) => (
  <span className={`inline-flex items-center gap-1 rounded-full border-2 ${dark ? "border-zinc-600 bg-zinc-900 text-zinc-200 shadow-[3px_3px_0_0_#3f3f46]" : "border-black bg-white text-black shadow-[3px_3px_0_0_#000]"} px-3 py-1 text-sm font-semibold`}>
    {children}
  </span>
);

const Card = ({ className = "", children, dark = false }) => (
  <div
    className={`rounded-2xl border-2 ${dark ? "border-zinc-600 bg-zinc-900 shadow-[6px_6px_0_0_#3f3f46]" : "border-black bg-white shadow-[6px_6px_0_0_#000]"} ${className}`}
  >
    {children}
  </div>
);

const SectionTitle = ({ icon: Icon, title, subtitle, dark = false }) => (
  <div className="mb-4 flex items-start gap-3">
    <div className={`mt-1 rounded-xl border-2 p-2 ${dark ? "border-yellow-800 bg-yellow-600 shadow-[3px_3px_0_0_#854d0e]" : "border-black bg-yellow-300 shadow-[3px_3px_0_0_#000]"}`}>
      <Icon className="h-5 w-5 text-black" />
    </div>
    <div>
      <h2 className={`text-xl font-black tracking-tight md:text-2xl ${dark ? "text-zinc-200" : "text-black"}`}>{title}</h2>
      {subtitle ? (
        <p className={`mt-1 text-sm font-medium md:text-base ${dark ? "text-zinc-400" : "text-black/80"}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  </div>
);

const IconLink = ({ href, icon: Icon, label, dark = false }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className={`group inline-flex items-center gap-2 rounded-xl border-2 px-3 py-2 text-sm font-semibold transition-transform active:translate-x-[1px] active:translate-y-[1px] ${dark ? "border-zinc-600 bg-zinc-900 text-zinc-200 shadow-[3px_3px_0_0_#3f3f46]" : "border-black bg-white text-black shadow-[3px_3px_0_0_#000]"}`}
  >
    <Icon className="h-4 w-4" />
    <span>{label}</span>
    <ArrowUpRight className="h-4 w-4 opacity-70 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
  </a>
);

function LanguageToggle({ lang, setLang, dark = false }) {
  return (
    <div className={`inline-flex items-center rounded-2xl border-2 p-1 ${dark ? "border-zinc-600 bg-zinc-900 shadow-[6px_6px_0_0_#3f3f46]" : "border-black bg-white shadow-[6px_6px_0_0_#000]"}`}>
      <button
        type="button"
        onClick={() => setLang("pt")}
        className={`rounded-xl px-3 py-2 text-sm font-black transition-transform active:translate-x-[1px] active:translate-y-[1px] ${
          lang === "pt" ? dark ? "bg-cyan-600 text-zinc-200" : "bg-cyan-400 text-black" : dark ? "bg-zinc-900 text-zinc-400" : "bg-white text-black"
        }`}
      >
        PT
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`rounded-xl px-3 py-2 text-sm font-black transition-transform active:translate-x-[1px] active:translate-y-[1px] ${
          lang === "en" ? dark ? "bg-cyan-600 text-zinc-200" : "bg-cyan-400 text-black" : dark ? "bg-zinc-900 text-zinc-400" : "bg-white text-black"
        }`}
      >
        EN
      </button>
    </div>
  );
}

function ThemeToggle({ theme, setTheme, dark = false }) {
  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={`inline-flex items-center gap-2 rounded-2xl border-2 px-4 py-3 font-black transition-transform active:translate-x-[2px] active:translate-y-[2px] ${
        theme === "dark"
          ? "border-orange-800 bg-orange-600 text-zinc-200 shadow-[6px_6px_0_0_#9a3412]"
          : "border-black bg-yellow-200 text-black shadow-[6px_6px_0_0_#000]"
      }`}
    >
      {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}

function SkillGroup({ title, items, dark = false }) {
  return (
    <div>
      <div className={`mb-2 inline-flex items-center gap-2 rounded-xl border-2 px-3 py-1.5 text-sm font-black ${dark ? "border-orange-800 bg-orange-600 text-zinc-200 shadow-[3px_3px_0_0_#9a3412]" : "border-black bg-orange-200 text-black shadow-[3px_3px_0_0_#000]"}`}>
        {title}
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((it) => (
          <span
            key={it}
            className={`rounded-xl border-2 px-2.5 py-1 text-xs font-extrabold ${dark ? "border-zinc-600 bg-zinc-800 text-zinc-200 shadow-[2px_2px_0_0_#3f3f46]" : "border-black bg-white text-black shadow-[2px_2px_0_0_#000]"}`}
          >
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function NeoBrutalLanding() {
  const [lang, setLang] = useState("pt");
  const [theme, setTheme] = useState("light");
  const resumeUrl = lang === "en" ? RESUME_URL_EN : RESUME_URL_PT;
  const isDark = theme === "dark";

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "pt" || saved === "en") setLang(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") setTheme(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const t = useMemo(
    () => ({
      pt: {
        badge: "Neo-brutal portfolio",
        rolePill: "Backend / Automação de processos (RPA) / Fullstack",
        download: "Baixar currículo",
        about: "Sobre",
        experience: "Experiência",
        experienceSubtitle: "O que eu já fiz no mundo real.",
        projects: "Projetos",
        skills: "Skills",
        contact: "Contate-me",
        viewLinkedIn: "Ver LinkedIn",
        viewGithub: "Ver GitHub",
        sendEmail: "Mandar e-mail",
        footer: "Feito com React + Tailwind — estilo Neo-Brutalism.",
        skillGroups: {
          frontend: "Front-end",
          backend: "Back-end",
          mobile: "Mobile",
          ecommerce: "E-commerce",
          testing: "Testes",
          tools: "Ferramentas",
        },
      },
      en: {
        badge: "Neo-brutal portfolio",
        rolePill: "Backend / RPA / Fullstack",
        download: "Download resume",
        about: "About",
        experience: "Experience",
        experienceSubtitle: "What I’ve built in the real world.",
        projects: "Projects",
        skills: "Skills",
        contact: "Contact",
        viewLinkedIn: "View LinkedIn",
        viewGithub: "View GitHub",
        sendEmail: "Send email",
        footer: "Built with React + Tailwind — Neo-Brutalism style.",
        skillGroups: {
          frontend: "Front-end",
          backend: "Back-end",
          mobile: "Mobile",
          ecommerce: "E-commerce",
          testing: "Testing",
          tools: "Tools",
        },
      },
    }),
    [],
  );

  const data = useMemo(
    () => ({
      name: "Nicolas de Souza Vitorino",
      location: "Curitiba, PR",
      email: "nicolasvvitorino@gmail.com",
      phone: "+55 (41) 99718-2724",
      links: {
        linkedin: "https://linkedin.com/in/nicolasvitorino",
        github: "https://github.com/nicolasvitorino",
      },
      summary: {
        pt: "Desenvolvedor de Software com experiência em automação de processos (RPA), web scraping e desenvolvimento backend/fullstack. Atuo na criação de soluções automatizadas escaláveis utilizando Python, com foco em eficiência operacional, integração de sistemas e redução de tarefas manuais. Experiência com aplicações web e e-commerce (React, Node.js, VTEX) e forte interesse em backend, dados e IA.",
        en: "Software developer focused on process automation (RPA), web scraping and backend/fullstack development. I build scalable automated solutions using Python, focusing on operational efficiency, system integrations and reducing manual work. Experience with web and e-commerce applications (React, Node.js, VTEX) and strong interest in backend, data and AI.",
      },
      highlights: [
        "Python • RPA • Automação de Processos",
        "Web Scraping • Playwright • Selenium",
        "APIs REST • Webhooks • Integrações",
        "PostgreSQL • SQL • Dados",
        "Node.js • Backend",
        "React • Next.js • TypeScript",
        "IA aplicada à produtividade",
      ],
      experience: [
        {
          title: {
            pt: "Desenvolvedor Júnior",
            en: "Junior Software Developer",
          },
          company: "Grupo Pinho (CodificaAi)",
          period: { pt: "04/2026 – Atual", en: "Apr/2026 – Present" },
          bullets: {
            pt: [
              "Desenvolvimento de automações de processos (RPA) utilizando Python",
              "Criação de pipelines automatizados para coleta, processamento e integração de dados",
              "Implementação de web scraping com Playwright e Selenium",
              "Integração entre sistemas via webhooks e APIs REST",
              "Desenvolvimento de rotinas automatizadas com agendamento (jobs)",
              "Modelagem e consultas em PostgreSQL",
              "Criação de automação que eliminou a geração manual de ~300 certificados mensais",
              "Otimização de processos e redução significativa de tarefas manuais",
              "Uso de IA para aumento de produtividade no desenvolvimento",
            ],
            en: [
              "Developed process automation (RPA) solutions using Python",
              "Built automated pipelines for data collection, processing and integration",
              "Implemented web scraping with Playwright and Selenium",
              "Integrated systems using webhooks and REST APIs",
              "Created scheduled automation jobs",
              "Worked with PostgreSQL (queries and data modeling)",
              "Built automation that eliminated manual generation of ~300 monthly certificates",
              "Optimized operational processes and reduced manual work",
              "Used AI tools to boost development productivity",
            ],
          },
        },
        {
          title: {
            pt: "Desenvolvedor de Software",
            en: "Software Developer",
          },
          company: "Quality Digital",
          period: { pt: "08/2025 – 04/2026", en: "Aug/2025 – Apr/2026" },
          bullets: {
            pt: [
              "Desenvolvimento de e-commerces com React, Node.js, VTEX e TypeScript",
              "Atuação em projeto internacional B2B/B2C (ODP Business)",
              "Integração com APIs REST",
              "Correção de bugs e melhorias de performance e UX",
              "Testes unitários com Jest",
              "Trabalho com metodologias ágeis (Scrum/Kanban)",
            ],
            en: [
              "Developed e-commerce applications with React, Node.js, VTEX and TypeScript",
              "Worked on international B2B/B2C project (ODP Business)",
              "Integrated REST APIs",
              "Fixed bugs and improved performance and UX",
              "Wrote unit tests with Jest",
              "Worked in Agile environment (Scrum/Kanban)",
            ],
          },
        },
        {
          title: {
            pt: "Desenvolvedor Mobile",
            en: "Mobile Developer",
          },
          company: "Fitmass S.A.",
          period: { pt: "07/2024 – 07/2025", en: "Jul/2024 – Jul/2025" },
          bullets: {
            pt: [
              "Desenvolvimento de apps com Flutter (Android, iOS e Web)",
              "Integração com APIs REST, GraphQL e Firebase",
              "Aplicação de Clean Architecture",
            ],
            en: [
              "Built apps with Flutter (Android, iOS and Web)",
              "Integrated REST APIs, GraphQL and Firebase",
              "Applied Clean Architecture",
            ],
          },
        },
      ],
      projects: [
        {
          name: "API da Champions League",
          tagline: {
            pt: "API para criar, visualizar, atualizar e deletar jogadores em base de dados JSON.",
            en: "API to create, read, update, and delete players in a JSON-based data store.",
          },
          stack: [
            "Node.js",
            "Express.js",
            "JSON",
            "NPM",
            "TypeScript",
            "JavaScript",
          ],
          url: "https://github.com/nicolasvitorino/api-champions",
        },
        {
          name: "API da Fórmula 1",
          tagline: {
            pt: "API criada para aprofundar conceitos de back-end.",
            en: "API built to deepen back-end development concepts.",
          },
          stack: ["Node.js", "Fastify", "NPM", "TypeScript", "JavaScript"],
          url: "https://github.com/nicolasvitorino/formula1-api",
        },
        {
          name: "API REST de Tarefas",
          tagline: {
            pt: "API para criar, visualizar, atualizar e deletar tarefas.",
            en: "REST API to create, read, update, and delete tasks.",
          },
          stack: ["Java", "Spring Boot", "Hibernate", "JSON"],
          url: "https://github.com/nicolasvitorino/api-todolist-springboot",
        },
        {
          name: "Landing Page PSN",
          tagline: {
            pt: "Landing page responsiva com consumo de API REST.",
            en: "Responsive landing page consuming a REST API.",
          },
          stack: ["Angular", "TypeScript", "JavaScript"],
          url: "https://github.com/nicolasvitorino/angular-psn-store",
        },
        {
          name: "Task Manager (Offline-First)",
          tagline: {
            pt: "Gerenciador de tarefas offline com UI/UX fluída e persistência local.",
            en: "Offline task manager with smooth UI/UX and local persistence.",
          },
          stack: ["Flutter", "Dart", "Hive"],
          url: "https://github.com/nicolasvitorino/taski-todo",
        },
        {
          name: "Dicionário de Inglês",
          tagline: {
            pt: "Consulta de palavras em inglês com significados, pronúncia e histórico de pesquisa.",
            en: "English dictionary with meanings, pronunciation playback, and search history.",
          },
          stack: ["Flutter", "Dart", "sqflite", "SQLite"],
          url: "https://github.com/nicolasvitorino/english-words-app",
        },
      ],
      skills: {
        frontend: [
          "React",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "HTML",
          "CSS",
        ],
        backend: ["Node.js", "Express.js", "REST APIs", "JSON"],
        mobile: ["Flutter", "Dart", "BLoC", "Hive", "Firebase"],
        ecommerce: ["VTEX"],
        testing: ["Jest", "Unit Tests", "Widget Tests", "Integration Tests"],
        tools: ["Git", "GitHub", "Vercel", "Jira", "Figma"],
      },
    }),
    [],
  );

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? "bg-zinc-950 text-zinc-200" : "bg-[#f7f7ff] text-black"}`}>
      <div className={`pointer-events-none fixed inset-0 -z-10 ${isDark ? "opacity-30" : "opacity-40"}`}>
        <div className={`absolute left-6 top-10 h-28 w-28 rotate-12 rounded-3xl border-2 ${isDark ? "border-pink-800 bg-pink-700 shadow-[6px_6px_0_0_#831843]" : "border-black bg-pink-300 shadow-[6px_6px_0_0_#000]"}`} />
        <div className={`absolute right-8 top-24 h-16 w-40 -rotate-6 rounded-2xl border-2 ${isDark ? "border-cyan-800 bg-cyan-700 shadow-[6px_6px_0_0_#164e63]" : "border-black bg-cyan-300 shadow-[6px_6px_0_0_#000]"}`} />
        <div className={`absolute bottom-10 left-10 h-20 w-20 rotate-6 rounded-2xl border-2 ${isDark ? "border-lime-800 bg-lime-700 shadow-[6px_6px_0_0_#3f6212]" : "border-black bg-lime-300 shadow-[6px_6px_0_0_#000]"}`} />
        <div className={`absolute bottom-16 right-10 h-28 w-28 -rotate-12 rounded-3xl border-2 ${isDark ? "border-orange-800 bg-orange-700 shadow-[6px_6px_0_0_#7c2d12]" : "border-black bg-orange-300 shadow-[6px_6px_0_0_#000]"}`} />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className={`mb-3 inline-flex items-center gap-2 rounded-2xl border-2 px-3 py-2 font-bold ${isDark ? "border-yellow-800 bg-yellow-600 text-black shadow-[6px_6px_0_0_#854d0e]" : "border-black bg-yellow-200 shadow-[6px_6px_0_0_#000]"}`}>
                <Sparkles className="h-4 w-4" />
                {t[lang].badge}
              </div>

              <h1 className="text-3xl font-black tracking-tight md:text-5xl">
                {data.name}
              </h1>

              <div className="mt-2 flex flex-wrap items-center gap-2">
                <Pill dark={isDark}>
                  <MapPin className="h-4 w-4" /> {data.location}
                </Pill>
                <Pill dark={isDark}>
                  <Code2 className="h-4 w-4" /> {t[lang].rolePill}
                </Pill>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <LanguageToggle lang={lang} setLang={setLang} dark={isDark} />
              <ThemeToggle theme={theme} setTheme={setTheme} dark={isDark} />
              <a
                href={resumeUrl}
                className={`inline-flex items-center gap-2 rounded-2xl border-2 px-4 py-3 font-black transition-transform active:translate-x-[2px] active:translate-y-[2px] ${isDark ? "border-lime-800 bg-lime-600 text-black shadow-[6px_6px_0_0_#3f6212]" : "border-black bg-lime-300 text-black shadow-[6px_6px_0_0_#000]"}`}
              >
                <Download className="h-5 w-5" /> {t[lang].download}
              </a>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <IconLink
              href={data.links.linkedin}
              icon={Linkedin}
              label="LinkedIn"
              dark={isDark}
            />
            <IconLink href={data.links.github} icon={Github} label="GitHub" dark={isDark} />
            <IconLink
              href={`mailto:${data.email}`}
              icon={Mail}
              label={data.email}
              dark={isDark}
            />
          </div>
        </motion.header>

        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <Card className="p-6" dark={isDark}>
                <SectionTitle icon={CheckCircle2} title={t[lang].about} dark={isDark} />
                <p className={`text-base font-medium leading-relaxed ${isDark ? "text-zinc-300" : "text-black/90"}`}>
                  {data.summary[lang]}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {data.highlights.map((h) => (
                    <span
                      key={h}
                      className={`rounded-xl border-2 px-3 py-2 text-sm font-extrabold ${isDark ? "border-cyan-800 bg-cyan-600 text-zinc-200 shadow-[3px_3px_0_0_#164e63]" : "border-black bg-cyan-200 text-black shadow-[3px_3px_0_0_#000]"}`}
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6"
            >
              <Card className="p-6" dark={isDark}>
                <SectionTitle
                  icon={Server}
                  title={t[lang].experience}
                  subtitle={t[lang].experienceSubtitle}
                  dark={isDark}
                />

                <div className="space-y-5">
                  {data.experience.map((xp) => (
                    <div
                      key={`${xp.company}-${xp.title.pt}`}
                        className={`rounded-2xl border-2 p-4 ${isDark ? "border-zinc-600 bg-zinc-800 shadow-[4px_4px_0_0_#3f3f46]" : "border-black bg-[#fff7e6] shadow-[4px_4px_0_0_#000]"}`}
                    >
                      <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                        <div>
                          <div className="text-lg font-black">
                            {xp.title[lang]}
                          </div>
                            <div className={`text-sm font-bold ${isDark ? "text-zinc-400" : "text-black/80"}`}>
                            {xp.company}
                          </div>
                        </div>
                        <div className="text-sm font-extrabold">
                          {xp.period[lang]}
                        </div>
                      </div>

                        <ul className={`mt-3 list-disc space-y-2 pl-5 text-sm font-semibold ${isDark ? "text-zinc-300" : "text-black"}`}>
                        {xp.bullets[lang].map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-6"
            >
              <Card className="p-6" dark={isDark}>
                <SectionTitle icon={Smartphone} title={t[lang].projects} dark={isDark} />

                <div className="grid gap-4 md:grid-cols-2">
                  {data.projects.map((p) => (
                    <a
                      key={p.name}
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className={`group rounded-2xl border-2 p-4 transition-transform active:translate-x-[1px] active:translate-y-[1px] ${isDark ? "border-zinc-600 bg-zinc-800 shadow-[4px_4px_0_0_#3f3f46]" : "border-black bg-white shadow-[4px_4px_0_0_#000]"}`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="text-lg font-black">{p.name}</div>
                          <div className={`mt-1 text-sm font-semibold ${isDark ? "text-zinc-400" : "text-black/80"}`}>
                            {p.tagline[lang]}
                          </div>
                        </div>
                        <ArrowUpRight className="h-5 w-5 opacity-70 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </div>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {p.stack.map((s) => (
                          <span
                            key={s}
                            className={`rounded-xl border-2 px-2 py-1 text-xs font-extrabold ${isDark ? "border-pink-800 bg-pink-600 text-zinc-200 shadow-[2px_2px_0_0_#831843]" : "border-black bg-pink-200 text-black shadow-[2px_2px_0_0_#000]"}`}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </a>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>

          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
            >
              <Card className="p-6" dark={isDark}>
                <SectionTitle icon={Code2} title={t[lang].skills} dark={isDark} />

                <div className="space-y-4">
                  <SkillGroup
                    title={t[lang].skillGroups.backend}
                    items={data.skills.backend}
                    dark={isDark}
                  />
                  <SkillGroup
                    title={t[lang].skillGroups.mobile}
                    items={data.skills.mobile}
                    dark={isDark}
                  />
                  <SkillGroup
                    title={t[lang].skillGroups.ecommerce}
                    items={data.skills.ecommerce}
                    dark={isDark}
                  />
                  <SkillGroup
                    title={t[lang].skillGroups.testing}
                    items={data.skills.testing}
                    dark={isDark}
                  />
                  <SkillGroup
                    title={t[lang].skillGroups.tools}
                    items={data.skills.tools}
                    dark={isDark}
                  />
                  <SkillGroup
                    title={t[lang].skillGroups.frontend}
                    items={data.skills.frontend}
                    dark={isDark}
                  />
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="mt-6"
            >
              <Card className="p-6" dark={isDark}>
                <SectionTitle icon={Sparkles} title={t[lang].contact} dark={isDark} />

                <div className="grid gap-3">
                  <a
                    href={data.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className={`rounded-2xl border-2 px-4 py-3 text-center font-black transition-transform active:translate-x-[2px] active:translate-y-[2px] ${isDark ? "border-yellow-800 bg-yellow-600 text-black shadow-[6px_6px_0_0_#854d0e]" : "border-black bg-yellow-300 text-black shadow-[6px_6px_0_0_#000]"}`}
                  >
                    {t[lang].viewLinkedIn}
                  </a>

                  <a
                    href={data.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`rounded-2xl border-2 px-4 py-3 text-center font-black transition-transform active:translate-x-[2px] active:translate-y-[2px] ${isDark ? "border-cyan-800 bg-cyan-600 text-zinc-200 shadow-[6px_6px_0_0_#164e63]" : "border-black bg-cyan-300 text-black shadow-[6px_6px_0_0_#000]"}`}
                  >
                    {t[lang].viewGithub}
                  </a>

                  <a
                    href={`mailto:${data.email}`}
                    className={`rounded-2xl border-2 px-4 py-3 text-center font-black transition-transform active:translate-x-[2px] active:translate-y-[2px] ${isDark ? "border-lime-800 bg-lime-600 text-black shadow-[6px_6px_0_0_#3f6212]" : "border-black bg-lime-300 text-black shadow-[6px_6px_0_0_#000]"}`}
                  >
                    {t[lang].sendEmail}
                  </a>
                </div>
              </Card>
            </motion.div>

            <footer className={`mt-6 text-center text-xs font-bold ${isDark ? "text-zinc-400" : "text-black/70"}`}>
              {t[lang].footer}
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
