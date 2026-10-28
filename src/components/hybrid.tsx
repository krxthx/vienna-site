import { HYBRID } from '../content/site'
import { Section } from './section'

export function Hybrid() {
  return (
    <Section id="hybrid" eyebrow="Deployment" title={HYBRID.title} lead={HYBRID.body}>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-line p-8">
          <h3 className="eyebrow">Potential partners</h3>
          <ul className="mt-6 flex flex-wrap gap-3">
            {HYBRID.partners.map((p) => (
              <li key={p} className="rounded-full border border-line-strong px-5 py-2">
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-line p-8">
          <h3 className="eyebrow">Presidio services</h3>
          <ul className="mt-6 space-y-3 text-mist">
            {HYBRID.services.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
