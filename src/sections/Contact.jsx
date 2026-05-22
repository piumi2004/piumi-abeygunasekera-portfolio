function Contact() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-name">Piumi Abeygunasekera</div>
          <p className="footer-tagline">Data Science · Full-Stack · AI</p>
          <p className="footer-bio">
            Open to collaboration, internships and data-driven product work.
          </p>
        </div>

        <div className="footer-links-group">
          <h4>Navigate</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Work</a></li>
            <li><a href="#skills">Skills</a></li>
          </ul>
        </div>

        <div className="footer-links-group">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:[abeygunasekerap2004@gmail.com]">abeygunasekerap2004@gmail.com</a></li>
            <li><a href="tel:+94761989879">+94 761 989 879</a></li>
            <li><a href="https://maps.app.goo.gl/d3aLfFvyEmJDMPHm8">Nawala, Colombo</a></li>
          </ul>
        </div>

        <div className="footer-links-group">
          <h4>Socials</h4>
          <ul>
            <li><a href="https://www.linkedin.com/in/piumi-abeygunasekera-a847243a7/">LinkedIn</a></li>
            <li><a href="https://github.com/piumi2004">GitHub</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Piumi Abeygunasekera. All rights reserved.</span>
      </div>
    </footer>
  )
}

export default Contact
