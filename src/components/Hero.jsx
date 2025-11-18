import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[86vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs text-white/80 mb-6 pointer-events-none">
              <span className="h-2 w-2 rounded-full bg-emerald-400/90 animate-pulse"></span>
              Available for new projects
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white leading-tight">
              Connor Clark
            </h1>
            <p className="mt-4 text-white/80 text-lg sm:text-xl max-w-xl">
              Web designer and front‑end developer crafting minimalist, fast experiences.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-4 py-2 text-sm font-semibold hover:bg-white/90 transition-colors">
                Start a project
              </a>
              <a href="#work" className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 text-white px-4 py-2 text-sm font-semibold hover:bg-white/10 transition-colors">
                See my work
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 pointer-events-none" />
    </section>
  )
}

export default Hero
