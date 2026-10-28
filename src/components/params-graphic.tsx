import { motion } from 'motion/react'

const W = 640
const H = 340
const OUT = [
  { label: 'Task quality', y: 70 },
  { label: 'Cost', y: 170 },
  { label: 'Performance', y: 270 },
]
const N = 15

// deterministic scatter of parameter nodes on the left
const params = Array.from({ length: N }, (_, i) => ({
  x: 40 + ((i * 53) % 150),
  y: 28 + ((i * 97) % 290),
  to: i % 3,
}))

export function ParamsGraphic() {
  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="About fifteen model parameters converge into three outcomes: task quality, cost and performance" className="w-full">
      {params.map((p, i) => (
        <motion.path
          key={i}
          d={`M${p.x},${p.y} C${p.x + 150},${p.y} ${W - 300},${OUT[p.to].y} ${W - 170},${OUT[p.to].y}`}
          fill="none"
          stroke="var(--color-signal)"
          strokeOpacity="0.35"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: i * 0.05 }}
        />
      ))}
      {params.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="4" fill="var(--color-ink-950)" stroke="var(--color-mist)" />
      ))}
      <text x="40" y={H - 4} fontSize="11" fontFamily="var(--font-mono)" letterSpacing="2" className="fill-mist">
        ~15+ PARAMETERS
      </text>
      {OUT.map((o) => (
        <g key={o.label}>
          <rect x={W - 170} y={o.y - 22} width="160" height="44" rx="10" fill="var(--color-ink-900)" stroke="var(--color-signal)" strokeOpacity="0.6" />
          <text x={W - 90} y={o.y + 5} textAnchor="middle" fontSize="14" className="fill-snow">
            {o.label}
          </text>
        </g>
      ))}
    </svg>
  )
}
