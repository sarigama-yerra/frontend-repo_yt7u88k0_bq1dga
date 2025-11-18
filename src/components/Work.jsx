function Work() {
  const projects = [
    {
      title: 'Lens Studio',
      tag: 'Web Design • Development',
      link: '#',
      image:
        'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Nordic Supply',
      tag: 'E‑commerce • Front‑end',
      link: '#',
      image:
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Studio Orbit',
      tag: 'Brand • Website',
      link: '#',
      image:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
    },
  ]

  return (
    <section id="work" className="relative py-20 sm:py-28 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Selected Work</h2>
            <p className="mt-2 text-white/70 max-w-xl">A few recent projects focused on clarity, performance, and craft.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm font-medium text-white hover:bg-white/10">Get a quote</a>
        </div>

        <div className="mt-10 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5">
                <div className="text-xs text-white/70">{p.tag}</div>
                <div className="text-white font-medium text-lg">{p.title}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
