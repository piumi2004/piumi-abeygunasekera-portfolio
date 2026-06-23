import { useReveal } from '../components/useReveal'

const skills = [
  {
    category: 'Languages',
    items: ['Python', 'Java', 'JavaScript', 'C', 'SQL'],
  },
  {
    category: 'Web / Backend',
    items: ['HTML / CSS / Tailwind', 'React', 'Node.js & Express', 'Spring Boot', 'JSP / Servlets'],
  },
  {
    category: 'Data & AI',
    items: ['Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'Matplotlib', 'Seaborn'],
  },
  {
    category: 'Tools',
    items: ['Git / GitHub', 'VS Code', 'IntelliJ IDEA', 'Postman', 'Arduino IDE','Power BI'],
  },
]

function Skills() {
  const ref = useReveal()
  return (
    <section className="skills-section reveal" ref={ref} id="skills">
      <div className="section-head">
        <span className="label">Skills</span>
        <h2>What I work with</h2>
      </div>
      <div className="skill-grid">
        {skills.map((s, i) => (
          <div className="skill-card" key={i}>
            <h4>{s.category}</h4>
            <ul>
              {s.items.map((item, j) => <li key={j}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
