export function Closing() {
  return (
    <>
      <section className="relative overflow-hidden border-t border-line px-6 py-32 text-center">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" aria-hidden />
        <h2 className="relative mx-auto max-w-3xl text-4xl font-normal leading-tight tracking-tight sm:text-5xl">
          Model to harness to infrastructure: <span className="text-signal">fit, proven on your workload.</span>
        </h2>
      </section>
      <footer className="border-t border-line px-6 py-10 text-sm text-mist">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
          <img src="/brand/vienna-logo-light.svg" alt="Project Vienna" className="h-8 opacity-80" />
          <p>Project Vienna by Presidio</p>
        </div>
      </footer>
    </>
  )
}
