import { useState, useEffect } from 'react'

const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <span className="text-xl font-bold text-indigo-400 tracking-wider cursor-pointer" onClick={() => scrollTo('home')}>
          &lt;SB /&gt;
        </span>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map(link => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 text-sm font-medium"
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-indigo-400 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-indigo-400 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-indigo-400 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/10 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map(link => (
              <li key={link}>
                <button
                  onClick={() => scrollTo(link)}
                  className="text-gray-300 hover:text-indigo-400 transition-colors text-sm font-medium w-full text-left py-2"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
