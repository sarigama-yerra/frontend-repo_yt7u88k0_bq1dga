function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">About</h2>
            <p className="mt-6 text-white/80 max-w-2xl leading-relaxed">
              I’m Connor Clark — a web designer and front‑end developer. I build clean, minimalist websites that feel effortless to use. My focus is on clear hierarchy, timeless typography, and performance.
            </p>
            <p className="mt-4 text-white/70 max-w-2xl leading-relaxed">
              Over the past years, I’ve helped startups and studios design and ship fast, responsive websites and product marketing pages.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
            <div className="text-white font-medium">Stack & Tools</div>
            <ul className="mt-3 text-sm text-white/70 space-y-2">
              <li>React, Next.js</li>
              <li>Tailwind CSS</li>
              <li>Framer Motion</li>
              <li>Figma</li>
              <li>Notion</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
