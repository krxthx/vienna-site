import { motion } from 'motion/react'
import { LAYERS, PILLARS } from '../content/site'
import { BaselineGraphic } from './baseline-graphic'
import { LoopGraphic } from './loop-graphic'
import { ParamsGraphic } from './params-graphic'
import { Section } from './section'
import { StackGraphic } from './stack-graphic'

export function Approach() {
  return (
    <Section
      id="approach"
      eyebrow="The approach"
      title={<>From experimental benchmarks to workload-specific trade-offs.</>}
      lead="A model typically has around fifteen core parameters, plus hardware dependencies, that shape how it performs. Vienna maps them against three outcomes that matter."
    >
      <div className="mb-12 grid items-center gap-10 lg:grid-cols-2">
        <ParamsGraphic />
        <StackGraphic />
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {PILLARS.map((p) => (
          <div key={p.label} className="rounded-2xl border border-line p-7">
            <h3 className="font-mono text-sm uppercase tracking-[0.18em] text-signal">{p.label}</h3>
            <p className="mt-4 leading-relaxed text-mist">{p.metrics}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h3 className="text-2xl font-normal leading-snug">Four layers, tuned together.</h3>
          <div className="mt-8">
            <LoopGraphic />
          </div>
        </div>
        <ul className="divide-y divide-line border-y border-line">
          {LAYERS.map((l, i) => (
            <motion.li
              key={l.title}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="grid gap-2 py-6 sm:grid-cols-[3rem_1fr]"
            >
              <span className="font-mono text-sm text-signal-dim">0{i + 1}</span>
              <div>
                <h4 className="text-lg font-medium">{l.title}</h4>
                <p className="mt-2 leading-relaxed text-mist">{l.body}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
      <div className="mt-20 grid items-center gap-12 lg:grid-cols-2">
        <BaselineGraphic />
        <div>
          <h3 className="text-2xl font-normal leading-snug">Measured against a baseline, never assumed.</h3>
          <p className="mt-4 leading-relaxed text-mist">Every versioned change is compared with the baseline within budget, then fed back through a loop driven by real production telemetry.</p>
        </div>
      </div>
    </Section>
  )
}
