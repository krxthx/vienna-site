import { motion } from 'motion/react'

const LAYERS = [
  { label: 'Agent harness', sub: 'Prompts · tools · memory · context' },
  { label: 'Model', sub: 'Enterprise and open source' },
  { label: 'Serving', sub: 'Quantization · batching' },
  { label: 'Hardware', sub: 'GPU · on-prem · neo-cloud · cloud' },
]

export function StackGraphic() {
  return (
    <div className="space-y-2">
      {LAYERS.map((l, i) => (
        <motion.div
          key={l.label}
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12 }}
          className="flex items-center justify-between rounded-xl border border-line bg-ink-900/60 px-6 py-5"
          style={{ marginLeft: `${i * 14}px`, marginRight: `${i * 14}px` }}
        >
          <span className="font-medium">{l.label}</span>
          <span className="hidden font-mono text-xs text-mist sm:inline">{l.sub}</span>
        </motion.div>
      ))}
      <p className="pt-3 text-center font-mono text-xs uppercase tracking-[0.18em] text-signal">Fit across the whole stack</p>
    </div>
  )
}
