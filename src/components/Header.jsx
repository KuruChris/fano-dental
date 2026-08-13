import icon from '../assets/clinic/fano-icon.jpg'
import Magnet from './reactbits/Magnet'

const FACEBOOK_URL = 'https://www.facebook.com/fanodentalgroup'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#smiles', label: 'Smiles' },
  { href: '#team', label: 'Dentists' },
  { href: '#location', label: 'Locations' },
]

export default function Header() {
  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <a href="#hero" className="site-header__brand" aria-label="Fano Dental Clinic home">
          <img src={icon} alt="" width="28" height="28" />
          Fano
        </a>

        <nav className="site-header__nav" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <Magnet padding={24} magnetStrength={4} wrapperClassName="site-header__cta-wrap">
          <a
            className="btn btn--solid"
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Us now
          </a>
        </Magnet>
      </div>
    </header>
  )
}
