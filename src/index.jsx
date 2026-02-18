import React, { useMemo } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Download,
  Sparkles,
  Code2,
  Smartphone,
  Server,
  CheckCircle2,
} from "lucide-react";

// Neo-brutalism landing page (single-file). Tailwind is available in preview.

const RESUME_URL = "/cv-nicolas.pdf";

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-1 rounded-full border-2 border-black bg-white px-3 py-1 text-sm font-semibold shadow-[3px_3px_0_0_#000]">
    {children}
  </span>
);

const Card = ({ className = "", children }) => (
  <div
    className={`rounded-2xl border-2 border-black bg-white shadow-[6px_6px_0_0_#000] ${className}`}
  >
    {children}
  </div>
);

const SectionTitle = ({ icon: Icon, title, subtitle }) => (
  <div className="mb-4 flex items-start gap-3">
    <div className="mt-1 rounded-xl border-2 border-black bg-yellow-300 p-2 shadow-[3px_3px_0_0_#000]">
      <Icon className="h-5 w-5" />
    </div>
    <div>
      <h2 className="text-xl font-black tracking-tight md:text-2xl">{title}</h2>
      {subtitle ? (
        <p className="mt-1 text-sm font-medium text-black/80 md:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  </div>
);

const IconLink = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="group inline-flex items-center gap-2 rounded-xl border-2 border-black bg-white px-3 py-2 text-sm font-semibold shadow-[3px_3px_0_0_#000] transition-transform active:translate-x-[1px] active:translate-y-[1px]"
  >
    <Icon className="h-4 w-4" />
    <span>{label}</span>
    <ArrowUpRight className="h-4 w-4 opacity-70 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
  </a>
);

// Kept as a constant to avoid accidental ReferenceErrors in JSX.
const ROLE_PILL_TEXT = "Front-end / Fullstack";

export default function NeoBrutalLanding() {
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
      summary:
        "Desenvolvedor de software com experiência em e-commerces, aplicações web e mobile. Atuo com React/Next no Front-end e também com Flutter/Dart no desenvolvimento mobile (Android, iOS e Web). Trabalho com integração de APIs, testes automatizados e foco em performance e arquitetura limpa.",
      highlights: [
        "React • Next.js • TypeScript",
        "Node.js • Express.js",
        "VTEX (IO e FastStore) • E-commerce",
        "Flutter • Dart • BLoC",
        "APIs REST • JSON",
        "Testes: Jest • Testes Mobile",
        "Agile: Scrum/Kanban • Jira/ClickUp",
      ],
      experience: [
        {
          title: "Estagiário em Desenvolvimento Web",
          company: "Quality Digital",
          period: "08/2025 – Atual",
          bullets: [
            "Desenvolvimento e manutenção de e-commerces com React, Next.js, Node.js, Vtex, TypeScript e JavaScript.",
            "Atuação em projeto internacional (ODP Business), maior case da VTEX.",
            "Integração com APIs REST, correções e melhorias de UX/performance.",
            "Testes unitários com Jest.",
            "Rotina ágil (Scrum/Kanban) com Jira e colaboração em time.",
          ],
        },
        {
          title: "Estagiário em Desenvolvimento Mobile",
          company: "Fitmass S.A.",
          period: "07/2024 – 07/2025",
          bullets: [
            "Desenvolvimento de apps com Flutter/Dart (Android, iOS e Web).",
            "Integração com APIs REST, GraphQL e Firebase; foco em qualidade e testes automatizados.",
            "Aplicação de boas práticas (Clean Code, OOP) e refatorações.",
          ],
        },
      ],
      projects: [
        {
          name: "TaskiToDo",
          tagline: "App offline de tarefas (Flutter) com CRUD e busca.",
          stack: ["Flutter", "Dart", "BLoC", "Hive", "MVVM"],
          url: "https://github.com/nicolasvitorino/TaskiToDo",
        },
      ],
      skills: {
        frontend: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
        backend: ["Node.js", "Express.js", "REST APIs", "JSON"],
        mobile: ["Flutter", "Dart", "BLoC", "Hive", "Firebase"],
        ecommerce: ["VTEX"],
        testing: ["Jest", "Unit Tests", "Widget Tests", "Integration Tests"],
        tools: ["Git", "GitHub", "Vercel", "Jira", "Figma"],
      },
    }),
    []
  );

  return (
    <div className="min-h-screen bg-[#f7f7ff] text-black">
      {/* Background doodles */}
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-60">
        <div className="absolute left-6 top-10 h-28 w-28 rotate-12 rounded-3xl border-2 border-black bg-pink-300 shadow-[6px_6px_0_0_#000]" />
        <div className="absolute right-8 top-24 h-16 w-40 -rotate-6 rounded-2xl border-2 border-black bg-cyan-300 shadow-[6px_6px_0_0_#000]" />
        <div className="absolute bottom-10 left-10 h-20 w-20 rotate-6 rounded-2xl border-2 border-black bg-lime-300 shadow-[6px_6px_0_0_#000]" />
        <div className="absolute bottom-16 right-10 h-28 w-28 -rotate-12 rounded-3xl border-2 border-black bg-orange-300 shadow-[6px_6px_0_0_#000]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-2xl border-2 border-black bg-yellow-200 px-3 py-2 font-bold shadow-[6px_6px_0_0_#000]">
                <Sparkles className="h-4 w-4" />
                Neo-brutal portfolio
              </div>
              <h1 className="text-3xl font-black tracking-tight md:text-5xl">
                {data.name}
              </h1>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <Pill>
                  <MapPin className="h-4 w-4" /> {data.location}
                </Pill>
                <Pill>
                  <Code2 className="h-4 w-4" /> {ROLE_PILL_TEXT}
                </Pill>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <a
                href={RESUME_URL}
                className="inline-flex items-center gap-2 rounded-2xl border-2 border-black bg-lime-300 px-4 py-3 font-black shadow-[6px_6px_0_0_#000] transition-transform active:translate-x-[2px] active:translate-y-[2px]"
              >
                <Download className="h-5 w-5" /> Baixar currículo
              </a>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <IconLink href={data.links.linkedin} icon={Linkedin} label="LinkedIn" />
            <IconLink href={data.links.github} icon={Github} label="GitHub" />
            <IconLink href={`mailto:${data.email}`} icon={Mail} label={data.email} />
          </div>
        </motion.header>

        {/* Main grid */}
        <div className="grid gap-6 md:grid-cols-12">
          {/* Left */}
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <Card className="p-6">
                <SectionTitle
                  icon={CheckCircle2}
                  title="Sobre"
                />
                <p className="text-base font-medium leading-relaxed text-black/90">
                  {data.summary}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {data.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-xl border-2 border-black bg-cyan-200 px-3 py-2 text-sm font-extrabold shadow-[3px_3px_0_0_#000]"
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
              <Card className="p-6">
                <SectionTitle
                  icon={Server}
                  title="Experiência"
                  subtitle="O que eu já fiz no mundo real."
                />
                <div className="space-y-5">
                  {data.experience.map((xp) => (
                    <div
                      key={`${xp.company}-${xp.title}`}
                      className="rounded-2xl border-2 border-black bg-[#fff7e6] p-4 shadow-[4px_4px_0_0_#000]"
                    >
                      <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                        <div>
                          <div className="text-lg font-black">{xp.title}</div>
                          <div className="text-sm font-bold text-black/80">
                            {xp.company}
                          </div>
                        </div>
                        <div className="text-sm font-extrabold">{xp.period}</div>
                      </div>
                      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm font-semibold">
                        {xp.bullets.map((b) => (
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
              <Card className="p-6">
                <SectionTitle
                  icon={Smartphone}
                  title="Projetos"
                />

                <div className="grid gap-4 md:grid-cols-2">
                  {data.projects.map((p) => (
                    <a
                      key={p.name}
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group rounded-2xl border-2 border-black bg-white p-4 shadow-[4px_4px_0_0_#000] transition-transform active:translate-x-[1px] active:translate-y-[1px]"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="text-lg font-black">{p.name}</div>
                          <div className="mt-1 text-sm font-semibold text-black/80">
                            {p.tagline}
                          </div>
                        </div>
                        <ArrowUpRight className="h-5 w-5 opacity-70 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {p.stack.map((s) => (
                          <span
                            key={s}
                            className="rounded-xl border-2 border-black bg-pink-200 px-2 py-1 text-xs font-extrabold shadow-[2px_2px_0_0_#000]"
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

          {/* Right */}
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
            >
              <Card className="p-6">
                <SectionTitle
                  icon={Code2}
                  title="Skills"
                />

                <div className="space-y-4">
                  <SkillGroup title="Front-end" items={data.skills.frontend} />
                  <SkillGroup title="Back-end" items={data.skills.backend} />
                  <SkillGroup title="Mobile" items={data.skills.mobile} />
                  <SkillGroup title="E-commerce" items={data.skills.ecommerce} />
                  <SkillGroup title="Testes" items={data.skills.testing} />
                  <SkillGroup title="Ferramentas" items={data.skills.tools} />
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="mt-6"
            >
              <Card className="p-6">
                <SectionTitle
                  icon={Sparkles}
                  title="Contate-me"
                />

                <div className="grid gap-3">
                  <a
                    href={data.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border-2 border-black bg-yellow-300 px-4 py-3 text-center font-black shadow-[6px_6px_0_0_#000] transition-transform active:translate-x-[2px] active:translate-y-[2px]"
                  >
                    Ver LinkedIn
                  </a>
                  <a
                    href={data.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border-2 border-black bg-cyan-300 px-4 py-3 text-center font-black shadow-[6px_6px_0_0_#000] transition-transform active:translate-x-[2px] active:translate-y-[2px]"
                  >
                    Ver GitHub
                  </a>
                  <a
                    href={`mailto:${data.email}`}
                    className="rounded-2xl border-2 border-black bg-lime-300 px-4 py-3 text-center font-black shadow-[6px_6px_0_0_#000] transition-transform active:translate-x-[2px] active:translate-y-[2px]"
                  >
                    Mandar e-mail
                  </a>
                </div>
                </Card>
                            </motion.div>


            <footer className="mt-6 text-center text-xs font-bold text-black/70">
              Feito com React + Tailwind — estilo Neo-Brutalism.
            </footer>

          </div>
        </div>
      </div>
    </div>
  );
}

function SkillGroup({ title, items }) {
  return (
    <div>
      <div className="mb-2 inline-flex items-center gap-2 rounded-xl border-2 border-black bg-orange-200 px-3 py-1.5 text-sm font-black shadow-[3px_3px_0_0_#000]">
        {title}
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((it) => (
          <span
            key={it}
            className="rounded-xl border-2 border-black bg-white px-2.5 py-1 text-xs font-extrabold shadow-[2px_2px_0_0_#000]"
          >
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}


