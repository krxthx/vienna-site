import { motion } from 'motion/react'

// illustrative rankings; names and values are placeholders
const ROWS = [
  { name: 'Model A', kind: 'Enterprise', v: 0.94 },
  { name: 'Model B', kind: 'Enterprise', v: 0.82 },
  { name: 'Model C', kind: 'Open source', v: 0.74 },
  { name: 'Model D', kind: 'Open source', v: 0.66 },
  { name: 'Model E', kind: 'Enterprise', v: 0.52 },
]

const UNKNOWNS = ['GPU and serving setup', 'Quantization', 'Harness, tools and memory', 'Training data overlap']

export function LeaderboardGraphic() {
  return (
    <div className="grid items-stretch gap-6 lg:grid-cols-[1.3fr_0.7fr]">
      <div className="rounded-2xl border border-line bg-ink-900/50 p-6">
        <div className="mb-5 flex justify-between font-mono text-xs uppercase tracking-[0.18em] text-mist">
          <span>Public leaderboard</span>
          <span>Illustrative</span>
        </div>
        <ul className="space-y-4">
          {ROWS.map((r, i) => (
            <li key={r.name} className="grid grid-cols-[6rem_1fr] items-center gap-4">
              <div>
                <p className="text-sm">{r.name}</p>
                <p className="font-mono text-[10px] uppercase tracking-wider text-mist">{r.kind}</p>
              </div>
              <div className="h-2.5 rounded-full bg-ink-800">
                <motion.div
                  className="h-full rounded-full bg-mist/70"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${r.v * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: i * 0.1, ease: 'easeOut' }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl border border-dashed border-line-strong p-6">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-amber">Not on the board</p>
        <ul className="mt-5 space-y-3">
          {UNKNOWNS.map((u, i) => (
            <motion.li
              key={u}
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + i * 0.12 }}
              className="flex items-center gap-3 text-mist"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-amber/60 font-mono text-xs text-amber">?</span>
              {u}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  )
}
