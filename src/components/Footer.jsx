import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Mail, href: 'mailto:alex@example.com', label: 'Email' },
]

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 dark:bg-black border-t border-slate-800">
      <div className="section-container py-10 md:py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault()
                if (window.lenis) window.lenis.scrollTo('#about')
                else document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="text-xl font-bold text-white tracking-tight"
            >
              Alex<span className="text-primary-400">.</span>
            </a>
            <p className="mt-1 text-sm text-slate-400">
              Building things that matter.
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <p>
            &copy; {currentYear} Alex Morgan. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Crafted with <Heart size={14} className="text-red-500 fill-red-500" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer