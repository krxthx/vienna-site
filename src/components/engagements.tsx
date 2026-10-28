import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { PATHS } from '../content/site'
import { Section } from './section'

export function Engagements() {
  const [active, setActive] = useState(0)
  const p = PATHS[active]

  return (
    <Section
      id="engage"
      eyebrow="Engagements"
      title={<>Four ways to work with Vienna.</>}
      lead="Each path starts from your situation and ends with evidence and a configuration you can act on."
    >
      <div role="tablist" aria-label="Engagement types" className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {PATHS.map((x, i) => (
          <button
            key={x.offer}
            role="tab"
            id={`tab-${i}`}
            aria-selected={i === active}
            aria-controls="engage-panel"
            onClick={() => setActive(i)}
            className={`rounded-xl border p-5 text-left transition ${i === active ? 'border-signal bg-signal/5' : 'border-line hover:border-line-strong'}`}
          >
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-mist">{x.situation}</span>
            <span className="mt-2 block text-lg font-medium">{x.offer}</span>
          </button>
        ))}
      </div>

      <div id="engage-panel" role="tabpanel" aria-labelledby={`tab-${active}`} className="mt-6 rounded-2xl border border-line p-8 sm:p-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]"
          >
            <div>
              <p className="text-xl font-normal">{p.summary}</p>
              <ol className="mt-8 space-y-4">
                {p.steps.map((s, i) => (
                  <li key={s} className="grid grid-cols-[2.5rem_1fr] text-mist">
                    <span className="font-mono text-sm text-signal">0{i + 1}</span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
            <div className="space-y-8 border-line lg:border-l lg:pl-10">
              <div>
                <h4 className="eyebrow text-amber">Example scenario</h4>
                <p className="mt-3 leading-relaxed text-snow/90">{p.scenario}</p>
              </div>
              <div>
                <h4 className="eyebrow text-mist">Team</h4>
                <ul className="mt-3 space-y-2 text-mist">
                  {p.roles.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  )
}
