import { motion } from 'framer-motion'
import {
  Code2,
  FileCode2,
  Globe,
  Palette,
  Sparkles,
  Layout,
  Server,
  Terminal,
  Database,
  Share2,
  Webhook,
  Container,
  GitBranch,
  PenTool,
  Cloud,
  Rocket,
  CheckCircle,
  Repeat,
} from 'lucide-react'
import { skillsData } from '../data/skills'

const iconMap = {
  Code2, FileCode2, Globe, Palette, Sparkles, Layout,
  Server, Terminal, Database, Share2, Webhook, Container,
  GitBranch, PenTool, Cloud, Rocket, CheckCircle, Repeat,
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
}

function Skills() {
  return (
    <section
      id="skills"
      className="py-20 md:py-28 bg-white dark:bg-slate-900"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-18"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wide uppercase text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 rounded-full mb-4">
            My Toolkit
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            Skills & Technologies
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            A curated stack of technologies I use to build robust, scalable, and beautiful applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {skillsData.map((category) => (
            <motion.div
              key={category.category}
              variants={cardVariants}
              className="group bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 md:p-8 border border-slate-100 dark:border-slate-700/50 hover:border-primary-200 dark:hover:border-primary-800 transition-all hover:shadow-lg hover:shadow-primary-500/5"
            >
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-2">
                <span className="w-8 h-1 rounded-full bg-primary-500" />
                {category.category}
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2.5"
              >
                {category.items.map((skill) => {
                  const Icon = iconMap[skill.icon] || Code2
                  return (
                    <motion.span
                      key={skill.name}
                      variants={badgeVariants}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-700/50 rounded-xl border border-slate-200 dark:border-slate-600 hover:border-primary-300 dark:hover:border-primary-600 hover:text-primary-700 dark:hover:text-primary-300 transition-colors cursor-default shadow-sm"
                    >
                      <Icon size={15} className="text-primary-500 dark:text-primary-400" />
                      {skill.name}
                    </motion.span>
                  )
                })}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills