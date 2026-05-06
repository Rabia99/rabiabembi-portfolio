"use client";
import Image from "next/image";
type SkillGroupProps = {
  title: string;
  items: string[];
};

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
};

const skills = {
  frontend: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
  backend: ["Node.js", "Express.js", "REST APIs", "PostgreSQL", "MySQL", "MongoDB"],
  mobile: ["React Native", "Android", "iOS"],
  ai: ["AI Agents", "LLM Workflows", "AI Integrations", "Automation Systems", "AI Marketing Workflows"],
  tools: ["Git", "GitHub", "Postman", "Firebase", "CI/CD", "Dynamics 365", "Power Platform"],
};

const experiences = [
  {
    company: "CygniSoft Inc.",
    role: "Full Stack Developer",
    duration: "Jun 2024 – Present",
    description:
      "Developing scalable web and mobile applications using React, Next.js, React Native, Node.js, TypeScript, and SQL-based systems.",
  },
  {
    company: "AiWeddings.io",
    role: "Software Developer Freelancer",
    duration: "Oct 2025 – Present",
    description:
      "Contributing to product features, analytics workflows, SSR optimizations, vendor systems, APIs, and production-ready frontend/backend solutions.",
  },
  {
    company: "Swap IT Hub",
    role: "Software Developer",
    duration: "Apr 2021 – Aug 2022",
    description:
      "Built web applications, responsive interfaces, backend API integrations, and database-driven business application features.",
  },
];

const projects = [
  {
    title: "ATS Resume Analyzer & Optimization Platform",
    description:
      "AI-powered resume analysis platform with resume parsing, ATS-style scoring, PDF processing, and resume optimization workflows.",
    stack: "React, APIs, PDF Processing, AI Integrations",
  },
  {
    title: "AI Marketing Agent",
    description:
      "AI-driven marketing workflow system designed for campaign support, content workflows, task automation, and intelligent execution.",
    stack: "AI Agents, LLM Workflows, Automation, APIs",
  },
  {
    title: "CRM & Staffing Management Application",
    description:
      "Candidate and employee management system with authentication, job applications, timesheets, scheduling, and operational workflows.",
    stack: "React Native, Node.js, APIs, Database Systems",
  },
  {
    title: "Vendor Analytics Dashboard Systems",
    description:
      "Analytics dashboard experience involving charts, reporting workflows, date-based insights, APIs, and scalable frontend/backend integrations.",
    stack: "React, TypeScript, PostgreSQL, Analytics APIs",
  },
];

