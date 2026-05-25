import { useReveal } from '../components/useReveal'
import zooImg from '../assets/zoo.png'
import goviImg from '../assets/fertilizer.png'
import dineImg from '../assets/restaurent.png'
import chaptersImg from '../assets/bookstore.png';
import '../styles/projectImage.css';



const projects = [
  {
    title: 'Zentra Zoo — Zoo & Visitor Engagement App',
    url: 'https://github.com/chanithiperera/Zoo-Management.git',
    image: zooImg,
    period: 'Jan 2026 – May 2026',
    items: [
      'Full-stack Zoo Management web application using the MERN stack.',
      'Online ticket booking, event management, and group reservation features.',
      'E-commerce store for zoo merchandise with cart and order management.',
      'Responsive React frontend with team-based development via Git & GitHub.',
    ],
  },
  {
    title: 'Govi Smart — Fertilizer Recommendation & Resource Management',
    url: 'https://github.com/chanithiperera/Smart_Fertilizer_Recommendation.git',
    image: goviImg,
    period: 'Feb 2026 – May 2026',
    items: [
      'ML model for fertilizer recommendations based on agricultural data for paddy cultivation.',
      'Modules for machinery rental, product marketplace, inventory, and order management.',
      'Role-based access for Admins, Sellers, Agents, and Users.',
      'Flask APIs + MongoDB + Cloudinary + MERN stack full-stack platform.',
    ],
  },
  {
    title: 'Dine & Delight — Restaurant and Event Management',
    url: 'https://github.com/piumi2004/Dine-Delight.git',
    image: dineImg,
    period: 'Jul 2025 – Nov 2025',
    items: [
      'Table reservation and event booking features for restaurants.',
      'Layered architecture with controllers, services, and repositories.',
      'Customer and admin workflows with reliable MySQL persistence.',
    ],
  },
  {
    title: 'Chapters & Beyond — Online Bookstore Management',
    url: 'https://github.com/piumi2004/online-bookstore-management-system.git',
    image: chaptersImg,
    period: 'Feb 2025 – Jul 2025',
    items: [
      'Dynamic bookstore app using MVC architecture and OOP design.',
      'CRUD management for books, users, and orders.',
      'Responsive UI with JSP and Tailwind CSS.',
    ],
  },
]

function Projects() {
  const ref = useReveal()
  return (
    <section className="projects-section reveal" ref={ref} id="projects">
      <div className="section-head">
        <span className="label">Work</span>
        <h2>Featured Projects</h2>
      </div>
      <div className="project-grid">
        {projects.map((p, i) => (
          <article className="project-card" key={i}>
            <img src={p.image} alt={p.title} className="project-image" />
            <h3>
              <a className="project-title-link" href={p.url} target="_blank" rel="noopener noreferrer">
                {p.title}
                <span className="link-icon" aria-hidden="true">↗</span>
              </a>
            </h3>
            <p className="project-meta">{p.period}</p>
            <ul>
              {p.items.map((item, j) => <li key={j}>{item}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
