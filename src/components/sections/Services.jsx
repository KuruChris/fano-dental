import { useState } from 'react'
import FadeContent from '../reactbits/FadeContent'
import AnimatedContent from '../reactbits/AnimatedContent'
import SpotlightCard from '../reactbits/SpotlightCard'
import ServiceGalleryModal from '../ServiceGalleryModal'

function dummyPhotos(seed, labels) {
  return labels.map((text, i) => ({
    image: `https://picsum.photos/seed/${seed}-${i + 1}/800/600`,
    text,
  }))
}

const services = [
  {
    index: '01',
    title: 'General dentistry & cleaning',
    body: 'Checkups and professional cleanings that keep Cebu families smiling with fewer surprises.',
    gallery: dummyPhotos('cleaning', [
      'Checkup',
      'Cleaning',
      'Consultation',
      'Oral exam',
      'Prevention',
      'Polish',
    ]),
  },
  {
    index: '02',
    title: 'Cosmetic dentistry',
    body: 'Whitening and smile enhancements led by cosmetic-focused care for a natural, confident finish.',
    gallery: dummyPhotos('cosmetic', [
      'Whitening',
      'Veneers',
      'Smile design',
      'Before care',
      'After care',
      'Finishing',
    ]),
  },
  {
    index: '03',
    title: 'Orthodontic care',
    body: 'Straightening pathways planned around comfort, clarity, and long-term oral health.',
    gallery: dummyPhotos('ortho', [
      'Braces',
      'Aligners',
      'Progress',
      'Fitting',
      'Retention',
      'Results',
    ]),
  },
  {
    index: '04',
    title: 'Restorative treatments',
    body: 'Fillings, crowns, and repairs that restore comfort and function with careful clinical detail.',
    gallery: dummyPhotos('restorative', [
      'Fillings',
      'Crowns',
      'Repair',
      'Bonding',
      'Restore',
      'Finish',
    ]),
  },
  {
    index: '05',
    title: 'Pediatric dentistry',
    body: 'Gentle first visits and growing-smile care designed for children and parents alike.',
    gallery: dummyPhotos('kids', [
      'First visit',
      'Kids care',
      'Checkup',
      'Guidance',
      'Comfort',
      'Family',
    ]),
  },
  {
    index: '06',
    title: 'Dental emergencies',
    body: 'Prompt support across our Cebu and Leyte branches when pain or urgency needs a calm clinical response.',
    gallery: dummyPhotos('emergency', [
      'Urgent care',
      'Relief',
      'Same day',
      'Support',
      'Treatment',
      'Follow-up',
    ]),
  },
]

export default function Services() {
  const [activeService, setActiveService] = useState(null)

  return (
    <section id="services" className="section section--soft" aria-labelledby="services-heading">
      <div className="shell">
        <FadeContent duration={800}>
          <div className="section__intro section__intro--wide">
            <p className="eyebrow">Dental services in Cebu</p>
            <h2 id="services-heading" className="section__title">
              Complete dental care from the best dental clinic in Cebu for your family.
            </h2>
            <p className="section__lede">
              Whether you need preventive cleaning, cosmetic improvements, or
              restorative treatment, Fano Dental Clinic offers clear options for
              patients across Cebu City, Naga, Liloan, Talisay, and Baybay, Leyte.
              Click a card to browse sample photos.
            </p>
          </div>
        </FadeContent>

        <div className="services-grid">
          {services.map((service, i) => (
            <AnimatedContent key={service.index} distance={36} delay={0.05 * i} duration={0.7} className="service-card-wrap">
              <button
                type="button"
                className="service-card-button"
                onClick={() => setActiveService(service)}
              >
                <SpotlightCard
                  className="service-card"
                  spotlightColor="rgba(13, 115, 119, 0.32)"
                >
                  <span className="service-card__index">{service.index}.</span>
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                  <span className="service-card__cta">
                    View photos
                    <svg viewBox="0 0 16 16" aria-hidden="true">
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </SpotlightCard>
              </button>
            </AnimatedContent>
          ))}
        </div>
      </div>

      {activeService && (
        <ServiceGalleryModal
          service={activeService}
          onClose={() => setActiveService(null)}
        />
      )}
    </section>
  )
}
