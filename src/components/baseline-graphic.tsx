import { motion } from 'motion/react'

// illustrative: each versioned change compared against the baseline
const VERSIONS = [
  { label: 'Baseline', quality: 0.58, cost: 1.0 },
  { label: 'v1 · routing', quality: 0.66, cost: 0.82 },
  { label: 'v2 · memory', quality: 0.74, cost: 0.7 },
  { label: 'v3 · guardrails', quality: 0.81, cost: 0.64 },
]

export function BaselineGraphic() {
  return (
    <div className="rounded-2xl border border-line bg-ink-900/50 p-6">
      <div className="mb-6 flex items-center justify-between font-mono text-xs uppercase tracking-[0.18em] text-mist">
        <span>Each change vs baseline</span>
        <span className="flex gap-4 normal-case tracking-normal">
          <span className="flex items-center gap-2"><i className="h-2 w-2 rounded-full bg-signal" />Quality</span>
          <span className="flex items-center gap-2"><i className="h-2 w-2 rounded-full bg-amber" />Relative cost</span>
        </span>
      </div>
      <ul className="space-y-6">
        {VERSIONS.map((v, i) => (
          <li key={v.label}>
            <p className="mb-2 text-sm text-mist">{v.label}</p>
            {[
              { val: v.quality, cls: 'bg-signal' },
              { val: v.cost, cls: 'bg-amber' },
            ].map((b, j) => (
              <div key={j} className="mb-1.5 h-2 rounded-full bg-ink-800">
                <motion.div
                  className={`h-full rounded-full ${b.cls}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${b.val * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.15 + j * 0.05 }}
                />
              </div>
            ))}
          </li>
        ))}
      </ul>
      <p className="mt-6 text-right font-mono text-xs text-mist">Illustrative</p>
    </div>
  )
}
