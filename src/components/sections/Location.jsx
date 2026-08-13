import FadeContent from '../reactbits/FadeContent'
import AnimatedContent from '../reactbits/AnimatedContent'

const MAP_LINK =
  'https://www.google.com/maps/place/Fano+Dental+Clinic+And+Laboratory/@10.3013293,123.8933559,281m/data=!3m1!1e3!4m14!1m7!3m6!1s0x33a99956e889a9e5:0xa58384c8418d552e!2sFano+Dental+Clinic+And+Laboratory!8m2!3d10.301386!4d123.893221!16s%2Fg%2F11bwkg0d3d!3m5!1s0x33a99956e889a9e5:0xa58384c8418d552e!8m2!3d10.301386!4d123.893221!16s%2Fg%2F11bwkg0d3d?entry=ttu'

const MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d980.8!2d123.893221!3d10.301386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a99956e889a9e5%3A0xa58384c8418d552e!2sFano%20Dental%20Clinic%20And%20Laboratory!5e0!3m2!1sen!2sph!4v1723520000000!5m2!1sen!2sph'

const branches = [
  {
    name: 'Cebu City Branch',
    address: 'B. Fano Bldg., Urgello St., Sambag 1, Cebu City',
  },
  {
    name: 'Naga Branch',
    address: '2F Eugenia Bldg., N. Bacalso Ave., East Poblacion, Naga, Cebu',
  },
]

export default function Location() {
  return (
    <section id="location" className="section section--soft" aria-labelledby="location-heading">
      <div className="shell location-grid">
        <AnimatedContent distance={36} duration={0.8}>
          <div>
            <p className="eyebrow">Visit our clinics</p>
            <h2 id="location-heading" className="section__title">
              Two convenient locations for dental care in Cebu.
            </h2>
            <p className="section__lede">
              Book with the best dental clinic in Cebu whether you are closer to
              Sambag 1 in Cebu City or East Poblacion in Naga. Both branches offer
              the same Fano standard of calm, modern dentistry.
            </p>

            <dl className="visit-details">
              {branches.map((branch) => (
                <div key={branch.name}>
                  <dt>{branch.name}</dt>
                  <dd>{branch.address}</dd>
                </div>
              ))}
              <div>
                <dt>Directions</dt>
                <dd>
                  <a
                    className="map-link"
                    href={MAP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open Fano Dental Clinic on Google Maps
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </AnimatedContent>

        <FadeContent duration={1000}>
          <div className="map-panel map-panel--embed">
            <iframe
              title="Fano Dental Clinic And Laboratory on Google Maps"
              src={MAP_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </FadeContent>
      </div>
    </section>
  )
}
