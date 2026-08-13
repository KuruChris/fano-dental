import icon from '../assets/clinic/fano-icon.jpg'

const FACEBOOK_URL = 'https://www.facebook.com/fanodentalgroup'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__grid">
        <div className="site-footer__brand-block">
          <p className="site-footer__logo">
            <img src={icon} alt="" width="28" height="28" />
            Fano Dental Clinic
          </p>
          <p className="site-footer__tag">
            Fano Dental Group by Dr. Bartolome Fano Jr. — a trusted dental clinic
            in Cebu City and Naga for families seeking the best dental clinic in
            Cebu.
          </p>
        </div>

        <div>
          <p className="site-footer__heading">Care</p>
          <ul>
            <li><a href="#services">Dental services</a></li>
            <li><a href="#smiles">Smile transformations</a></li>
            <li><a href="#team">Our dentists</a></li>
            <li><a href="#location">Clinic locations</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <p className="site-footer__heading">Branches</p>
          <ul>
            <li><span>Cebu City — Sambag 1</span></li>
            <li><span>Naga — East Poblacion</span></li>
            <li><a href="#about">About the clinic</a></li>
          </ul>
        </div>

        <div>
          <p className="site-footer__heading">Connect</p>
          <ul>
            <li>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li><span>Cebu, Philippines</span></li>
            <li>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
                Book Us now
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="shell site-footer__bottom">
        <p>© {new Date().getFullYear()} Fano Dental Clinic. All rights reserved.</p>
        <p>Best Dental Clinic in Cebu · Cebu City &amp; Naga</p>
      </div>
    </footer>
  )
}
