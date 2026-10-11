import { motion } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'
import { profile } from '../data/profile.js'
import SocialLinks from './SocialLinks.jsx'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <section id="accueil" className="relative isolate overflow-hidden px-5 pt-28 pb-20 sm:px-8 sm:pt-36 sm:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]"
      />
      <div
        aria-hidden="true"
        className="animate-float pointer-events-none absolute -top-32 left-1/2 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[150px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-44 -right-24 -z-10 h-80 w-80 rounded-full bg-accent-2/10 blur-[130px]"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto flex w-full max-w-4xl flex-col items-center text-center"
      >
        <motion.span
          variants={item}
          className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/70 px-4 py-2 text-sm text-muted backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {profile.availability}
        </motion.span>

        <motion.p
          variants={item}
          className="mt-8 font-mono text-sm tracking-[0.3em] text-accent uppercase"
        >
          Bonjour, je suis
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-3 text-[2.3rem] leading-[1.05] font-bold break-words sm:text-6xl md:text-7xl"
        >
          <span className="text-gradient">{profile.name}</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-5 text-lg font-medium text-ink sm:text-xl"
        >
          {profile.role}
          <span className="mx-2 hidden text-faint sm:inline">•</span>
          <span className="mt-1 block text-muted sm:mt-0 sm:inline">{profile.subRole}</span>
        </motion.p>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-9 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row"
        >
          <button
            type="button"
            onClick={() => scrollTo('projets')}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-base transition-all duration-300 hover:bg-accent-strong hover:shadow-glow sm:w-auto"
          >
            Découvrir mes projets
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
          <button
            type="button"
            onClick={() => scrollTo('contact')}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-surface/60 px-6 py-3.5 text-sm font-semibold text-ink transition-colors duration-300 hover:border-accent/60 hover:text-accent sm:w-auto"
          >
            Me contacter
          </button>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:gap-8"
        >
          <SocialLinks />
          <span className="flex items-center gap-2 text-sm text-faint">
            <MapPin size={15} />
            {profile.location}
          </span>
        </motion.div>
      </motion.div>
    </section>
  )
}
