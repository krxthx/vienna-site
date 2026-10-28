import { motion } from 'motion/react'
import { PROBLEMS } from '../content/site'
import { LeaderboardGraphic } from './leaderboard-graphic'
import { Section } from './section'

export function Problem() {
  return (
    <Section
      id="problem"
      eyebrow="The problem"
      title={<>Leaderboards do not tell you what you need to know.</>}
      lead="A model is only one part of the system. Public rankings say little about the infrastructure, harness and data that decide how it behaves in your business."
    >
      <LeaderboardGraphic />
      <ol className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {PROBLEMS.map((p, i) => (
          <motion.li
            key={p.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-ink-950 p-8"
          >
            <span className="font-mono text-sm text-signal">0{i + 1}</span>
            <h3 className="mt-6 text-xl font-medium">{p.title}</h3>
            <p className="mt-3 leading-relaxed text-mist">{p.body}</p>
          </motion.li>
        ))}
        <li className="flex items-center bg-ink-900 p-8 text-lg font-normal leading-snug text-snow">
          Evidence from your own workloads is the only benchmark that counts.
        </li>
      </ol>
    </Section>
  )
}
