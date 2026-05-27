import { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll listener to set scrolled flag and active link
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ['home', 'about', 'projects', 'certifications', 'skills', 'contact'];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY + 120 >= el.offsetTop) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // initialize on mount
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent page scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  // Close menu when a link is clicked
  const handleLinkClick = () => setMenuOpen(false);

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
      <button className={`hamburger${menuOpen ? ' open' : ''}`} onClick={toggleMenu} aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className="nav-links">
        {links.map(l => (
          <li key={l.id}>
            <a href={l.href} className={active === l.id ? 'active' : ''} onClick={handleLinkClick}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      {/* Mobile side drawer */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {/* Brand logo at top of side drawer */}
        <div className="nav-brand" style={{ margin: '1rem', fontSize: '1.2rem' }}>Piumi Abeygunasekera</div>
        <ul>
          {links.map(l => (
            <li key={l.id}>
              <a href={l.href} className={active === l.id ? 'active' : ''} onClick={handleLinkClick}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Overlay */}
      {menuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
    </nav>
  )
}

export default Navbar
