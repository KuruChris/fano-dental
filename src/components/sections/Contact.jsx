import icon from '../../assets/clinic/fano-icon.jpg'
import FadeContent from '../reactbits/FadeContent'
import AnimatedContent from '../reactbits/AnimatedContent'
import Magnet from '../reactbits/Magnet'

const FACEBOOK_URL = 'https://www.facebook.com/fanodentalgroup'
const MAPS_URL =
  'https://www.google.com/maps/place/Fano+Dental+Clinic+And+Laboratory/@10.3013293,123.8933559,281m/data=!3m1!1e3!4m14!1m7!3m6!1s0x33a99956e889a9e5:0xa58384c8418d552e!2sFano+Dental+Clinic+And+Laboratory!8m2!3d10.301386!4d123.893221!16s%2Fg%2F11bwkg0d3d!3m5!1s0x33a99956e889a9e5:0xa58384c8418d552e!8m2!3d10.301386!4d123.893221!16s%2Fg%2F11bwkg0d3d?entry=ttu'

const services = [
  'Oral prophylaxis',
  'Tooth extraction',
  'Dental filling',
  'Root canal treatment',
  'Cosmetic dentistry',
  'Orthodontics',
  'Dentures & crowns',
  'Pediatric dentistry',
  'Teeth whitening',
  'Emergency dental care',
]

const hours = [
  { day: 'Monday', time: '9:00 AM – 6:00 PM' },
  { day: 'Tuesday', time: '9:00 AM – 6:00 PM' },
  { day: 'Wednesday', time: '9:00 AM – 6:00 PM' },
  { day: 'Thursday', time: '9:00 AM – 6:00 PM' },
  { day: 'Friday', time: '9:00 AM – 6:00 PM' },
  { day: 'Saturday', time: '9:00 AM – 5:00 PM' },
  { day: 'Sunday', time: 'By appointment' },
]

export default function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-heading">
      <div className="shell">
        <FadeContent duration={800}>
          <div className="section__intro">
            <p className="eyebrow">Contact us</p>
            <h2 id="contact-heading" className="section__title">
              Ready for the best dental clinic in Cebu?
            </h2>
            <p className="section__lede">
              Reach Fano Dental Clinic for hours, directions, and booking through
              our Facebook page.
            </p>
          </div>
        </FadeContent>

        <AnimatedContent distance={36} duration={0.85}>
          <div className="contact-panel">
            <div className="contact-panel__col">
              <div className="contact-brand">
                <img src={icon} alt="" width="36" height="36" />
                <div>
                  <p className="contact-brand__name">Fano Dental Clinic</p>
                  <p className="contact-brand__tag">Affordable dental services</p>
                </div>
              </div>
              <ul className="contact-services">
                {services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>

            <div className="contact-panel__col">
              <h3 className="contact-panel__heading">Business hours</h3>
              <table className="hours-table">
                <tbody>
                  {hours.map((row) => (
                    <tr key={row.day}>
                      <th scope="row">{row.day}</th>
                      <td>{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="contact-panel__col">
              <h3 className="contact-panel__heading">Contact</h3>
              <p className="contact-panel__text">
                Message us on Facebook to book your consultation with{' '}
                <strong>Fano Dental Clinic</strong>.
              </p>
              <p className="contact-panel__highlight">
                <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
                  facebook.com/fanodentalgroup
                </a>
              </p>

              <h3 className="contact-panel__heading">Address</h3>
              <p className="contact-panel__text">
                B. Fano Bldg., Urgello St., Sambag 1, Cebu City
              </p>
              <p className="contact-panel__text contact-panel__text--muted">
                Also serving Naga: 2F Eugenia Bldg., N. Bacalso Ave., East
                Poblacion
              </p>

              <p className="contact-panel__cta-copy">
                Prefer to visit in person? Get directions to our Cebu City clinic.
              </p>

              <div className="contact-panel__actions">
                <Magnet padding={28} magnetStrength={3.2}>
                  <a
                    className="btn btn--solid"
                    href={FACEBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book on Facebook
                  </a>
                </Magnet>
                <a
                  className="btn btn--ghost"
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get directions
                </a>
              </div>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  )
}
