import profilePhoto from '../assets/PXL_20250929_052441773~2.jpg'

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <div className="hero-copy">
          <h1>Hi, I&apos;m Piumi.</h1>
          <p>
            Data Science undergraduate with interests in tech, problem solving, and building practical solutions while also enjoying reading, music, and storytelling.
          </p>
          <div className="hero-actions">
            <a className="cta-button" href="#projects">
              View Work
            </a>
            <a className="ghost-link" href="#contact">
              Contact Me
            </a>
          </div>
        </div>
        <div className="hero-avatar-container">
          <div className="hero-avatar-wrapper">
            <img
              src={profilePhoto}
              alt="Piumi Abeygunasekera"
              className="hero-avatar-img"
            />
            <div className="hero-avatar-glow"></div>
          </div>
        </div>
      </div>
      <div className="hero-glow"></div>
    </section>
  )
}

export default Hero