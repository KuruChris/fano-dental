import FadeContent from '../reactbits/FadeContent'
import AnimatedContent from '../reactbits/AnimatedContent'
import SpotlightCard from '../reactbits/SpotlightCard'

const services = [
  {
    index: '01',
    title: 'General dentistry & cleaning',
    body: 'Checkups and professional cleanings that keep Cebu families smiling with fewer surprises.',
  },
  {
    index: '02',
    title: 'Cosmetic dentistry',
    body: 'Whitening and smile enhancements led by cosmetic-focused care for a natural, confident finish.',
  },
  {
    index: '03',
    title: 'Orthodontic care',
    body: 'Straightening pathways planned around comfort, clarity, and long-term oral health.',
  },
  {
    index: '04',
    title: 'Restorative treatments',
    body: 'Fillings, crowns, and repairs that restore comfort and function with careful clinical detail.',
  },
  {
    index: '05',
    title: 'Pediatric dentistry',
    body: 'Gentle first visits and growing-smile care designed for children and parents alike.',
  },
  {
    index: '06',
    title: 'Dental emergencies',
    body: 'Prompt support in Cebu City and Naga when pain or urgency needs a calm clinical response.',
  },
]

export default function Services() {
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
              patients across Cebu City and Naga.
            </p>
          </div>
        </FadeContent>

        <div className="services-grid">
          {services.map((service, i) => (
            <AnimatedContent key={service.index} distance={36} delay={0.05 * i} duration={0.7}>
              <SpotlightCard
                className="service-card"
                spotlightColor="rgba(94, 234, 212, 0.18)"
              >
                <span className="service-card__index">{service.index}.</span>
                <h3>{service.title}</h3>
                <p>{service.body}</p>
              </SpotlightCard>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  )
}
