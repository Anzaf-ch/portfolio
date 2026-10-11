import { BadgeCheck, GraduationCap, Mail, MapPin, Sparkles } from 'lucide-react'
import { profile } from '../data/profile.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

const infoRows = [
  { Icon: GraduationCap, label: 'Statut', value: profile.status },
  { Icon: MapPin, label: 'Localisation', value: profile.location },
  { Icon: Sparkles, label: 'Disponibilité', value: profile.availability },
]

export default function About() {
  return (
    <section id="a-propos" className="relative border-t border-border/70 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow="À propos"
          title="Concevoir des expériences web utiles et soignées"
          description="Un profil qui allie curiosité technique et souci du détail, au service de projets concrets."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <div className="space-y-5">
              {profile.about.map((paragraph, index) => (
                <Reveal key={index} delay={index * 0.06}>
                  <p className="text-base leading-relaxed text-muted sm:text-lg">{paragraph}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.18}>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {profile.focus.map((focus) => (
                  <li
                    key={focus}
                    className="flex items-start gap-3 rounded-xl border border-border bg-surface/50 px-4 py-3 text-sm text-ink"
                  >
                    <BadgeCheck size={18} className="mt-0.5 shrink-0 text-accent" />
                    {focus}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="card-surface h-full rounded-2xl p-6 shadow-card sm:p-8">
              <div className="flex items-center gap-4">
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-accent/25 to-accent-2/10 font-display text-xl font-bold text-accent">
                  AO
                </span>
                <div>
                  <p className="font-display text-lg font-semibold text-ink">{profile.name}</p>
                  <p className="text-sm text-muted">{profile.title}</p>
                </div>
              </div>

              <div className="mt-7 space-y-4 border-t border-border pt-6">
                {infoRows.map(({ Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border bg-base/60 text-accent">
                      <Icon size={16} />
                    </span>
                    <div>
                      <p className="font-mono text-[0.65rem] tracking-widest text-faint uppercase">
                        {label}
                      </p>
                      <p className="text-sm text-ink">{value}</p>
                    </div>
                  </div>
                ))}
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-start gap-3 rounded-lg transition-colors hover:text-accent"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border bg-base/60 text-accent">
                    <Mail size={16} />
                  </span>
                  <div>
                    <p className="font-mono text-[0.65rem] tracking-widest text-faint uppercase">
                      Email
                    </p>
                    <p className="text-sm break-all">{profile.email}</p>
                  </div>
                </a>
              </div>

              <div className="mt-7 grid grid-cols-3 gap-3 border-t border-border pt-6">
                {profile.stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="font-display text-2xl font-bold text-accent">{stat.value}</p>
                    <p className="mt-1 text-[0.7rem] leading-tight text-faint">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
