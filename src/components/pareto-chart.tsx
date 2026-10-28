import { motion } from 'motion/react'
import { CONFIGS, paretoFrontier } from '../content/pareto'

const W = 520
const H = 400
const PAD = 44

const x = (v: number) => PAD + v * (W - PAD * 2)
const y = (v: number) => H - PAD - v * (H - PAD * 2)

export function ParetoChart() {
  const frontier = paretoFrontier(CONFIGS)
  const onFrontier = new Set(frontier.map((f) => f.id))
  const path = frontier.map((p, i) => `${i ? 'L' : 'M'}${x(p.speed)},${y(p.quality)}`).join(' ')

  return (
    <figure className="w-full">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Illustrative chart of model configurations by task quality and speed, with the optimal frontier highlighted" className="w-full">
        {[0.25, 0.5, 0.75].map((t) => (
          <g key={t} stroke="var(--color-line)">
            <line x1={x(t)} x2={x(t)} y1={PAD} y2={H - PAD} />
            <line x1={PAD} x2={W - PAD} y1={y(t)} y2={y(t)} />
          </g>
        ))}
        <g stroke="var(--color-line-strong)">
          <line x1={PAD} x2={PAD} y1={PAD - 10} y2={H - PAD} />
          <line x1={PAD} x2={W - PAD + 10} y1={H - PAD} y2={H - PAD} />
        </g>
        <text x={PAD} y={PAD - 20} className="fill-mist" fontSize="11" fontFamily="var(--font-mono)" letterSpacing="2">
          TASK QUALITY / COST
        </text>
        <text x={W - PAD} y={H - 12} textAnchor="end" className="fill-mist" fontSize="11" fontFamily="var(--font-mono)" letterSpacing="2">
          SPEED / THROUGHPUT
        </text>

        <motion.path
          d={path}
          fill="none"
          stroke="var(--color-signal)"
          strokeWidth="1.5"
          strokeDasharray="5 5"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.6, ease: 'easeOut' }}
        />

        {CONFIGS.map((c, i) => {
          const best = onFrontier.has(c.id)
          return (
            <motion.g
              key={c.id}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              style={{ transformOrigin: `${x(c.speed)}px ${y(c.quality)}px` }}
            >
              <circle cx={x(c.speed)} cy={y(c.quality)} r={best ? 7 : 5} fill={best ? 'var(--color-signal)' : 'transparent'} stroke={best ? 'var(--color-signal)' : 'var(--color-mist)'} strokeWidth="1.5" />
              <text x={x(c.speed) + 11} y={y(c.quality) + 4} fontSize="11" fontFamily="var(--font-mono)" className={best ? 'fill-snow' : 'fill-mist'}>
                {c.id}
              </text>
            </motion.g>
          )
        })}
      </svg>
      <figcaption className="mt-2 flex items-center gap-3 font-mono text-xs text-mist">
        <span className="inline-block h-2.5 w-2.5 rounded-full bg-signal" /> Optimal frontier
        <span className="ml-3 inline-block h-2.5 w-2.5 rounded-full border border-mist" /> Other configurations
        <span className="ml-auto">Illustrative</span>
      </figcaption>
    </figure>
  )
}
