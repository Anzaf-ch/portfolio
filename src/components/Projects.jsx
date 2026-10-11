import { ArrowUpRight, ExternalLink, Layers } from 'lucide-react'
import { projects } from '../data/projects.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

function ProjectCover({ project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`Aperçu du projet ${project.name}`}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    )
  }

  return (
    <div className={`relative h-full w-full bg-gradient-to-br ${project.gradient}`}>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"
      />
      <div className="absolute inset-x-0 top-0 flex items-center gap-1.5 border-b border-white/5 bg-black/25 px-4 py-2.5 backdrop-blur-sm">
        <span className="h-2 w-2 rounded-full bg-rose-400/70" />
        <span className="h-2 w-2 rounded-full bg-amber-400/70" />
        <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
        <span className="ml-3 truncate font-mono text-[0.65rem] text-white/40">
          {project.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.app
        </span>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 pt-8">
        <span className="font-display text-4xl font-extrabold tracking-tight text-white/90 sm:text-5xl">
          {project.name
            .split(' ')
            .slice(0, 2)
            .map((word) => word[0])
            .join('')}
        </span>
        <span className="font-mono text-xs tracking-widest text-white/50 uppercase">
          {project.category}
        </span>
      </div>
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/40 transition-all duration-400 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-card">
      <div className="relative aspect-video overflow-hidden border-b border-border">
        <ProjectCover project={project} />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-display text-lg font-semibold text-ink">{project.name}</h3>
          <span className="shrink-0 rounded-full border border-border bg-base/50 px-2.5 py-1 font-mono text-[0.6rem] tracking-wide text-faint uppercase">
            {project.tagline}
          </span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>

        <ul className="mt-4 space-y-2">
          {project.highlights.map((point) => (
            <li key={point} className="flex items-start gap-2 text-sm text-muted">
              <Layers size={14} className="mt-1 shrink-0 text-accent" />
              {point}
            </li>
          ))}
        </ul>

        {project.stack.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-border bg-base/50 px-2.5 py-1 font-mono text-[0.65rem] text-muted"
              >
                {tech}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6 flex-1" />

        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="group/btn inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-base/50 px-5 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:border-accent/60 hover:bg-accent/10 hover:text-accent"
        >
          <ExternalLink size={16} />
          Voir le projet
          <ArrowUpRight
            size={15}
            className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
          />
        </a>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section
      id="projets"
      className="relative border-t border-border/70 px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Projets"
            title="Une sélection de mes réalisations"
            description="Des applications web concrètes, pensées pour répondre à des besoins réels."
          />
          <Reveal delay={0.1}>
            <span className="font-mono text-sm text-faint">
              0{projects.length} projets présentés
            </span>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.08} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
