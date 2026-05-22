function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="section-head">
        <span>Work</span>
        <h2>Featured Projects</h2>
      </div>
      <div className="project-grid">
        <article className="project-card">
          <h3><a className="project-title-link" href="https://github.com/chanithiperera/Zoo-Management.git" target="_blank" rel="noopener noreferrer">Zentra Zoo — Zoo &amp; Visitor Engagement App <span className="link-icon">↗</span></a></h3>
          <p className="project-meta">Jan 2026 – May 2026</p>
          <ul>
            <li>Developed a full-stack Zoo Management web application using the MERN stack.</li>
            <li>Implemented online ticket booking, event management, and group reservation features.</li>
            <li>Built an e-commerce store for zoo merchandise with cart and order management.</li>
            <li> Designed responsive and user-friendly frontend interfaces using React.</li>
            <li> Contributed to database design, system functionality, testing, and debugging.</li>
            <li> Collaborated within a team using Git and GitHub for project management and version control.</li>
          </ul>
        </article>
        <article className="project-card">
          <h3><a className="project-title-link" href="https://github.com/chanithiperera/Smart_Fertilizer_Recommendation.git" target="_blank" rel="noopener noreferrer">Govi Smart- Smart Fertilizer Recommendation & Resource Management  <span className="link-icon">↗</span></a></h3>
          <p className="project-meta">Feb 2026 – May 2026</p>
          <ul>
            <li>Developed a Smart Fertilizer Recommendation and Agricultural Resource Management System for paddy cultivation.</li>
            <li>Integrated a machine learning model to provide fertilizer recommendations based on agricultural data.</li>
            <li>Built modules for machinery rental, product marketplace, inventory handling, and order management.</li>
            <li>Implemented role-based management features for Admins, Sellers, Agents, and Users.</li>
            <li>Developed machinery booking and rental tracking features with dynamic cost calculation and availability management.</li>
            <li>Integrated Flask APIs, MongoDB, Cloudinary, and the MERN stack to create a responsive full-stack platform.</li>
          </ul>
        </article>
        <article className="project-card">
          <h3><a className="project-title-link" href="https://github.com/piumi2004/Dine-Delight.git" target="_blank" rel="noopener noreferrer">Dine &amp; Delight - Restaurant and Event Management System  <span className="link-icon">↗</span></a></h3>
          <p className="project-meta">Jul 2025 – Nov 2025</p>
          <ul>
            <li>Developed table reservation and event booking features for restaurants.</li>
            <li>Implemented controllers, services, and repositories in a layered architecture.</li>
            <li>Built customer and admin workflows with reliable MySQL persistence.</li>
          </ul>
        </article>
        <article className="project-card">
          <h3><a className="project-title-link" href="https://github.com/piumi2004/online-bookstore-management-system.git" target="_blank" rel="noopener noreferrer"> Chapters & Beyond - Online Bookstore Management System <span className="link-icon">↗</span></a></h3>
          <p className="project-meta">Feb 2025 – Jul 2025</p>
          <ul>
            <li>Created a dynamic bookstore app using MVC architecture and OOP design.</li>
            <li>Designed CRUD management for books, users, and orders.</li>
            <li>Implemented a responsive UI with JSP and Tailwind CSS.</li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Projects
