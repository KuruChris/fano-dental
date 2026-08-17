import coverImage from '../../assets/clinic/cover-promo.png'
import FadeContent from '../reactbits/FadeContent'
import AnimatedContent from '../reactbits/AnimatedContent'
import Magnet from '../reactbits/Magnet'

export default function Hero() {
  return (
    <section id="hero" className="hero" aria-label="Fano Dental Clinic hero">
      <div className="hero__media" aria-hidden="true">
        <img
          src={coverImage}
          alt=""
          className="hero__photo"
          width="1600"
          height="900"
          fetchPriority="high"
        />
      </div>
      <div className="hero__veil" aria-hidden="true" />

      <div className="shell">
        <div className="hero__content">
          <AnimatedContent distance={40} duration={0.95} threshold={0.2}>
            <p className="hero__eyebrow">Fano Dental Group · 5 branches across Cebu &amp; Leyte</p>
            <h1 className="hero__brand">
              Best Dental Clinic in Cebu
            </h1>
          </AnimatedContent>

          <FadeContent delay={160} duration={900}>
            <p className="hero__title">
              Fano Dental Clinic
              <span>Calm care. Confident smiles.</span>
            </p>
            <p className="hero__lede">
              Looking for the best dental clinic in Cebu? Fano Dental Clinic
              delivers modern family and cosmetic dentistry with unhurried visits,
              clear guidance, and trusted clinicians across Cebu and Leyte.
            </p>
          </FadeContent>

          <FadeContent delay={280} duration={900}>
            <div className="hero__actions">
              <Magnet padding={40} magnetStrength={3.4}>
                <a
                  className="btn btn--solid"
                  href="https://www.facebook.com/fanodentalgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a consultation
                </a>
              </Magnet>
              <a className="btn btn--ghost" href="#services">
                View dental services
              </a>
            </div>
          </FadeContent>
        </div>
      </div>
    </section>
  )
}
