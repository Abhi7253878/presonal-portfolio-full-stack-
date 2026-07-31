import { motion } from 'framer-motion'
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Download,
  ArrowDown,
  MapPin,
  Briefcase,
} from 'lucide-react'

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Mail, href: 'mailto:alex@example.com', label: 'Email' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

function Hero() {
  const scrollToContact = () => {
    if (window.lenis) {
      window.lenis.scrollTo('#contact', { offset: -80 })
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center pt-20 pb-12 md:pt-24 md:pb-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900"
    >
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 lg:gap-20"
        >
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <motion.div variants={itemVariants} className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 rounded-full border border-primary-100 dark:border-primary-800">
                <MapPin size={12} />
                San Francisco, CA
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-900/30 rounded-full border border-emerald-100 dark:border-emerald-800">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Open to work
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight"
            >
              Hi, I&apos;m{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-violet-500 dark:from-primary-400 dark:to-violet-400">
                Alex Morgan
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-4 text-lg md:text-xl text-slate-600 dark:text-slate-300 font-medium"
            >
              Full Stack Developer & UI Engineer
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mt-5 text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto md:mx-0 leading-relaxed"
            >
              I build fast, accessible, and delightful web experiences. With 5+ years of experience
              across the full stack, I specialize in React ecosystems, scalable APIs, and
              pixel-perfect interfaces that users love.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
            >
              {/* Resume download — pulls from public/resume.pdf */}
              <a
                href="/resume.pdf"
                download="Alex_Morgan_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-xl transition-all shadow-lg shadow-primary-600/20 hover:shadow-primary-600/30 hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
              >
                <Download size={18} />
                Download Resume
              </a>
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-700 rounded-xl transition-all hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
              >
                Contact Me
                <ArrowDown size={18} />
              </button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex items-center justify-center md:justify-start gap-4"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-2.5 rounded-xl text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-all hover:-translate-y-0.5 active:translate-y-0"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Profile Photo */}
          <motion.div
            variants={itemVariants}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-violet-500 rounded-3xl blur-2xl opacity-20 dark:opacity-30 scale-110" />
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden ring-4 ring-white dark:ring-slate-800 shadow-2xl">
                <img
                  src="/profile-photo.jpg"
                  alt="Alex Morgan - Full Stack Developer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80'
                  }}
                />
              </div>
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 bg-white dark:bg-slate-800 rounded-xl px-4 py-2 shadow-lg border border-slate-100 dark:border-slate-700 flex items-center gap-2"
              >
                <Briefcase size={16} className="text-primary-600 dark:text-primary-400" />
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">5+ Years Exp.</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-slate-300 dark:border-slate-600 flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero