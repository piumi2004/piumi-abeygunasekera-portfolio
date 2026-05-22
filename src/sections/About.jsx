function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-head">
        <span>About</span>
        <h2>Data science student with real product experience</h2>
      </div>
      <div className="about-grid">
        <div className="about-bio">
          <p>
            I am a Data Science undergraduate with a strong interest in problem solving, intelligent systems, and developing practical technology-driven solutions. I enjoy exploring how data, software, and creativity can come together to solve real-world challenges while continuously learning new technologies and improving my technical skills.
          </p>
          <p>
            Beyond academics, I enjoy reading books, writing short stories on online platforms, listening to music, and following Formula 1. These interests help me stay creative, curious, and inspired, while also shaping the way I think and approach challenges.
          </p>
          <p>
            I’m passionate about personal growth, innovation, and building meaningful projects that combine analytical thinking with creativity. Whether it’s through data science, software development, or storytelling, I enjoy creating things that have both purpose and impact.
          </p>
        </div>
        <div className="about-education-column">
          <h3 className="education-header">Education</h3>
          <div className="education-cards">
            <div className="info-card">
              <h3>SLIIT</h3>
              <p>BSc Information Technology (Data Science) | 2024 – Present</p>
              <p>CGPA: 3.58</p>
            </div>
            <div className="info-card">
              <h3>President’s Girls’ College</h3>
              <p>G.C.E Advance Level(A/L) – Physical Science | 2023(2024)</p>
              <p>G.C.E Ordinary Level(O/L) – 7A’s & 2B’s | 2020(2021)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
