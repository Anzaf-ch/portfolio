import { ArrowUpRight, Mail } from 'lucide-react'
import { FaFacebookF, FaGithub, FaWhatsapp } from 'react-icons/fa6'
import { profile } from '../data/profile.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import SocialLinks from './SocialLinks.jsx'

const channels = [
  {
    key: 'email',
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: Mail,
    external: false,
  },
  {
    key: 'whatsapp',
    label: 'WhatsApp',
    value: profile.whatsapp.display,
    href: profile.whatsapp.link,
    Icon: FaWhatsapp,
    external: true,
  },
  {
    key: 'github',
    label: 'GitHub',
    value: 'Anzaf-ch',
    href: profile.socials.github,
    Icon: FaGithub,
    external: true,
  },
  {
    key: 'facebook',
    label: 'Facebook',
    value: profile.socials.facebookLabel,
    href: profile.socials.facebook,
    Icon: FaFacebookF,
    external: true,
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative border-t border-border/70 px-5 py-20 sm:px-8 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]"
      />

      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Discutons de votre projet"
              description="Une idée, une opportunité de stage ou une collaboration ? Je serais ravi d'échanger avec vous."
            />

            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={profile.whatsapp.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-base transition-all duration-300 hover:bg-accent-strong hover:shadow-glow"
                >
                  <FaWhatsapp size={18} />
                  Discuter sur WhatsApp
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface/60 px-6 py-3.5 text-sm font-semibold text-ink transition-colors duration-300 hover:border-accent/60 hover:text-accent"
                >
                  <Mail size={17} />
                  Envoyer un email
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-9">
                <p className="font-mono text-[0.65rem] tracking-widest text-faint uppercase">
                  Retrouvez-moi
                </p>
                <SocialLinks className="mt-4" />
              </div>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {channels.map(({ key, label, value, href, Icon, external }, index) => (
              <Reveal key={key} delay={index * 0.07} className="h-full">
                <a
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noreferrer' : undefined}
                  className="group flex h-full items-start gap-4 rounded-2xl border border-border bg-surface/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-surface/70"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border bg-base/60 text-lg text-accent">
                    <Icon />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[0.65rem] tracking-widest text-faint uppercase">
                      {label}
                    </p>
                    <p className="mt-1 truncate text-sm font-medium text-ink group-hover:text-accent">
                      {value}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="ml-auto shrink-0 text-faint transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
