import { Menu } from 'lucide-react'
import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur supports-[backdrop-filter]:bg-white/5 border border-white/10 rounded-xl">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="font-semibold tracking-tight text-white text-lg">
              Connor Clark
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
            </nav>

            <button
              className="md:hidden text-white/90 hover:text-white"
              aria-label="Open menu"
              onClick={() => setOpen((v) => !v)}
            >
              <Menu size={22} />
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3 text-sm text-white/80">
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="py-2 hover:text-white"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
