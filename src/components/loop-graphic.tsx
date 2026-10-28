import { motion } from 'motion/react'

const STEPS = ['Evaluate', 'Tune', 'Deploy', 'Observe']
const C = 150
const R = 105

export function LoopGraphic() {
  return (
    <svg viewBox="0 0 300 300" role="img" aria-label="Continuous loop: evaluate, tune, deploy, observe" className="mx-auto w-full max-w-xs">
      <circle cx={C} cy={C} r={R} fill="none" stroke="var(--color-line-strong)" />
      <motion.circle
        cx={C}
        cy={C}
        r={R}
        fill="none"
        stroke="var(--color-signal)"
        strokeWidth="2"
        strokeDasharray="40 620"
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: `${C}px ${C}px` }}
      />
      {STEPS.map((s, i) => {
        const a = (i / STEPS.length) * Math.PI * 2 - Math.PI / 2
        const x = C + R * Math.cos(a)
        const y = C + R * Math.sin(a)
        return (
          <g key={s}>
            <circle cx={x} cy={y} r="6" fill="var(--color-signal)" />
            <text x={C + (R + 24) * Math.cos(a)} y={C + (R + 24) * Math.sin(a) + 4} textAnchor="middle" fontSize="12" className="fill-snow">
              {s}
            </text>
          </g>
        )
      })}
      <text x={C} y={C - 2} textAnchor="middle" fontSize="11" fontFamily="var(--font-mono)" letterSpacing="2" className="fill-mist">
        PRODUCTION
      </text>
      <text x={C} y={C + 14} textAnchor="middle" fontSize="11" fontFamily="var(--font-mono)" letterSpacing="2" className="fill-mist">
        TELEMETRY
      </text>
    </svg>
  )
}
