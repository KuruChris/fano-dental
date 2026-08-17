import { useState } from 'react'
import FadeContent from '../reactbits/FadeContent'
import AnimatedContent from '../reactbits/AnimatedContent'
import { branches } from '../../data/branches'

export default function Location() {
  const [activeId, setActiveId] = useState(branches[0].id)
  const activeBranch = branches.find((branch) => branch.id === activeId) ?? branches[0]

  return (
    <section id="location" className="section section--soft" aria-labelledby="location-heading">
      <div className="shell">
        <div className="location-grid">
          <AnimatedContent distance={36} duration={0.8}>
            <div>
              <p className="eyebrow">Visit our clinics</p>
              <h2 id="location-heading" className="section__title">
                Five branches across Cebu and Leyte.
              </h2>
              <p className="section__lede">
                Looking for the best dental clinic in Cebu? Fano Dental Clinic
                now serves families from our main clinic on Urgello Street plus
                branches in Naga, Liloan, Talisay, and Baybay, Leyte.
              </p>
              <p className="location__note">
                <a
                  className="map-link"
                  href={activeBranch.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open {activeBranch.name} on Google Maps
                </a>
              </p>
            </div>
          </AnimatedContent>

          <FadeContent duration={1000}>
            <div className="map-panel map-panel--embed">
              <iframe
                key={activeBranch.id}
                title={`${activeBranch.name} on Google Maps`}
                src={activeBranch.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </FadeContent>
        </div>

        <ul className="branch-grid" aria-label="Fano Dental Clinic branches">
          {branches.map((branch, i) => {
            const isActive = branch.id === activeId
            return (
              <li key={branch.id}>
                <button
                  type="button"
                  className={`branch-card${branch.isMain ? ' branch-card--main' : ''}${isActive ? ' branch-card--active' : ''}`}
                  aria-pressed={isActive}
                  onClick={() => setActiveId(branch.id)}
                >
                  <p className="branch-card__index">{String(i + 1).padStart(2, '0')}</p>
                  <h3>{branch.name}</h3>
                  <p>{branch.detail}</p>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
