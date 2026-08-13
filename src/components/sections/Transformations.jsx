import AccordionGallery from '../reactbits/AccordionGallery'
import FadeContent from '../reactbits/FadeContent'
import AnimatedContent from '../reactbits/AnimatedContent'

const FACEBOOK_URL = 'https://www.facebook.com/fanodentalgroup'

const smileResults = [
  {
    image:
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&h=1200&q=80',
    label: 'Whitening',
    alt: 'Teeth whitening smile transformation at Fano Dental Clinic in Cebu',
    link: FACEBOOK_URL,
  },
  {
    image:
      'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&h=1200&q=80',
    label: 'Cosmetic care',
    alt: 'Cosmetic dentistry smile result from Fano Dental Clinic Cebu',
    link: FACEBOOK_URL,
  },
  {
    image:
      'https://images.unsplash.com/photo-1588776814546-1ffcf809a8d8?auto=format&fit=crop&w=900&h=1200&q=80',
    label: 'Restorative',
    alt: 'Restorative dental smile makeover in Cebu at Fano Dental Clinic',
    link: FACEBOOK_URL,
  },
  {
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&h=1200&q=80',
    label: 'Family care',
    alt: 'Family dental care smile results at the best dental clinic in Cebu',
    link: FACEBOOK_URL,
  },
  {
    image:
      'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=900&h=1200&q=80',
    label: 'Confidence',
    alt: 'Confident smile transformation from Fano Dental Clinic Cebu City',
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
              Smile transformations from the best dental clinic in Cebu.
            </h2>
            <p className="section__lede">
              From whitening to cosmetic and restorative care, Fano Dental Clinic
              helps patients leave with clearer, more confident smiles. Hover to
              explore sample results — then book your consultation on Facebook.
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
              height={460}
              gap={12}
              radius={16}
              expandRatio={0.5}
              duration={0.55}
              tilt={6}
              parallax={0.45}
              grayscale
              trigger="hover"
              showLabels
            />
          </div>
        </AnimatedContent>
      </div>
    </section>
  )
}
