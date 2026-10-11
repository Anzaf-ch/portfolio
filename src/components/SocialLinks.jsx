import { Mail } from 'lucide-react'
import { FaFacebookF, FaGithub, FaWhatsapp } from 'react-icons/fa6'
import { profile } from '../data/profile.js'

const socialItems = [
  { key: 'github', label: 'GitHub', href: profile.socials.github, Icon: FaGithub },
  {
    key: 'facebook',
    label: 'Facebook',
    href: profile.socials.facebook,
    Icon: FaFacebookF,
  },
  { key: 'whatsapp', label: 'WhatsApp', href: profile.whatsapp.link, Icon: FaWhatsapp },
  { key: 'email', label: 'Email', href: `mailto:${profile.email}`, Icon: Mail },
]

export default function SocialLinks({ items = socialItems, className = '' }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {items.map(({ key, label, href, Icon }) => (
        <li key={key}>
          <a
            href={href}
            target={href.startsWith('mailto:') ? undefined : '_blank'}
            rel="noreferrer"
            aria-label={label}
            title={label}
            className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-surface/70 text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent hover:shadow-glow"
          >
            <Icon size={18} />
          </a>
        </li>
      ))}
    </ul>
  )
}
