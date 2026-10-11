import { skillGroups } from '../data/skills.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function Skills() {
  return (
    <section
      id="competences"
      className="relative border-t border-border/70 px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow="Compétences"
          title="Les technologies que j'utilise"
          description="Outils et technologies sur lesquels je m'appuie pour construire des applications web complètes."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group, groupIndex) => (
            <Reveal key={group.title} delay={groupIndex * 0.08}>
              <article className="group h-full rounded-2xl border border-border bg-surface/40 p-6 transition-colors duration-300 hover:border-accent/40 hover:bg-surface/70">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-base/60 font-mono text-sm text-accent">
                    {String(groupIndex + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-ink">{group.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted">{group.description}</p>

                <ul className="mt-6 flex flex-wrap gap-2.5">
                  {group.items.map((skill) => {
                    const Icon = skill.icon
                    return (
                      <li
                        key={skill.name}
                        className="flex items-center gap-2 rounded-lg border border-border bg-base/50 px-3 py-2 text-sm text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50"
                      >
                        <Icon size={17} style={{ color: skill.color }} aria-hidden="true" />
                        {skill.name}
                      </li>
                    )
                  })}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
