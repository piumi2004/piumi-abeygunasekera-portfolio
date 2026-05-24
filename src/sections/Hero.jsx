import { useEffect, useRef } from 'react'
import profilePhoto from '../assets/PXL_20250929_052441773~2.jpg'
import pdfFile from '../assets/Piumi Abeygunasekera CV Upd.pdf'

function Hero() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const timer = setTimeout(() => el.classList.add('visible'), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="hero-section" id="home">
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />

      <div className={`hero-content reveal`} ref={ref}>
        <div className="hero-copy">
          <div className="eyebrow" aria-hidden="true">Available for work</div>
          <h1>Hi, I&apos;m Piumi</h1>
          <p>
            Data Science undergraduate with interests in tech, problem solving,
            and building practical solutions - while enjoying reading, music, and storytelling.
          </p>
          <div className="hero-actions">
            <a className="cta-button" href="#projects">
              View Work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a className="cta-button" href={pdfFile} download="Piumi_Abeygunasekera_CV.pdf">Download CV</a>

            <a className="ghost-link" href="#contact">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-avatar-container">
          <div className="hero-avatar-ring">
            <img
              src={profilePhoto}
              alt="Piumi Abeygunasekera"
              className="hero-avatar-img"
            />
          </div>
          <div className="avatar-glow" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}

export default Hero
