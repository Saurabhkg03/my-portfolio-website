"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

const projects = [
  {
    title: "NeuroFusion-BCI",
    category: "Brain-Computer Interface",
    badge: "Accuracy: 96.88%",
    role: "Lead AI Engineer",
    description: "Proposed a novel Hybrid Feature Fusion methodology and engineered a sequential BiGRU + 1D CNN deep learning architecture to achieve robust spatial and temporal EEG pattern recognition for 4-class motor imagery tasks.",
    github: "https://github.com/Saurabhkg03/NeuroFusion-BCI",
    tags: ["Python", "TensorFlow", "Signal Processing", "Hjorth Parameters", "BiGRU", "CNNs"],
    image: "/neurofusion.png",
    keyContributions: [
      "Engineered sequential BiGRU + 1D CNN architectures, capturing complex temporal dynamics and spatial patterns of EEG signals.",
      "Developed a custom signal processing pipeline leveraging Hjorth parameters and bandpass filtering to maximize signal-to-noise ratio.",
      "Achieved 96.88% classification accuracy across 4-class motor imagery tasks, outperforming baseline models by 8.4%."
    ],
    group: "AI & Machine Learning"
  },
  {
    title: "Saraav",
    category: "EdTech Platform",
    badge: "Scaled: 500+ Users",
    role: "Creator & Lead Developer",
    description: "Launched a full-stack platform scaling to 500+ users. Implemented AI-driven content generation using Python scripts to automate study material creation. Managed the entire software development lifecycle (SDLC).",
    github: "https://github.com/Saurabhkg03/saraav",
    website: "https://saraav.in",
    tags: ["React.js", "TypeScript", "Firebase", "Tailwind CSS", "Python"],
    image: "/saraav.png",
    keyContributions: [
      "Designed and deployed the entire database schema and cloud functions using Firebase Firestore and Auth.",
      "Developed an automated Python backend that leverages LLMs to generate high-quality practice questions and revision notes.",
      "Successfully scaled the web app to over 500 active registered users with real-time analytics and user progress tracking."
    ],
    group: "Web & Full-Stack"
  },
  {
    title: "UAV Flood Mapping System",
    category: "Patented System",
    badge: "2nd Prize Avishkar",
    role: "Patent: No. 202523064402 A",
    description: "Designed an AI-enabled UAV system for real-time flood monitoring. Secured 2nd Prize at SGBAU University Level Avishkar Competition.",
    website: "https://drive.google.com/file/d/1Cjz4lhJ7I8XXd_FkwSzNKlvWH71dsIOE/view",
    tags: ["CNNs", "LSTMs", "ArcGIS"],
    image: "/flood.jpg",
    keyContributions: [
      "Co-drafted and filed Indian Patent No. 202523064402 A for an integrated UAV-based aerial monitoring system.",
      "Trained custom semantic segmentation models (CNN-LSTM hybrids) to classify flooded regions in real-time from video feeds.",
      "Integrated GIS datasets and drone coordinates into a unified mapping dashboard for emergency response dispatchers."
    ],
    group: "Research & Patents"
  },
  {
    title: "Solar Panels Detection",
    category: "GeoSpatial AI Challenge",
    badge: "ISRO Dataset",
    role: "AI/ML Engineer",
    description: "Developed high-precision models to detect solar parks from ISRO's LISS4 sensor images for advanced environmental and asset mapping pipelines.",
    github: "https://github.com/Saurabhkg03/Solarnet",
    tags: ["TensorFlow", "Python", "CNNs", "U-Net", "QGIS"],
    image: "/solar.png",
    keyContributions: [
      "Built semantic segmentation pipelines using U-Net architectures to detect large-scale solar arrays from high-resolution satellite imagery.",
      "Optimized dataset preprocessing for ISRO's LISS4 multispectral sensor data, handle class imbalance via focal loss functions.",
      "Exported model outputs into geospatial vector formats compatible with QGIS and ArcGIS pipelines."
    ],
    group: "AI & Machine Learning"
  },
  {
    title: "Amazon Reviews Scraper & Analysis",
    category: "Data Engineering",
    badge: "Web Scraping",
    role: "Backend Engineer",
    description: "Built a scalable web scraping engine to extract product reviews and analyze customer sentiment. Conducted data analysis utilizing LLMs (Claude/ChatGPT) to generate comprehensive product insights.",
    github: "#",
    tags: ["Python", "Docker", "Splash JS", "Selenium", "LLMs"],
    image: "/amazon-reviews.png",
    keyContributions: [
      "Developed modular scraping agents using Selenium and Scrapy with Javascript rendering bypass via Splash JS.",
      "Built clean sentiment aggregation routines leveraging OpenAI and Anthropic API pipelines to summarize qualitative review trends.",
      "Containerized scraping engines in Docker, allowing orchestrations across multiple proxy networks to bypass IP bans."
    ],
    group: "Data & Automation"
  }
]

