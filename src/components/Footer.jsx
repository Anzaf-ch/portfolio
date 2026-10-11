import { navLinks } from '../data/nav.js'
import { profile } from '../data/profile.js'
import SocialLinks from './SocialLinks.jsx'

const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  const year = CURRENT_YEAR

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <footer className="border-t border-border/70 px-5 py-14 sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <button
              type="button"
              onClick={() => scrollTo('accueil')}
              className="flex items-center gap-3"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-surface text-sm font-bold text-accent">
                AO
              </span>
              <span className="font-display text-base font-semibold text-ink">
                {profile.name}
              </span>
            </button>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {profile.title}. Toujours en apprentissage, toujours en construction.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollTo(link.id)}
                className="text-sm text-muted transition-colors hover:text-accent"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div>
            <p className="font-mono text-[0.65rem] tracking-widest text-faint uppercase">
              Suivez-moi
            </p>
            <SocialLinks className="mt-4" />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-faint">
            © {year} {profile.name}. Tous droits réservés.
          </p>
          <p className="font-mono text-xs text-faint">
            Conçu &amp; développé avec React, Vite &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
