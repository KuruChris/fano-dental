import teamPhoto from '../../assets/clinic/the-team.jpg'
import FadeContent from '../reactbits/FadeContent'
import AnimatedContent from '../reactbits/AnimatedContent'
import CountUp from '../reactbits/CountUp'

const pillars = [
  {
    index: '01',
    label: 'Comfort',
    title: 'Unhurried dental visits',
    body: 'Every appointment at our Cebu dental clinic is paced for comfort — so families feel informed, calm, and cared for.',
  },
  {
    index: '02',
    label: 'Expertise',
    title: 'Modern clinical standards',
    body: 'From cosmetic refinements to everyday dentistry, our doctors combine careful technique with clear chairside guidance.',
  },
  {
    index: '03',
    label: 'Trust',
    title: 'A clinic Cebu families return to',
    body: 'Patients choose Fano Dental Clinic when they want dependable care close to home in Cebu City and Naga.',
  },
]

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className="shell">
        <div className="about-split">
          <FadeContent duration={800} className="about-split__copy">
            <p className="eyebrow">About Fano Dental Clinic</p>
            <h2 id="about-heading" className="section__title">
              A trusted dental clinic in Cebu built around comfort and clarity.
            </h2>
            <p className="section__lede">
              Fano Dental Clinic — also known as Fano Dental Group by Dr.
              Bartolome Fano Jr. — helps patients find the best dental clinic in
              Cebu without sacrificing warmth. We focus on prevention, cosmetics,
              and restorative care for the whole family.
            </p>
            <p className="about-split__note">
              The Fano Dental Group team — clinicians dedicated to quality dental
              care across Cebu City and Naga.
            </p>
          </FadeContent>

          <AnimatedContent distance={36} duration={0.85} className="about-split__media">
            <figure className="about-photo">
              <img
                src={teamPhoto}
                alt="Fano Dental Clinic team — Dr. Bart M. Fano Jr., Dr. Cristy Fano Lodovice, and Dr. Reena Fano"
                width="1600"
                height="1200"
                loading="lazy"
              />
            </figure>
          </AnimatedContent>
        </div>

        <div className="pillars">
          {pillars.map((item, i) => (
            <AnimatedContent key={item.index} distance={40} delay={0.08 * i} duration={0.75}>
              <article className="pillar">
                <div className="pillar__meta">
                  <span>{item.index}/03</span>
                  <span>{item.label}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            </AnimatedContent>
          ))}
        </div>

        <div className="stats" aria-label="Clinic highlights">
          <AnimatedContent distance={28} duration={0.7}>
            <div className="stat">
              <p className="stat__value">
                <CountUp to={2} duration={1.2} />
              </p>
              <p className="stat__label">Branches in Cebu</p>
            </div>
          </AnimatedContent>
          <AnimatedContent distance={28} delay={0.08} duration={0.7}>
            <div className="stat">
              <p className="stat__value">
                <CountUp to={3} duration={1.2} />
              </p>
              <p className="stat__label">Experienced dentists</p>
            </div>
          </AnimatedContent>
          <AnimatedContent distance={28} delay={0.14} duration={0.7}>
            <div className="stat">
              <p className="stat__value">
                <CountUp to={100} duration={1.6} />%
              </p>
              <p className="stat__label">Patient-first approach</p>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  )
}
