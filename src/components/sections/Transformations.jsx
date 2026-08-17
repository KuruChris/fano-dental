import smile01 from '../../assets/clinic/testimonial-1.jpg'
import smile02 from '../../assets/clinic/testimonial-2.jpg'
import smile03 from '../../assets/clinic/testimonial-3.jpg'
import smile04 from '../../assets/clinic/testimonial-4.jpg'
import smile05 from '../../assets/clinic/testimonial-5.jpg'
import smile06 from '../../assets/clinic/testimonial-6.jpg'
import AccordionGallery from '../reactbits/AccordionGallery'
import FadeContent from '../reactbits/FadeContent'
import AnimatedContent from '../reactbits/AnimatedContent'

const FACEBOOK_URL = 'https://www.facebook.com/fanodentalgroup'

const smileResults = [
  {
    image: smile01,
    label: 'A brighter smile',
    alt: 'Patient smile transformation at Fano Dental Clinic in Cebu',
    link: FACEBOOK_URL,
  },
  {
    image: smile02,
    label: 'Confident result',
    alt: 'Patient with a confident new smile from Fano Dental Clinic Cebu',
    link: FACEBOOK_URL,
  },
  {
    image: smile03,
    label: 'Radiant finish',
    alt: 'Cosmetic smile result from Fano Dental Clinic in Cebu',
    link: FACEBOOK_URL,
  },
  {
    image: smile04,
    label: 'Shared smiles',
    alt: 'Patients showing transformed smiles at Fano Dental Clinic Cebu',
    link: FACEBOOK_URL,
  },
  {
    image: smile05,
    label: 'Spotlight smile',
    alt: 'Pageant smile transformation from Fano Dental Clinic Cebu',
    link: FACEBOOK_URL,
  },
  {
    image: smile06,
    label: 'Fresh confidence',
    alt: 'Close-up of a patient smile result at Fano Dental Clinic Cebu',
    link: FACEBOOK_URL,
  },
]

export default function Transformations() {
  return (
    <section
      id="smiles"
      className="section section--soft"
      aria-labelledby="smiles-heading"
    >
      <div className="shell">
        <FadeContent duration={800}>
          <div className="section__intro section__intro--wide">
            <p className="eyebrow">Smile transformations</p>
            <h2 id="smiles-heading" className="section__title">
              Real smiles from the best dental clinic in Cebu.
            </h2>
            <p className="section__lede">
              These portraits are proof of the smile transformations created at
              Fano Dental Clinic — patients who left with brighter, more
              confident smiles. Hover to look closer, then book your
              consultation on Facebook.
            </p>
          </div>
        </FadeContent>

        <AnimatedContent distance={40} duration={0.85}>
          <div className="smiles-gallery">
            <AccordionGallery
              items={smileResults}
              defaultIndex={2}
              accentColor="#0d7377"
              overlayColor="#0a2a2c"
              textColor="#ffffff"
              height={520}
              gap={12}
              radius={16}
              expandRatio={0.46}
              duration={0.55}
              tilt={6}
              parallax={0.35}
              grayscale={false}
              trigger="hover"
              showLabels
            />
          </div>
        </AnimatedContent>
      </div>
    </section>
  )
}
