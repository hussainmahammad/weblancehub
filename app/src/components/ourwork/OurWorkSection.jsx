import React, { useState, useEffect } from 'react';
import './OurWorkSection.css';
import { projects } from './projectsData.js';

const OurWorkSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const footer = document.querySelector('footer');
    const container = document.querySelector('.work-page-container');
    if (footer && container) {
      container.style.paddingBottom = `${footer.offsetHeight}px`;
    }
  }, []);

  const handleCardClick = (project) => {
    if (project.type === 'internal') {
      console.log('Selected Project:', project); // Debug
      setSelectedProject(project);
    }
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const ProjectModal = () => {
    if (!selectedProject || !selectedProject.details) {
      return (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={handleCloseModal}>&times;</button>
            <div className="modal-header">
              <h2 className="modal-title">Error</h2>
            </div>
            <div className="modal-body">
              <p>Project details are not available.</p>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="modal-overlay" onClick={handleCloseModal}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <button className="close-btn" onClick={handleCloseModal}>&times;</button>
          <div className="modal-header">
            <h2 className="modal-title">{selectedProject.details.headline || 'No Headline'}</h2>
          </div>
          <div className="modal-body">
            <p className="modal-description">{selectedProject.details.fullDescription || 'No Description'}</p>

            <div className="project-details-grid">
              <div className="details-section">
                <h4>Services Provided</h4>
                <ul className="services-list">
                  {selectedProject.details.services?.length ? (
                    selectedProject.details.services.map((service, index) => (
                      <li key={index}>{service}</li>
                    ))
                  ) : (
                    <li>No services listed</li>
                  )}
                </ul>
              </div>

              <div className="details-section">
                <h4>Project Team</h4>
                <ul className="team-list">
                  {selectedProject.details.team?.length ? (
                    selectedProject.details.team.map((member, index) => (
                      <li key={index}>{member}</li>
                    ))
                  ) : (
                    <li>No team members listed</li>
                  )}
                </ul>
              </div>
            </div>

            <div className="modal-gallery">
              {selectedProject.details.images?.length ? (
                selectedProject.details.images.map((imgUrl, index) => (
                  <img
                    key={index}
                    src={imgUrl}
                    alt={`Gallery image ${index + 1}`}
                    className="modal-gallery-image"
                  />
                ))
              ) : (
                <p>No images available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="work-page-container">
      {/* Header */}
      <header className="main-header">
        <div className="header-left">
          <span className="logo">CS</span>
          <button className="color-mode-btn">COLOR MODES</button>
        </div>
        <nav className="main-nav">
          <a href="#">INDEX</a>
          <a href="#">ARCHIVES</a>
          <a href="#">SERVICES</a>
          <a href="#">CONTACT</a>
        </nav>
        <div className="header-right">
          <button className="menu-btn">☰</button>
        </div>
      </header>
      
      {/* Our Work Heading */}
      <h2 className="section-title">Our Work</h2>

      {/* Main content grid */}
      <main className="work-grid">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="project-card-wrapper" 
            onClick={() => handleCardClick(project)}
          >
            {project.type === 'external' ? (
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link"
              >
                <div className="project-card">
                  <img src={project.imageUrl} alt={project.title} className="project-image" />
                  <div className="project-overlay">
                    <div className="project-info">
                      <h3 className="project-title">{project.title}</h3>
                      <span className="project-year">{project.year}</span>
                      <p className="project-description">{project.description}</p>
                      <span className="visit-link">VISIT SITE</span>
                    </div>
                  </div>
                </div>
              </a>
            ) : (
              <div className="project-card">
                <img src={project.imageUrl} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <div className="project-info">
                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-year">{project.year}</span>
                    <p className="project-description">{project.description}</p>
                    <span className="visit-link">VIEW DETAILS</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </main>
      
      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <span className="scroll-text">SCROLL</span>
      </div>

      {selectedProject && <ProjectModal />}
    </div>
  );
};

export default OurWorkSection;