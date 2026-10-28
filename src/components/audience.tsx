import { Check } from 'lucide-react'
import { AUDIENCES } from '../content/site'
import { Section } from './section'

export function Audience() {
  return (
    <Section
      id="who"
      eyebrow="Who it benefits"
      title={<>Wherever you are on the AI journey, there is a place to start.</>}
      lead="Vienna fits organizations that are choosing, tuning or scaling AI and need evidence rather than assumptions."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {AUDIENCES.map((a) => (
          <article key={a.title} className="rounded-2xl border border-line bg-ink-900/50 p-8 transition hover:border-line-strong">
            <h3 className="text-xl font-medium">{a.title}</h3>
            <ul className="mt-6 space-y-3">
              {a.signals.map((s) => (
                <li key={s} className="flex gap-3 text-mist">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-signal" aria-hidden />
                  {s}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
