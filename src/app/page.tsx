"use client"

import * as React from "react"
import { motion } from "framer-motion"
import {
  ArrowUpRight,
  Download,
  FileText,
  Mail,
  MapPin,
} from "lucide-react"
import { BentoGrid, BentoGridItem } from "@/components/BentoGrid"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollHeader } from "@/components/ScrollHeader"

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 4l16 16" />
      <path d="M20 4L4 20" />
    </svg>
  )
}

function HeroPhoto() {
  return (
    <aside className="relative mx-auto mt-6 w-full max-w-sm lg:mt-0 lg:max-w-none">
      <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-cyan-400/10 blur-3xl dark:bg-white/[0.06]" />
      <div className="relative overflow-hidden rounded-[1.75rem] border border-zinc-200/90 bg-white/75 p-2 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur dark:border-zinc-600 dark:bg-zinc-900/80 dark:shadow-[0_24px_90px_rgba(0,0,0,0.28)]">
        <div
          role="img"
          aria-label="Saurabh Gaikwad"
          className="aspect-[1/1] rounded-[1.35rem] bg-zinc-100 bg-cover bg-center dark:bg-zinc-900"
          style={{
            backgroundImage:
              "linear-gradient(180deg, transparent 50%, rgba(0, 0, 0, 0.18)), url('/saurabh-profile.jpg'), radial-gradient(circle at 50% 25%, rgba(34, 211, 238, 0.2), transparent 36%), linear-gradient(145deg, #f4f4f5, #e4e4e7)",
          }}
        />
      </div>
    </aside>
  )
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen text-zinc-900 dark:text-zinc-100 antialiased">
      <ScrollHeader />

      <main className="mx-auto max-w-7xl space-y-28 px-6 pt-4 pb-16 md:pt-10 md:pb-14">
        {/* HERO */}
        <section
          id="about"
          className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_360px] xl:grid-cols-[minmax(0,1fr)_420px]"
        >
          <div className="max-w-4xl space-y-8">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="border border-zinc-200 bg-zinc-100 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
                  01 / Core Objective
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.24em] text-emerald-700 dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-300">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_16px_rgba(34,197,94,0.85)]" />
                  </span>
                  Available for work
                </span>
              </div>

              <h2 className="max-w-3xl pt-2 text-3xl font-bold tracking-tighter leading-[1.1] text-zinc-950 dark:text-white sm:text-4xl md:text-5xl">
                Bridging the gap between advanced machine learning models and intuitive
                user interfaces.
              </h2>

              
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {["Deep Learning", "Generative AI", "LLMs", "Computer Vision", "DevOps"].map(
                (tag, idx, arr) => (
                  <React.Fragment key={tag}>
                    <span className="rounded-md border border-zinc-200 bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-300">
                      {tag}
                    </span>
                    {idx < arr.length - 1 && (
                      <span className="self-center text-zinc-300 dark:text-zinc-700">•</span>
                    )}
                  </React.Fragment>
                )
              )}
            </div>

            <div className="space-y-5 border-l-2 border-zinc-200 pl-6 pt-4 dark:border-zinc-800">
              <p className="text-sm font-normal leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-base">
                I am a{" "}
                <strong className="font-semibold text-zinc-900 dark:text-zinc-200">
                  Full-Stack AI Engineer
                </strong>{" "}
                specializing in building scalable software solutions and intelligent
                systems. Recently, I developed{" "}
                <strong className="font-semibold text-cyan-600 dark:text-cyan-300">
                  Saraav
                </strong>
                , a full-stack ed-tech platform scaling to over{" "}
                <strong className="font-semibold text-emerald-600 dark:text-emerald-300">
                  500+ registered users
                </strong>
                , and designed AI models for a patented UAV flood mapping system that
                won{" "}
                <strong className="font-semibold text-indigo-600 dark:text-indigo-300">
                  2nd Prize
                </strong>{" "}
                at the University Level Avishkar Competition.
              </p>
              <p className="text-sm font-normal leading-relaxed text-zinc-500">
                I thrive in environments where I can build end-to-end applications and
                apply cutting-edge AI to solve real-world problems. My workflow pairs
                custom machine learning methodologies with robust front-end web
                paradigms.
              </p>
            </div>
          </div>
          <HeroPhoto />
        </section>

        {/* TECH STACK */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-zinc-400 pb-3 dark:border-zinc-700">
            <h3 className="border border-zinc-200 bg-zinc-100 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
              02 / Technical Stack
            </h3>
            <span className="text-xs font-medium uppercase tracking-tight text-zinc-500 dark:text-zinc-400">
              Languages & Systems
            </span>
          </div>
          <div className="grid grid-cols-1 gap-px overflow-hidden border border-zinc-400 bg-zinc-400 md:grid-cols-4 dark:border-zinc-700 dark:bg-zinc-700">
            <div className="space-y-4 bg-white p-6 md:p-8 dark:bg-[#0a0a0c]">
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Languages
              </span>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {["Python", "C", "C++", "TypeScript", "JavaScript", "SQL"].map((t) => (
                  <Badge key={t} variant="default">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="space-y-4 bg-white p-6 md:col-span-2 md:p-8 dark:bg-[#0a0a0c]">
              <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-500 dark:text-indigo-400">
                AI / Machine Learning
              </span>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {[
                  "Deep Learning",
                  "Generative AI",
                  "LLMs",
                  "Computer Vision",
                  "TensorFlow",
                  "Hugging Face",
                  "NLP",
                ].map((t) => (
                  <Badge key={t} variant="outline">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="space-y-4 bg-white p-6 md:p-8 dark:bg-[#0a0a0c]">
              <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-500 dark:text-cyan-400">
                Web & DevOps
              </span>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {[
                  "React.js",
                  "FastAPI",
                  "Tailwind CSS",
                  "Docker",
                  "GitHub Actions",
                  "Firebase",
                ].map((t) => (
                  <Badge key={t} variant="secondary">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="space-y-6">
          <div className="flex items-center justify-between border-b border-zinc-400 pb-3 dark:border-zinc-700">
            <h3 className="border border-zinc-200 bg-zinc-100 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
              03 / Featured Work
            </h3>
            <span className="text-xs font-medium uppercase tracking-tight text-zinc-500 dark:text-zinc-400">
                Projects
            </span>
          </div>
          <BentoGrid>
            <BentoGridItem index={0} className="md:col-span-2 lg:col-span-2">
              <Card className="group flex h-full flex-col justify-between p-8 md:p-10">
                <div className="space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-100 pb-4 dark:border-zinc-900/80">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-500 dark:text-cyan-400">
                      EdTech Platform
                    </span>
                    <Badge variant="neon">Scaled: 500+ Users</Badge>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold tracking-tight leading-[1.1] text-zinc-950 transition-colors group-hover:text-cyan-600 dark:text-white dark:group-hover:text-cyan-300 md:text-2xl">
                      Saraav
                    </h4>
                    <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                      Creator & Lead Developer
                    </p>
                    <p className="pt-1 text-sm font-normal leading-relaxed text-zinc-600 dark:text-zinc-400">
                      Launched a full-stack platform scaling to 500+ users. Implemented
                      AI-driven content generation using Python scripts to automate study
                      material creation. Managed the entire SDLC.
                    </p>
                    <div className="flex flex-wrap items-center gap-3 pt-3">
                      <a href="https://github.com/Saurabhkg03/saraav" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 shadow-sm transition-colors hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700 dark:border-zinc-800 dark:bg-zinc-950/50 dark:text-zinc-300 dark:hover:border-cyan-900/50 dark:hover:bg-cyan-950/30 dark:hover:text-cyan-400">
                        <GithubIcon className="h-3.5 w-3.5" />
                        GitHub
                      </a>
                      <a href="https://saraav.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 shadow-sm transition-colors hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700 dark:border-zinc-800 dark:bg-zinc-950/50 dark:text-zinc-300 dark:hover:border-cyan-900/50 dark:hover:bg-cyan-950/30 dark:hover:text-cyan-400">
                        <ArrowUpRight className="h-3.5 w-3.5" />
                        Website
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-1.5 border-t border-zinc-100 pt-6 dark:border-zinc-900/80">
                  {["React.js", "TypeScript", "Firebase", "Tailwind CSS", "Python"].map(
                    (t) => (
                      <span
                        key={t}
                        className="rounded border border-zinc-200 bg-zinc-50 px-2 py-0.5 font-mono text-[10px] text-zinc-500 dark:border-zinc-900 dark:bg-zinc-950 dark:text-zinc-400"
                      >
                        {t}
                      </span>
                    )
                  )}
                </div>
              </Card>
            </BentoGridItem>

            <BentoGridItem index={1} className="md:col-span-1 lg:col-span-2">
              <Card className="group flex h-full flex-col justify-between p-8 md:p-10">
                <div className="space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-100 pb-4 dark:border-zinc-900/80">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-500 dark:text-indigo-400">
                      Patented System
                    </span>
                    <Badge variant="outline" className="text-indigo-600 dark:border-indigo-500/30 dark:text-indigo-300">2nd Prize Avishkar</Badge>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold tracking-tight leading-[1.1] text-zinc-950 transition-colors group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-300 md:text-2xl">
                      UAV Flood Mapping System
                    </h4>
                    <p className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                      Patent: No. 202523064402 A
                    </p>
                    <p className="pt-1 text-sm font-normal leading-relaxed text-zinc-600 dark:text-zinc-400">
                      Designed an AI-enabled UAV system for real-time flood monitoring.
                      Secured 2nd Prize at SGBAU University Level Avishkar Competition.
                    </p>
                    <div className="flex flex-wrap items-center gap-3 pt-3">
                      <a href="https://drive.google.com/file/d/1Cjz4lhJ7I8XXd_FkwSzNKlvWH71dsIOE/view" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 shadow-sm transition-colors hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 dark:border-zinc-800 dark:bg-zinc-950/50 dark:text-zinc-300 dark:hover:border-indigo-900/50 dark:hover:bg-indigo-950/30 dark:hover:text-indigo-400">
                        <ArrowUpRight className="h-3.5 w-3.5" />
                        Project Website
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-1.5 border-t border-zinc-100 pt-6 dark:border-zinc-900/80">
                  {["CNNs", "LSTMs", "ArcGIS"].map((t) => (
                    <span
                      key={t}
                      className="rounded border border-indigo-200 bg-indigo-50 px-2 py-0.5 font-mono text-[10px] text-indigo-500 dark:border-indigo-900/40 dark:bg-indigo-950/20 dark:text-indigo-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Card>
            </BentoGridItem>

            <BentoGridItem index={2} className="md:col-span-3 lg:col-span-4">
              <Card className="group flex h-full flex-col justify-between p-8 md:p-10">
                <div className="space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-100 pb-4 dark:border-zinc-900/80">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                      GeoSpatial AI Challenge
                    </span>
                    <Badge variant="outline">ISRO Dataset</Badge>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold tracking-tight leading-[1.1] text-zinc-950 transition-colors group-hover:text-zinc-600 dark:text-white dark:group-hover:text-zinc-300 md:text-2xl">
                      Solar Panels Detection
                    </h4>
                    <p className="pt-1 text-sm font-normal leading-relaxed text-zinc-600 dark:text-zinc-400">
                      Developed high-precision models to detect solar parks from ISRO&apos;s
                      LISS4 sensor images for advanced environmental and asset mapping
                      pipelines.
                    </p>
                    <div className="flex flex-wrap items-center gap-3 pt-3">
                      <a href="https://github.com/Saurabhkg03/Solarnet" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 shadow-sm transition-colors hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-950/50 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:bg-zinc-900 dark:hover:text-white">
                        <GithubIcon className="h-3.5 w-3.5" />
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-1.5 border-t border-zinc-100 pt-6 dark:border-zinc-900/80">
                  {["TensorFlow", "Python", "CNNs", "U-Net", "QGIS"].map((t) => (
                    <span
                      key={t}
                      className="rounded border border-zinc-200 bg-zinc-50 px-2 py-0.5 font-mono text-[10px] text-zinc-500 dark:border-zinc-900 dark:bg-zinc-950 dark:text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Card>
            </BentoGridItem>
          </BentoGrid>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="space-y-6">
          <div className="flex items-center justify-between border-b border-zinc-400 pb-3 dark:border-zinc-700">
            <h3 className="border border-zinc-200 bg-zinc-100 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
              04 / Experience
            </h3>
            <span className="text-xs font-medium uppercase tracking-tight text-zinc-500 dark:text-zinc-400">
              Career History & Roles
            </span>
          </div>
          <div className="divide-y divide-zinc-300 border-t border-zinc-400 dark:border-zinc-700 dark:divide-zinc-700/80">
            {[
              {
                period: "Mar 2025",
                type: "Internship",
                company: "Apexa iQ",
                role: "DevOps & Automation Intern",
                roleColor: "text-cyan-600 dark:text-cyan-400",
                desc: "Optimized operational workflows, developed Python automation scripts using Pytest and Selenium, and containerized applications using Docker.",
                extra: null,
              },
              {
                period: "Apr 2023 - Feb 2024",
                type: "Internship",
                company: "OneSmarter Inc.",
                role: "AI & ML Intern",
                roleColor: "text-indigo-600 dark:text-indigo-400",
                desc: "Led a cross-functional team of 4 to deliver AI-driven solutions. Utilized NLP techniques and LLMs for data analysis and custom chatbots.",
                extra: (
                  <span
                    key="tag"
                    className="rounded border border-amber-200 bg-amber-50 px-1.5 py-0.5 text-xs font-medium text-amber-700 dark:border-amber-900/40 dark:bg-amber-950/20 dark:text-amber-400"
                  >
                    Led Team of 4
                  </span>
                ),
              },
              {
                period: "Aug 2023 - Sep 2025",
                type: "Leadership",
                company: "Google Developer Student Clubs",
                role: "AI/ML Lead",
                roleColor: "text-zinc-600 dark:text-zinc-300",
                desc: "Delivered workshops for 60+ students. Represented team at Google Solution Challenge at T-Hub.",
                extra: null,
              },
            ].map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="group flex flex-col justify-between gap-4 rounded-lg px-3 py-6 transition-colors hover:bg-zinc-50 md:flex-row md:items-start md:py-8 dark:hover:bg-[#101013]"
              >
                <div className="w-52 shrink-0">
                  <span className="block text-xs font-mono uppercase text-zinc-500 dark:text-zinc-400">
                    {exp.period}
                  </span>
                  <span className="mt-1 block text-[11px] font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    {exp.type}
                  </span>
                </div>
                <div className="max-w-3xl flex-1 space-y-1.5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="text-sm font-semibold tracking-tight text-zinc-950 dark:text-white md:text-base">
                      {exp.company}
                    </h4>
                    <div className="flex items-center gap-2">
                      {exp.extra}
                      <span className={`text-sm font-medium ${exp.roleColor}`}>{exp.role}</span>
                    </div>
                  </div>
                  <p className="text-sm font-normal leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {exp.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-zinc-400 pb-3 dark:border-zinc-700">
            <h3 className="border border-zinc-200 bg-zinc-100 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
              05 / Education
            </h3>
            <span className="text-xs font-medium uppercase text-zinc-500 dark:text-zinc-400">
              Academic Foundations
            </span>
          </div>
          <div className="flex flex-col justify-between gap-6 rounded-xl border border-zinc-200 bg-white p-8 md:flex-row md:items-center dark:border-zinc-800/80 dark:bg-zinc-900/30">
            <div className="space-y-1">
              <span className="block text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Undergraduate Degree
              </span>
              <h4 className="text-base font-semibold tracking-tight leading-[1.1] text-zinc-950 dark:text-white md:text-lg">
                Shri Sant Gajanan Maharaj College of Engineering, Shegaon
              </h4>
              <p className="pt-0.5 text-sm font-normal leading-relaxed text-zinc-500 dark:text-zinc-400">
                Bachelor of Engineering, Electronics and Telecommunication
              </p>
            </div>
            <div className="shrink-0 border-t border-zinc-200 pt-4 md:border-l md:border-t-0 md:pl-8 md:pt-0 md:text-right dark:border-zinc-800">
              <span className="block text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Expected Graduation
              </span>
              <span className="block pt-0.5 text-sm font-bold text-emerald-600 dark:text-emerald-400">
                May 2026
              </span>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="mt-24 border-t border-zinc-400 bg-zinc-950 text-zinc-100 dark:border-zinc-800">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1.45fr)_minmax(320px,1fr)] lg:gap-20">
            <div className="space-y-6">
              <p className="text-lg font-mono uppercase tracking-[0.24em] text-zinc-500">
                Get in touch
              </p>
              <h2 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Let&apos;s build thoughtful AI products together.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
                I&apos;m open to full-stack AI engineering roles, product-focused
                internships, and collaborations where strong ML systems need equally
                strong user-facing execution.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
              <div className="space-y-3 border-b border-zinc-800 pb-6 sm:border-b-0 sm:pb-0 lg:border-b lg:pb-6">
                <p className="text-sm font-semibold text-zinc-500">Email</p>
                <a
                  href="mailto:saurabhkg36@gmail.com"
                  className="inline-flex items-center gap-2 text-2xl font-semibold text-white hover:opacity-100"
                >
                  saurabhkg36@gmail.com
                  <ArrowUpRight className="h-4 w-4 text-zinc-500" />
                </a>
              </div>

              <div className="space-y-3 border-b border-zinc-800 pb-6 sm:border-b-0 sm:pb-0 lg:border-b lg:pb-6">
                <p className="text-sm font-semibold text-zinc-500">Resume Quick View</p>
                <a
                  href="/saurabh-gaikwad-resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-2xl font-semibold text-white hover:opacity-100"
                >
                  Open Resume
                  <FileText className="h-5 w-5 text-zinc-500" />
                </a>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-semibold text-zinc-500">Elsewhere</p>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://github.com/Saurabhkg03"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="grid h-11 w-11 place-items-center rounded-full bg-violet-100 text-violet-950 transition-all duration-200 hover:bg-violet-200 hover:scale-110 hover:rotate-6 hover:opacity-100"
                  >
                    <GithubIcon className="h-4 w-4" />
                  </a>
                  <a
                    href="https://linkedin.com/in/saurabh-gaikwad-605a70228"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="grid h-11 w-11 place-items-center rounded-full bg-sky-100 text-sky-950 transition-all duration-200 hover:bg-sky-200 hover:scale-110 hover:-rotate-6 hover:opacity-100"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                  </a>
                  <a
                    href="https://x.com/saurabh_exe"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X"
                    className="grid h-11 w-11 place-items-center rounded-full bg-zinc-100 text-zinc-950 transition-all duration-200 hover:bg-zinc-200 hover:scale-110 hover:rotate-6 hover:opacity-100"
                  >
                    <XIcon className="h-4 w-4" />
                  </a>
                  <a
                    href="mailto:saurabhkg36@gmail.com"
                    aria-label="Email"
                    className="grid h-11 w-11 place-items-center rounded-full bg-rose-100 text-rose-950 transition-all duration-200 hover:bg-rose-200 hover:scale-110 hover:-rotate-6 hover:opacity-100"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 border-t border-zinc-800 pt-6">
            <div className="flex flex-col gap-3 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
              <p>© 2026 Saurabh Gaikwad</p>
              <p className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                Maharashtra, India
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
