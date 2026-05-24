import React from 'react';

const certifications = [
  {
    title: 'Professional Certificate in Web Development',
    issuer: 'Informatics Institute of Technology',
    date: 'Nov 2025',
  },
  {
    title: 'AI/ML Engineer - Stage 1',
    issuer: 'Sri Lanka Institute of Information Technology',
    date: 'Jan 2026',
  },
  {
    title: 'Introduction to Data Science',
    issuer: 'Cisco Networking Academy',
    date: 'Feb 2026',
  },
  {
    title: 'Web Design For Beginners',
    issuer: 'University of Moratuwa',
    date: 'Mar 2026',
  },
];

function Certifications() {
  return (
    <section className="certifications-section" id="certifications">
      <div className="section-head">
        <span className="label">Certifications</span>
        <h2>Professional Certifications</h2>
      </div>
      <div className="cert-grid">
        {certifications.map((c, i) => (
          <div className="cert-card" key={i}>
            <h4>{c.title}</h4>
            <p>{c.issuer}</p>
            <p>{c.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
