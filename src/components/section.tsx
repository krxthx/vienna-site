import { motion } from 'motion/react'
import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  eyebrow: string
  title: ReactNode
  lead?: string
  children: ReactNode
}

export function Section({ id, eyebrow, title, lead, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-line px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl"
        >
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-4 text-4xl font-normal leading-[1.1] tracking-tight sm:text-5xl">{title}</h2>
          {lead && <p className="mt-6 text-lg leading-relaxed text-mist">{lead}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  )
}
