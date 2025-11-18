import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const data = Object.fromEntries(form.entries())

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('Thanks! I will get back to you shortly.')
        e.currentTarget.reset()
      } else {
        setStatus('Something went wrong. Please try again later.')
      }
    } catch (err) {
      setStatus('Unable to send right now. Please email me instead.')
    }
  }

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Let’s work together</h2>
            <p className="mt-4 text-white/70 max-w-xl">Tell me about your project and goals. I usually reply within 1–2 business days.</p>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-white/60 mb-1">Name</label>
                <input name="name" required className="w-full rounded-lg bg-black/30 border border-white/15 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-white/30" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-xs text-white/60 mb-1">Email</label>
                <input type="email" name="email" required className="w-full rounded-lg bg-black/30 border border-white/15 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-white/30" placeholder="you@example.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-xs text-white/60 mb-1">Project</label>
              <input name="project" className="w-full rounded-lg bg-black/30 border border-white/15 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-white/30" placeholder="Website redesign, marketing site, etc." />
            </div>
            <div className="mt-4">
              <label className="block text-xs text-white/60 mb-1">Message</label>
              <textarea name="message" rows="4" required className="w-full rounded-lg bg-black/30 border border-white/15 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-white/30" placeholder="A few lines about your timeline and scope"></textarea>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <button className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-4 py-2 text-sm font-semibold hover:bg-white/90 transition-colors">Send message</button>
              <span className="text-sm text-white/70">{status}</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
