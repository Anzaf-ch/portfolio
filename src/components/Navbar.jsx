import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navLinks } from '../data/nav.js'
import { profile } from '../data/profile.js'
import { useActiveSection } from '../hooks/useActiveSection.js'

const sectionIds = navLinks.map((link) => link.id)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleNavigate = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-border/80 bg-base/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <button
          type="button"
          onClick={() => handleNavigate('accueil')}
          className="group flex items-center gap-3"
          aria-label="Retour à l'accueil"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-border bg-surface text-sm font-bold text-accent transition-colors group-hover:border-accent/60">
            AO
          </span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-display text-sm font-semibold text-ink">ANZAF DINE</span>
            <span className="font-mono text-[0.65rem] tracking-[0.2em] text-faint uppercase">
              Dev Web
            </span>
          </span>
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.id
            return (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => handleNavigate(link.id)}
                  className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-ink' : 'text-muted hover:text-ink'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-2.5 -bottom-px h-0.5 rounded-full bg-accent"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-lg border border-border bg-surface/60 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent/60 hover:text-accent md:inline-flex"
          >
            GitHub
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-surface/60 text-ink md:hidden"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border bg-base/95 backdrop-blur-xl md:hidden"
          >
            <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => handleNavigate(link.id)}
                    className={`w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${
                      active === link.id
                        ? 'bg-accent/10 text-accent'
                        : 'text-muted hover:bg-surface hover:text-ink'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="mt-1">
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-lg border border-border px-4 py-3 text-center text-sm font-medium text-ink"
                >
                  Voir mon GitHub
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
