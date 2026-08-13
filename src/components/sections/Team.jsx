import drJr from '../../assets/clinic/dr-jr-fano.jpg'
import drCristy from '../../assets/clinic/dr-cristy-fano-lodovice.jpg'
import drReena from '../../assets/clinic/dr-reena-fano.jpg'
import FadeContent from '../reactbits/FadeContent'
import AnimatedContent from '../reactbits/AnimatedContent'
import SpotlightCard from '../reactbits/SpotlightCard'

const members = [
  {
    index: '01',
    name: 'Dr. Bart M. Fano Jr.',
    role: 'Cosmetic Dentist',
    focus: 'Founder · cosmetic dentistry & smile design',
    image: drJr,
    alt: 'Dr. Bart M. Fano Jr., cosmetic dentist at Fano Dental Clinic in Cebu',
  },
  {
    index: '02',
    name: 'Dr. Cristy Fano Lodovice',
    role: 'Dentist',
    focus: 'Family dentistry with a comfort-first chairside approach',
    image: drCristy,
    alt: 'Dr. Cristy Fano Lodovice, dentist at Fano Dental Clinic',
  },
  {
    index: '03',
    name: 'Dr. Reena Fano',
    role: 'Dentist',
    focus: 'Comprehensive dentistry for lasting oral health',
    image: drReena,
    alt: 'Dr. Reena Fano, dentist at Fano Dental Clinic',
  },
]

export default function Team() {
  return (
    <section id="team" className="section" aria-labelledby="team-heading">
      <div className="shell">
        <FadeContent duration={800}>
          <div className="section__intro">
            <p className="eyebrow">Our dentists</p>
            <h2 id="team-heading" className="section__title">
              Meet the doctors behind Cebu’s trusted dental care.
            </h2>
            <p className="section__lede">
              At Fano Dental Clinic, your smile is guided by experienced dentists
              committed to careful treatment planning and a welcoming patient
              experience.
            </p>
          </div>
        </FadeContent>

        <div className="team-grid">
          {members.map((member, i) => (
            <AnimatedContent key={member.index} distance={40} delay={0.08 * i} duration={0.75}>
              <SpotlightCard
                className="team-card"
                spotlightColor="rgba(13, 115, 119, 0.16)"
              >
                <div className="team-card__top">
                  <span>{member.index}</span>
                  <span>{member.role}</span>
                </div>
                <div className="team-card__frame">
                  <img
                    className="team-card__photo"
                    src={member.image}
                    alt={member.alt}
                    width="640"
                    height="640"
                    loading="lazy"
                  />
                </div>
                <h3>{member.name}</h3>
                <p>{member.focus}</p>
              </SpotlightCard>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  )
}
