function Services() {
  const services = [
    {
      title: 'Web Design',
      desc: 'Minimalist, conversion‑focused interfaces tailored to your brand.',
    },
    {
      title: 'Front‑end Development',
      desc: 'Lightning‑fast implementations using modern frameworks and best practices.',
    },
    {
      title: 'Design Systems',
      desc: 'Reusable components, typography, and spacing systems for scale.',
    },
    {
      title: 'Performance & SEO',
      desc: 'Core Web Vitals, accessibility, and technical SEO baked in.',
    },
  ]

  return (
    <section id="services" className="relative py-20 sm:py-28 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Services</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
              <div className="text-white font-medium">{s.title}</div>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
