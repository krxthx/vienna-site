import { Moon, Sun } from 'lucide-react'
import { useState } from 'react'

type Theme = 'light' | 'dark'

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => (document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'))

  function toggle() {
    const next: Theme = theme === 'light' ? 'dark' : 'light'
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem('theme', next)
    } catch {
      // storage unavailable; theme still applies for this visit
    }
    setTheme(next)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-line-strong text-mist transition hover:text-snow"
    >
      {theme === 'light' ? <Moon className="h-4 w-4" aria-hidden /> : <Sun className="h-4 w-4" aria-hidden />}
    </button>
  )
}
