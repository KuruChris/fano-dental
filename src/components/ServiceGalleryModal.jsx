import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import CircularGallery from './reactbits/CircularGallery'

export default function ServiceGalleryModal({ service, onClose }) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.__lenis?.stop()

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.__lenis?.start()
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

  if (!service) return null

  return createPortal(
    <div className="gallery-modal" role="presentation" onClick={onClose}>
      <div
        className="gallery-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="gallery-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="gallery-modal__header">
          <div>
            <p className="gallery-modal__eyebrow">Service gallery</p>
            <h3 id="gallery-modal-title">{service.title}</h3>
          </div>
          <button type="button" className="gallery-modal__close" onClick={onClose} aria-label="Close gallery">
            Close
          </button>
        </div>
        <p className="gallery-modal__hint">Drag or scroll to browse sample photos.</p>
        <div className="gallery-modal__stage">
          <CircularGallery
            items={service.gallery}
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.05}
            scrollSpeed={2}
            spacing={4.5}
            itemScale={1.35}
            font="bold 24px Manrope"
          />
        </div>
      </div>
    </div>,
    document.body,
  )
}
