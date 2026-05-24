import { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = ['home', 'about', 'projects', 'certifications', 'skills', 'contact'];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY + 120 >= el.offsetTop) {
          setActive(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#home', label: 'Home', id: 'home' },
    { href: '#about', label: 'About', id: 'about' },
    { href: '#projects', label: 'Work', id: 'projects' },
    { href: '#certifications', label: 'Certifications', id: 'certifications' },
    { href: '#skills', label: 'Skills', id: 'skills' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ]

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-brand">Piumi Abeygunasekera</div>
      <ul className="nav-links">
        {links.map(l => (
          <li key={l.id}>
            <a href={l.href} className={active === l.id ? 'active' : ''}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