function SkillGroup({ title, items }: SkillGroupProps) {
  return (
    <div className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <h3 className="mb-4 text-lg font-semibold text-stone-900">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1.5 text-sm text-stone-700"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="mb-10 text-center">
      <p className="text-sm font-medium uppercase tracking-[0.25em] text-stone-500">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf8f4] text-stone-800">
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-[#faf8f4]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-lg font-bold tracking-wide text-stone-950">
            Rabia Bembi
          </a>

          <nav className="hidden gap-7 text-sm font-medium text-stone-600 md:flex">
            <a href="#about" className="hover:text-stone-950">About</a>
            <a href="#skills" className="hover:text-stone-950">Skills</a>
            <a href="#projects" className="hover:text-stone-950">Projects</a>
            <a href="#experience" className="hover:text-stone-950">Experience</a>
            <a href="#contact" className="hover:text-stone-950">Contact</a>
          </nav>
        </div>
      </header>

      <section id="home" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-[0.9fr_1.1fr]">
         <div className="flex justify-center">
            <div className="relative h-72 w-72 overflow-hidden rounded-full border border-stone-200 bg-white shadow-sm md:h-80 md:w-80">
              <Image
                src="/img/rabiap.png"
                alt="Rabia Bembi"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          <div className="text-center md:text-left">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-stone-500">Hello, I’m</p>
            <h1 className="mt-3 text-5xl font-bold tracking-tight text-stone-950 md:text-6xl">
              Rabia Bembi
            </h1>
            <p className="mt-4 text-xl font-medium text-stone-700">Full Stack Developer</p>
            <p className="mt-6 max-w-xl text-base leading-7 text-stone-600">
              I build scalable web, mobile, and AI-powered workflow systems using React, Next.js,
              React Native, Node.js, TypeScript, PostgreSQL, and automation-focused tools.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
              <a
                href="/Rabia-Bembi-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-stone-900 bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-black"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-medium text-stone-800 transition hover:bg-stone-50"
              >
                Contact Info
              </a>
            </div>

            <div className="mt-6 flex justify-center gap-5 text-sm md:justify-start">
              <a
                href="https://www.linkedin.com/in/rabiabembi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-600 underline-offset-4 hover:text-stone-950 hover:underline"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/rabia790"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-600 underline-offset-4 hover:text-stone-950 hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <SectionHeading eyebrow="Get To Know More" title="About Me" />

        <div className="grid gap-6 md:grid-cols-3">
          {experiences.map((item) => (
            <div key={item.company} className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-stone-950">{item.company}</h3>
              <p className="mt-1 text-sm font-medium text-stone-700">{item.role}</p>
              <p className="mt-1 text-sm text-stone-500">{item.duration}</p>
              <p className="mt-4 text-sm leading-6 text-stone-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-stone-950">Education</h3>
          <div className="mt-4 space-y-3 text-sm leading-6 text-stone-600">
            <p>
              <span className="font-medium text-stone-800">Postgraduate Certificate</span> — Mobile Application Development, Lambton College, Toronto
            </p>
            <p>
              <span className="font-medium text-stone-800">Bachelor of Technology</span> — Computer Science & Engineering, Guru Nanak Dev University
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <SectionHeading eyebrow="Explore My" title="Technical Skills" />

        <div className="grid gap-6 md:grid-cols-2">
          <SkillGroup title="Frontend" items={skills.frontend} />
          <SkillGroup title="Backend" items={skills.backend} />
          <SkillGroup title="Mobile Development" items={skills.mobile} />
          <SkillGroup title="AI & Automation" items={skills.ai} />
          <SkillGroup title="Tools & Platforms" items={skills.tools} />
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <SectionHeading eyebrow="Browse My Recent" title="Projects" />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-5 flex h-44 items-center justify-center rounded-2xl bg-gradient-to-br from-stone-100 to-stone-200 text-sm font-medium text-stone-500">
                Project {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-stone-950">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-stone-600">{project.description}</p>
              <p className="mt-4 text-sm font-medium text-stone-700">Tools: {project.stack}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <SectionHeading eyebrow="My Journey" title="Professional Experience" />

        <div className="space-y-5">
          {experiences.map((item) => (
            <div key={item.company} className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-sm md:grid md:grid-cols-[0.75fr_1.25fr] md:gap-8">
              <div>
                <h3 className="text-lg font-semibold text-stone-950">{item.role}</h3>
                <p className="mt-1 text-stone-700">{item.company}</p>
                <p className="mt-2 text-sm text-stone-500">{item.duration}</p>
              </div>
              <p className="mt-4 text-sm leading-6 text-stone-600 md:mt-0">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <SectionHeading eyebrow="Get In Touch" title="Contact Me" />

        <div className="mx-auto max-w-2xl rounded-[1.75rem] border border-stone-200 bg-white p-6 text-center shadow-sm">
          <p className="mb-5 text-sm leading-6 text-stone-600">
            Open to full stack developer, AI application developer, enterprise solutions, and software engineering opportunities.
          </p>
          <div className="flex flex-col gap-4 text-sm md:flex-row md:justify-center md:gap-8">
            <a href="mailto:rabiabembi8@gmail.com" className="text-stone-700 underline-offset-4 hover:text-stone-950 hover:underline">
              rabiabembi8@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/rabiabembi/" target="_blank" rel="noopener noreferrer" className="text-stone-700 underline-offset-4 hover:text-stone-950 hover:underline">
              LinkedIn
            </a>
            <a href="https://github.com/rabia790" target="_blank" rel="noopener noreferrer" className="text-stone-700 underline-offset-4 hover:text-stone-950 hover:underline">
              GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-stone-200 px-6 py-8 text-center text-sm text-stone-500">
        Copyright © 2026 Rabia Bembi. All Rights Reserved.
      </footer>
    </main>
  );
}
