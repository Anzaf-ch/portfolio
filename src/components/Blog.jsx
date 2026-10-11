import { AnimatePresence, motion } from 'framer-motion'
import { Clock, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { posts } from '../data/blog.js'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

function BlogModal({ post, onClose }) {
  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[70] flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={post.title}
    >
      <motion.article
        initial={{ opacity: 0, y: 48, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 48, scale: 0.98 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(event) => event.stopPropagation()}
        className="flex max-h-[92dvh] w-full max-w-2xl flex-col rounded-t-3xl border border-border bg-surface shadow-card sm:rounded-3xl"
      >
        <div className="flex items-start justify-between gap-4 border-b border-border p-6 sm:p-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-base/60 px-3 py-1 font-mono text-xs text-accent">
              {post.category}
            </span>
            <h3 className="mt-3 font-display text-xl font-semibold text-ink sm:text-2xl">
              {post.title}
            </h3>
            <div className="mt-3 flex items-center gap-4 text-xs text-faint">
              <span>{post.date}</span>
              <span className="flex items-center gap-1.5">
                <Clock size={13} />
                {post.readTime} min de lecture
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer l'article"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-base/60 text-muted transition-colors hover:border-accent/60 hover:text-accent"
          >
            <X size={18} />
          </button>
        </div>

        <div className="overflow-y-auto p-6 sm:p-8">
          <div className="space-y-5">
            {post.content.map((paragraph, index) => (
              <p key={index} className="text-[0.95rem] leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </div>

          <ul className="mt-7 flex flex-wrap gap-2 border-t border-border pt-6">
            {post.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-md border border-border bg-base/50 px-2.5 py-1 font-mono text-[0.65rem] text-muted"
              >
                #{tag}
              </li>
            ))}
          </ul>
        </div>
      </motion.article>
    </motion.div>
  )
}

export default function Blog() {
  const [selected, setSelected] = useState(null)

  return (
    <section
      id="blog"
      className="relative border-t border-border/70 px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Blog"
            title="Notes, partages et apprentissages"
            description="J'écris sur ce que je découvre : mes choix techniques, mes projets et mon parcours de développeur."
          />
          <Reveal delay={0.1}>
            <span className="font-mono text-sm text-faint">
              0{posts.length} articles publiés
            </span>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal key={post.id} delay={index * 0.08} className="h-full">
              <button
                type="button"
                onClick={() => setSelected(post)}
                className="group flex h-full w-full flex-col rounded-2xl border border-border bg-surface/40 p-6 text-left transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-card"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center rounded-full border border-border bg-base/60 px-3 py-1 font-mono text-xs text-accent">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-faint">
                    <Clock size={13} />
                    {post.readTime} min
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg leading-snug font-semibold text-ink transition-colors group-hover:text-accent">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                <p className="mt-4 font-mono text-xs text-faint">{post.date}</p>
                <div className="mt-5 flex-1" />
                <ul className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-border bg-base/50 px-2.5 py-1 font-mono text-[0.65rem] text-muted"
                    >
                      #{tag}
                    </li>
                  ))}
                </ul>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <BlogModal post={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}