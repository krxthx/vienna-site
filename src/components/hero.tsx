import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import { ParetoChart } from './pareto-chart'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="eyebrow">Enterprise AI evaluation</p>
          <h1 className="mt-6 text-5xl font-normal leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            The right model, harness and deployment for <span className="text-signal">your</span> workload.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-mist">
            As companies move beyond experiments, Project Vienna tests real workloads to find the combination that performs, using Presidio accelerators, with hybrid where it fits.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#approach" className="inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3 font-medium text-ink-950 transition hover:brightness-110">
              See the approach <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a href="#who" className="inline-flex items-center rounded-full border border-line-strong px-6 py-3 transition hover:border-snow">
              Who it is for
            </a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3 }} className="rounded-2xl border border-line bg-ink-900/60 p-6">
          <ParetoChart />
        </motion.div>
      </div>
    </section>
  )
}
