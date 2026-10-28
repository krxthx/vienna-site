import { Approach } from './components/approach'
import { Audience } from './components/audience'
import { Closing } from './components/closing'
import { Engagements } from './components/engagements'
import { Hero } from './components/hero'
import { Hybrid } from './components/hybrid'
import { Nav } from './components/nav'
import { Problem } from './components/problem'

export function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Approach />
        <Audience />
        <Engagements />
        <Hybrid />
        <Closing />
      </main>
    </>
  )
}