export default function ProjectsPage() {
  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 60, damping: 15 } },
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#070709] text-zinc-900 dark:text-zinc-100 antialiased selection:bg-cyan-500 selection:text-white pb-24">
      {/* Decorative gradient background highlights */}
      <div className="absolute top-0 left-1/4 w-[40rem] h-[40rem] rounded-full bg-cyan-500/5 dark:bg-cyan-400/2 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[35rem] h-[35rem] rounded-full bg-indigo-500/5 dark:bg-indigo-400/2 blur-3xl pointer-events-none" />

      <main className="mx-auto max-w-6xl px-6 pt-6 pb-12 md:pt-10 md:pb-24 space-y-8 relative z-10">
        
        {/* Navigation & Header */}
        <div className="space-y-6">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-px w-8 bg-cyan-500" />
              
            </div>
            <h1 className="text-3xl font-bold tracking-tighter leading-[1.1] text-zinc-950 dark:text-white sm:text-4xl md:text-5xl">
              All Projects<span className="text-cyan-500">.</span>
            </h1>
            <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed">
              A comprehensive directory of my engineering projects, AI model deployments, patents, and software explorations.
            </p>
          </div>
        </div>

        {/* Redesigned Project List (Alternating Side-by-Side Cards) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="space-y-16 md:space-y-24 pt-4 md:pt-8"
        >
          <AnimatePresence mode="popLayout">
            {projects.map((project, idx) => {
              return (
                <motion.div
                  layout
                  key={project.title}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                    {/* Project Text Panel */}
                    <div className="lg:col-span-6 space-y-5">
                      <div className="space-y-4">
                        {/* Top Badges / Metadata */}
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-semibold">
                            {project.category}
                          </span>
                          <span className="text-zinc-300 dark:text-zinc-700">•</span>
                          <Badge 
                            variant={
                              project.badge.includes("Accuracy") ? "neon" : 
                              project.badge.includes("Scaled") ? "secondary" : "outline"
                            } 
                            className="px-2.5 py-0.5 text-xs font-semibold"
                          >
                            {project.badge}
                          </Badge>
                        </div>

                        {/* Title & Role */}
                        <div className="space-y-1">
                          <h3 className="text-2xl md:text-3xl font-bold tracking-tighter text-zinc-950 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-200">
                            {project.title}
                          </h3>
                          <p className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-medium">
                            {project.role}
                          </p>
                        </div>

                        {/* Core Description */}
                        <p className="text-base font-normal leading-relaxed text-zinc-650 dark:text-zinc-300">
                          {project.description}
                        </p>
                      </div>

                      {/* Extended Key Contributions */}
                      <div className="space-y-3 bg-zinc-100/50 dark:bg-zinc-900/30 p-5 rounded-2xl border border-zinc-200/30 dark:border-zinc-800/40">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-bold">
                          Key Accomplishments & Stack Integration
                        </h4>
                        <ul className="space-y-2.5">
                          {project.keyContributions.map((contribution, index) => (
                            <li key={index} className="flex items-start gap-2.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                              <CheckCircle2 className="h-4 w-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                              <span>{contribution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technology Stack Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-0.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-lg border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/60 px-3 py-1 font-mono text-xs text-zinc-700 dark:text-zinc-300 shadow-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Link CTAs */}
                      <div className="flex flex-wrap items-center gap-3 pt-1">
                        {project.github && project.github !== "#" && (
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center gap-2 rounded-full border border-zinc-200/80 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-850 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:bg-zinc-850 transition-all duration-200 cursor-pointer"
                          >
                            <GithubIcon className="h-4 w-4" />
                            Source Repository
                          </a>
                        )}
                        {project.website && (
                          <a 
                            href={project.website} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center gap-2 rounded-full border border-cyan-200/80 bg-cyan-50/50 hover:bg-cyan-50 dark:border-cyan-900/50 dark:bg-cyan-950/20 dark:hover:bg-cyan-950/40 px-4 py-2 text-sm font-semibold text-cyan-700 dark:text-cyan-400 transition-all duration-200 cursor-pointer"
                          >
                            <ArrowUpRight className="h-4 w-4" />
                            Live Project
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Project Image Panel */}
                    <div className="lg:col-span-6 w-full">
                      <div className="relative w-full aspect-video overflow-hidden rounded-2xl border border-zinc-200/60 dark:border-zinc-800/80 shadow-[0_12px_36px_rgba(0,0,0,0.04)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.2)] bg-white dark:bg-[#0c0c0f]">
                        <Image
                          src={project.image}
                          alt={`${project.title} Interface / Architecture`}
                          fill
                          sizes="(max-w-1024px) 100vw, 50vw"
                          className="object-contain object-center"
                          priority={idx === 0}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {/* Footer Area Accent */}
        <div className="pt-20 text-center text-xs text-zinc-400 dark:text-zinc-600 font-mono">
          End of Project Directory • Back to home to get in touch
        </div>

      </main>
    </div>
  )
}
