import './ProjectCard.scss';
import PropTypes from 'prop-types';

const ProjectCard = ({ projectData }) => {
  return (
    
    <div className="project-card">
      <img src={projectData.image} alt={projectData.title}  className="project-image"/>
      <div className="project-content">
        <h3>{projectData.title}</h3>
        <p>{projectData.description}</p>
        <a href={projectData.link} target="_blank" rel="noopener noreferrer" className="project-links">
          Ver proyecto
        </a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
    projectData: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }).isRequired,
  };

export default ProjectCard;