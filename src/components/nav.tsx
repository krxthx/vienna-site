import { ThemeToggle } from './theme-toggle'
import { NAV } from '../content/site'

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-line bg-ink-950/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" aria-label="Project Vienna, back to top">
          <img src="/brand/vienna-logo-light.svg" alt="Project Vienna" className="logo-light h-9" />
          <img src="/brand/vienna-logo-dark.svg" alt="" aria-hidden className="logo-dark h-9" />
        </a>
        <nav className="hidden gap-8 text-sm text-mist md:flex" aria-label="Sections">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="transition hover:text-snow">
              {n.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}
